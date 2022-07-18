
function GroupList({name,leader,members}) {

    return(
             <div className="box-content">
                <div className="group-name">"{name}"</div>
                <div>그룹장 | {leader}</div>
                {members.map((item, idx) => {
                  return (
                    <div>
                      {item === '' ? 'Empty' : `member${idx + 1} | ${item}`}
                    </div>
                  )
                })}


        </div>

    )
}

export default GroupList