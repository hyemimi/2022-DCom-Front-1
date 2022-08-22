import styled from 'styled-components';
import { PageDiv } from './Styled/PageDiv';
const Info = () => {
    return (
        <PageDiv>
            <p className="line"></p>
            <Title>1️⃣ FOCUZ 시작하기</Title>
            <p>
                Start를 누르면 시간 측정과 얼굴인식을 시작합니다. 얼굴인식에
                실패하면 시간 측정을 멈춥니다.
            </p>
            <Title red>2️⃣ 중요! FOCUZ가 시간을 저장하는 방법</Title>
            <p>
                측정 페이지를 벗어나면(새로고침, 페이지이동 등) 측정 시간이
                리셋됩니다.
            </p>
            <Title> 3️⃣ Stop 버튼 </Title>
            <p>잠시 멈출 수 있습니다. (시간은 리셋되지 않습니다)</p>
            <Title> 4️⃣ Restart 버튼 </Title>
            <p>다시 시작할 수 있습니다.</p>
        </PageDiv>
    );
};

const Title = styled.h2`
    font-size: 20px;
    color: ${(props) => props.red && 'red'};
`;
export default Info;
