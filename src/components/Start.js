
import app from '../firebase'
import db from '../firestore'
import {getAuth} from 'firebase/auth'
import React, { useEffect, useState } from "react";
import FriendsProfile from './FriendsProfile'
import EditProfile from './EditProfile';
import { Link } from 'react-router-dom';



const Profile = ({users}) => {
  const auth = getAuth(app); // firebase, (테스트용)
  const [isEdit,setIsEdit] = useState(false)
  const userProfile = users.filter((it)=>it.email === auth.currentUser.email);
  const [my_name,setMy_Name] = useState(userProfile.name)
const [my_image,setMy_Image] = useState(userProfile.image)
const [my_nickname,setMy_Nickname] = useState(userProfile.nickname)
const [my_email,setMy_Email] = useState(userProfile.email)
 
  
  // 전체 유저 리스트를 돌면서 현재 로그인한 유저의 email과 같은 요소만 필터함
  // my_friend 리스트는 dummylist로 사용됨


    return(
        <div><h1>
              <a style={{ color: '#ffc83d', fontSize: 'min(6vw, 40px)' }}>
                DCOM STUDY
              </a>
             
            </h1>
            <p className="line"></p>
            <div>
              
            </div>

                    {!isEdit ? <div style={{alignItems:'center'}}>
                    <button >시작하기</button>
 
                    <button onClick = {()=>{setIsEdit(true)}}>내 프로필 수정하기</button>
        
                    <FriendsProfile image={userProfile[0].image} name={userProfile[0].name} nickname={userProfile[0].nickname} email={userProfile[0].email} />
                
                    </div>: <EditProfile userProfile={userProfile} setIsEdit={setIsEdit}
                    setmy_email={setMy_Email} setmy_image={setMy_Image} setmy_name={setMy_Name} setmy_nickname={setMy_Nickname}/>}
                        {/* 프로필을 보여주는 컴포넌트, 헷갈리니까 FriendsProfile 대신 Profile로 바꾸는 게 어떨까?*/}
                    </div>
              
            )
        
}

export default Profile;
