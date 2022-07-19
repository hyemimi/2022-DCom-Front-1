

// GroupItem은 그룹별 프로필과 같다고 보면 된다. 그룹 리스트를 나열할 때 컴포넌트로 사용될 예정

function GroupList({name,leader,members}) {

    return(
             <div >
                <div className="group-name">"{name}"</div>
                <div>그룹장 | {leader}</div>
                {members.map((item, idx) => {
                  return (
                    <div>
                      {item === '' ? 'Empty' : `member${idx + 1} | ${item}`}
                    </div>
                  )
                })}
<div className="out">
<button className="groups-btn">탈퇴하기</button>
</div>
        </div>

    )
}


export default GroupList