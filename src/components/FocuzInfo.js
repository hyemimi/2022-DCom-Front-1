import { PageDiv } from './Styled/PageDiv';
const Info = () => {
    return (
        <PageDiv>
            <p className="line"></p>
            <h2>1️⃣ FOCUZ 시작하기</h2>
            <p>
                Start를 누르면 시간 측정과 얼굴인식을 시작합니다. 얼굴인식에
                실패하면 시간 측정을 멈춥니다.
            </p>
            <h2 style={{ color: 'red' }}>
                2️⃣ 중요! FOCUZ가 시간을 저장하는 방법
            </h2>
            <p>
                Start를 눌러 시간이 측정 되고 있는 상태에서 Save 버튼을 누릅니다
                ⇒ 시간이 리셋되므로 주의 <br />
                Save를 누르지 않으면 저장되지 않습니다. 측정 페이지를
                벗어나면(새로고침, 페이지이동 등) 시간이 저장되지 않습니다.
            </p>
            <h2> 3️⃣ Stop 버튼 </h2>
            <p>잠시 멈출 수 있습니다. (시간은 리셋되지 않습니다)</p>
            <h2> 4️⃣ Restart 버튼 </h2>
            <p>다시 시작할 수 있습니다.</p>
        </PageDiv>
    );
};

export default Info;
