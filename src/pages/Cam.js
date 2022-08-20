import React, { useRef } from 'react';
import { PageDiv } from '../components/Styled/PageDiv';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import * as blazeface from '@tensorflow-models/blazeface';
import styled from 'styled-components';
import Timer from '../components/Timer';
import { addStudy, currentTime } from '../store/study';

const g_var = {};

const getWebcam = (callback) => {
    try {
        const constraints = {
            video: true,
            audio: false,
        };
        navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

const Styles = {
    Video: {
        width: '35vw',
        background: 'rgba(245, 240, 215, 0.5)',
        border: '1px solid green',
    },
    Canvas: {
        width: '35vw',
        background: 'rgba(245, 240, 215, 0.5)',
        border: '1px solid green',
    },
    None: { display: 'none' },
};

const estimateCanvas = async (canvasRef) => {
    const predictions = await g_var.model.estimateFaces(canvasRef, false);
    return predictions;
};

function FaceDetector() {
    const [timer, setTimer] = React.useState(undefined);
    const [time, setTime] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [stoptime, setStopTime] = React.useState([]);

    const videoRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const initFD = async () => {
            await tf.setBackend('webgl');
            g_var.model = await blazeface.load();

            getWebcam((stream) => {
                videoRef.current.srcObject = stream;
            });
        };
        initFD();
    }, []);

    const drawToCanvas = async () => {
        try {
            const ctx = canvasRef.current.getContext('2d');

            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;

            if (ctx && ctx !== null) {
                if (videoRef.current) {
                    ctx.translate(canvasRef.current.width, 0);
                    ctx.scale(-1, 1);
                    ctx.drawImage(
                        videoRef.current,
                        0,
                        0,
                        canvasRef.current.width,
                        canvasRef.current.height
                    );
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                }

                const preds = await estimateCanvas(canvasRef.current);
                if (preds.length === 0) {
                    setIsActive(false);
                    alert('인식 실패❗시작하기를 다시 눌러주세요');
                    currentTime();
                    addStudy({
                        timeSecond: time,
                    });
                }

                for (let i = 0; i < preds.length; i++) {
                    let p = preds[i];
                    ctx.strokeStyle = '#FF0000';
                    ctx.lineWidth = 5;
                    ctx.strokeRect(
                        p.topLeft[0],
                        p.topLeft[1],
                        p.bottomRight[0] - p.topLeft[0],
                        p.bottomRight[1] - p.topLeft[1]
                    );
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    React.useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
                drawToCanvas();
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive]);
    const startOrStop = () => {
        if (!isActive) {
            setIsActive(true);
        } else {
            setIsActive(false);
            currentTime();
            addStudy({
                timeSecond: time,
            });
        }
    };

    return (
        <PageDiv>
            <div style={{ display: 'flex' }}>
                <Button btn onClick={() => startOrStop()}>
                    {isActive ? '공부 멈추기' : '공부 시작하기'}{' '}
                </Button>
                <Button>
                    <Timer time={time} />
                </Button>
            </div>

            <div
                style={{
                    width: '80vw',
                    height: '100vh',
                    padding: '3em',
                }}
            >
                <table>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <td>웹캠</td>
                            <td>얼굴 인식</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    style={Styles.Video}
                                />
                            </td>
                            <td>
                                <canvas ref={canvasRef} style={Styles.Canvas} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </PageDiv>
    );
}

export default FaceDetector;

const Button = styled.button`
    width: 500px;
    height: 100px;
    padding: 10px 20px;
    background-color: ${(props) => props.btn && '#ff6347'};
    border-radius: 25px;
    font-size: 30px;
`;
