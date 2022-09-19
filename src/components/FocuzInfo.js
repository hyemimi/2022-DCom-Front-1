import styled from 'styled-components';
import { PageDiv } from './Styled/PageDiv';

const Info = () => {
    return (
        <PageDiv>
            <p className="line"></p>
            <Title>🪂FOCUZ 캠스터디 사용법🪂</Title>
            <div style={{ margin: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button btn color="green">
                        Start
                    </Button>
                    <div style={{ fontSize: '20px', margin: '20px' }}>
                        시간 측정과 얼굴인식을 시작합니다. <br />
                        얼굴인식에 실패하면 시간 측정을 자동으로 멈춥니다.
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button btn color="#b22222">
                        Start
                    </Button>
                    <div style={{ fontSize: '20px', margin: '20px' }}>
                        잠시 멈출 수 있습니다. (시간은 리셋되지 않습니다)
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button btn color="green">
                        Restart
                    </Button>
                    <div style={{ fontSize: '20px', margin: '20px' }}>
                        다시 시작할 수 있습니다.
                    </div>
                </div>
            </div>
            <Title red>
                주의! 측정 페이지를 벗어나면(새로고침, 페이지이동 등) 측정
                시간이 리셋됩니다.
            </Title>
        </PageDiv>
    );
};

const Title = styled.h2`
    font-size: 20px;
    color: ${(props) => props.red && 'red'};
`;
export default Info;

const Button = styled.button`
    width: 230px;
    height: 100px;
    padding: 10px 20px;
    background-color: ${(props) => props.color};
    border-radius: 0px;

    font-size: 30px;
`;
