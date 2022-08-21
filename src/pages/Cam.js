import React, { useRef } from 'react';
import { PageDiv } from '../components/Styled/PageDiv';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import * as blazeface from '@tensorflow-models/blazeface';
import styled from 'styled-components';
import Timer from '../components/Timer';
import { addStudy, currentTime } from '../store/study';
import { useLocation } from 'react-router';

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
    const location = useLocation();
    const [timer, setTimer] = React.useState(undefined);
    const [time, setTime] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [isBreak, setIsBreak] = React.useState(false);
    //isCam이 true이면 캠이 켜짐
    const [isCam, setIsCam] = React.useState(false);

    const videoRef = React.useRef(null);
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        if (location.pathname !== '/cam') {
            setIsCam(false);
        }
    }, [location]);
    React.useEffect(() => {
        const initFD = async () => {
            await tf.setBackend('webgl');
            g_var.model = await blazeface.load();

            getWebcam((stream) => {
                videoRef.current.srcObject = stream;
            });
        };
        if (isCam) {
            initFD();
        } else {
            return;
        }
    }, [isCam]);

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
                    setIsBreak(true);
                    alert('인식 실패❗시작하기를 다시 눌러주세요');
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

        if (isActive && isBreak === false) {
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
    }, [isActive, isBreak]);
    const startOrStop = () => {
        // start
        if (!isActive) {
            setIsCam(true);
            setIsActive(true);
            setIsBreak(false);
        }
        //stop
        else {
            setIsActive(false);
            currentTime();
            addStudy({
                timeSecond: time,
            });
            alert('저장완료!');
            setTime(0);
            setIsCam(false);
        }
    };
    const breakHandler = () => {
        // 다시 시작하기
        if (isBreak) {
            setIsBreak(false);
        }
        // 잠시 멈추기
        else {
            setIsBreak(true);
        }
    };

    return (
        <PageDiv>
            <div style={{ display: 'flex' }}>
                {isActive ? (
                    <Button btn color="#ff6347" onClick={() => startOrStop()}>
                        Save
                    </Button>
                ) : (
                    <Button btn color="green" onClick={() => startOrStop()}>
                        Start
                    </Button>
                )}
                {!isBreak ? (
                    <Button btn color="#b22222" onClick={breakHandler}>
                        Stop
                    </Button>
                ) : (
                    <Button btn color="green" onClick={breakHandler}>
                        Restart
                    </Button>
                )}

                <Button>
                    <Timer watch time={time} />
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
    width: ${(props) => (props.btn ? '230px' : '450px')};
    height: 100px;
    padding: 10px 20px;
    background-color: ${(props) => props.color};
    border-radius: 0px;

    font-size: 30px;
`;
