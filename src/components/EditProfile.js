import { isValidTimestamp } from '@firebase/util'
import {useState} from 'react'
import FriendsProfile from './FriendsProfile'

function EditProfile({userProfile,setIsEdit,setmy_email, setmy_image, setmy_name, setmy_nickname}) {
    const myprofile = userProfile[0]
const [myname,setMyName] = useState(myprofile.name)
const [myimage,setMyImage] = useState(myprofile.image)
const [mynickname,setMyNickname] = useState(myprofile.nickname)
const [myemail,setMyEmail] = useState(myprofile.email)
const onChange = (e) => {
  
    if(e.target.name==="mynickname"){
        setMyNickname(e.target.value)
    }
    if(e.target.name==="myimage"){
        setMyImage(e.target.value)
    }
    if(e.target.name==="myemail"){
        setMyEmail(e.target.value)
    }
   
}
const onSubmit = (event) => {
    event.preventDefault();
    setmy_email(myemail)
    setmy_nickname(mynickname)
    setmy_image(myimage)
    
    setMyEmail("")
    setMyImage("")
    setMyName("")
    setMyNickname("")
    setIsEdit(false)
}
const onClick = () => {
    setIsEdit(false)

}
    return(
        <div>
            <h1>My Profile</h1>
       
            <form onSubmit={onSubmit}>
                <div>
                <h1> 이름 :  
            <input name = "myname" value={myname}type="text" onChange={onChange} />
            </h1>
                </div>
            <div>
            <h1>
              별명 :
              <input name = "mynickname"value={mynickname}type="text" onChange={onChange} />
            </h1>
            </div>
            <div>
            <h1>
              프로필이미지 :
              <input name = "myimage"value={myimage}type="text" onChange={onChange} />
            </h1>
            </div>
            <div>
            <h1>
              email :
              <input name = "myemail"value={myemail}type="text" onChange={onChange} />
        </h1>
        </div>
        <div>
        <input type="submit" value="수정하기" />
        </div>
      </form>
      <div>
      <button onClick={onClick}>cancel</button>
      </div>
  


               

           
        </div>
    )

}

export default EditProfile