import { isValidTimestamp } from '@firebase/util'
import {useState} from 'react'
import GroupItem from '../components/GroupItem'
import FriendsProfile from '../components/FriendsProfile';
import app from '../firebase';
import {getAuth} from 'firebase/auth'

function NewGroup({ users }) {
    const [groupname,setGroupName] = useState()

    const auth = getAuth(app); // firebase, (테스트용)
    const userProfile = users.filter((it)=>it.email === auth.currentUser.email);
    const [groupleadername,setGroupLeaderName] = useState(userProfile[0].name)

    const [group_leader_nickname,setGroupLeader_Nickname] = useState(userProfile[0].nickname)
    const [group_leader_email,setGroupLeader_Email] = useState(userProfile[0].email)

    const onChange = (e) => {
    
        if(e.target.name==="groupname"){
            setGroupName(e.target.value)
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
       
        setGroupName("")

        setIsEdit(false)
    }

    const onClick = () => {
        setIsEdit(false)
    }

    return(
        <div className='NewGroup'> 
            <h1>
                <a style={{ color: '#ffc83d', fontSize: 'min(6vw, 100px)', textAlign: 'center' }}>New Group</a>
                <p className="line"></p>
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <h1 style={{ fontSize: 'min(6vw, 40px)', textAlign: 'center' }}> 그룹명 :  
                        <input name = "groupname" value={groupname} type="text" onChange={onChange} />
                    </h1>
                </div>
                <div>
                    <h1 style={{ fontSize: 'min(6vw, 40px)', textAlign: 'center' }}>
                    그룹 리더: {groupleadername}
                    </h1>
                </div>
                <div>
                    <input type="submit" value="추가하기" />
                </div>
            </form>
            <div>
                <button onClick={onClick}>cancel</button>
            </div>
        </div>
    )

}

export default NewGroup