
import app from '../firebase'
import db from '../firestore'
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import {getAuth} from 'firebase/auth'


// 메인 페이지 - 유저 정보 수정 부분 연습하기.... 나중에 따로 컴포넌트를 만들거나 라우팅
// 이렇게 하는게 맞나요 ㅜ

const Profile = () => {
    const auth = getAuth(app)

    const [userName,setUserName] = useState("")
    const [userInfo,setUserInfo] = useState([])
    useEffect(() => {
        const q = query(collection(db, "profiles"), orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
          const profileArr = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }));
          setUserInfo(profileArr);
          console.log(profileArr)
        });
      }, []);

      const onSubmit = async (event) => {
        event.preventDefault();
        try {
          await addDoc(collection(db, "profiles"), {
            username: userName,
            createdAt: Date.now(),
          });
        } catch (e) {
          console.error(e);
        }
    
        setUserName("");
      };
      const onChange = (event) => {
        setUserName(event.target.value);
      };




    return(
        <div><h1>
              <a style={{ color: '#ffc83d', fontSize: 'min(6vw, 40px)' }}>
                DCOM STUDY
              </a>
            </h1>
            <p className="line"></p>
            {userInfo.map((it,idx)=>(
                <div>{idx === 0 && `${it.username}님 환영합니다~!`}</div>
            ))}
            <h1>친구들과 스터디 집중도를 측정해보세요 *.*</h1>
            <p className='line'>
            <form onSubmit={onSubmit}>
        <input
          type="text"
          value={userName}
          onChange={onChange}
          placeholder="원하는 별명을 작성해주세요"
          maxLength={120}
        />
        <input type="submit" value="별명 수정하기" />
        </form>
        </p>
                    </div>)
}

export default Profile;