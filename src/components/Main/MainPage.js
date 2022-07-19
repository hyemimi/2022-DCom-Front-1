import app from '../../firebase'
import {getAuth} from 'firebase/auth'
import React, { useEffect, useState } from "react";
import FriendsProfile from '../FriendsProfile'



const MainPage = ({users}) => {
  const auth = getAuth(app); // firebase, (테스트용)
  // const userProfile = users.filter((it)=>it.email === auth.currentUser.email);
  // console.log(userProfile)
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
                    <div style={{alignItems:'center'}}>
                    <button>시작하기</button>
                     <button>내 프로필 수정하기</button>
                     {/* <FriendsProfile image={userProfile[0].image} name={userProfile[0].name} nickname={userProfile[0].nickname} email={userProfile[0].email} /> */}
                        {/* 프로필을 보여주는 컴포넌트, 헷갈리니까 FriendsProfile 대신 Profile로 바꾸는 게 어떨까?*/}
                    </div>

            </div>)
}

export default MainPage
