import { useState } from 'react'
import GroupItem from '../components/GroupItem'
import SideMenu from '../Layout/SideMenu'
import { Link } from 'react-router-dom'
import GroupButton from '../components/GroupButton'

const Groups = ({

  studyList,
  setStudyList,
}) => {
  const [myList, setMyList] = useState(studyList)

  // <리스트 보여주기>
  // info에서 user에 해당하는 정보를 가져온 다음(filter?), setMyInfo로 myInfo에 넣기
  // myInfo의 studyId 배열을 돌면서 studyList의 studyId와 일치하면 myList에 넣기(filter)
  // myList를 map을 이용해서 돌면서 name과 member 보여주기
  // * 가입한 유저 데이터 어떻게 접근할지? + 별명으로 접근할 수 있었으면 좋겠음 *
  // * 쌓여있는 유저 데이터에서 어떻게 로그인된 유저의 정보를 가져올지?*

  // <탈퇴 버튼>
  // 리스트 옆에 탈퇴버튼 구현하기 - 클릭하면 myList에서 삭제 + myInfo에서도 삭제

  return (
    <>

      <div className="content">
        <h1 className="groupList-header"> My Groups </h1>
        <div className='groupsAdd'>
                <Link
                  key='searchGroup'
                  to='searchGroup'>
                  <button className='groupsAddBtn'>🔍　스터디 그룹 검색하러가기</button>
                </Link>
              </div>
        <div className="out">
          <button className="groups-btn">스터디그룹 생성하기</button>
        </div>
        <div>
          {myList.map((it) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
              <GroupItem name={it.name} leader={it.leader} members={it.member} buttontext="탈퇴하기"/>
              </div>
            )
          })}
          </div></div>
    </>
  )
}

export default Groups
