
import React, { useRef, useState, useEffect } from 'react';
import { getCurrentUserInfo } from '../store/user';
import { registerUser } from '../store/user';
import { frontUrl } from '../env';
import axios from 'axios';
import UserRegister from '../components/UserRegister';
import { Link } from 'react-router-dom';
import { Box } from '../components/Styled/Box';
import { BasicInput, TextareaInput } from '../components/Styled/Input';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie'; 

const SignUp = () => {
    const [member, setismember] = useState(false);
    const [currentUserMotto, setCurrentUserMotto] = useState(null);
    const [inputs, setInputs] = useState({
      motto: '',
      nickname: ''
  });

  const onChange = (e) => {
      if (e.target.name === 'motto') {
        setInputs({
            motto: e.target.value,
            nickname: inputs.nickname
        });
      }
      if (e.target.name === 'nickname') {
        setInputs({ motto: inputs.motto, nickname: e.target.value });
      }
  };

  const onSubmit = async (e) => {        
      //registerUser(inputs);
      console.log(inputs);

      try {
        const res = await axios.post('http://localhost:8080/user/register', {
          motto: inputs.motto,
          nickname: inputs.nickname,
        }, {
          withCredentials: true
        })
        alert("회원가입에 성공하였습니다!")
        window.location.href = `${frontUrl}`

      } catch (error) {
        alert('잘못된 요청입니다.');
      }
  }
  
    // useEffect(() => {
    //     axios
    //         .post('http://localhost:8080/user/register', {
    //             motto: inputs.motto,
    //             nickname: inputs.nickname,
    //         })
    //         .then(function (response) {
    //             getCurrentUserInfo().then((r) => console.log(r.data));
    //         })
    //         .catch(function (error) {
    //             // 오류발생시 실행
    //         });
    // }, []); // 로그인 처음 했을 때


    return (
        <>
            {}{' '}
            <div className="box">
                <div className="title">DCOM STUDY 회원가입</div>
                <div className="subTitle">
                    DCOM STUDY 계정으로 모든 서비스 이용이 가능합니다.
                </div>


        <button className="signUpBtn">
          회원가입
        </button>
        <div
              style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5em',
                  flexDirection: 'column',
                  alignItems: 'center'
              }}
          >
              <Box width="80%" style={{ maxWidth: '800px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', width: '100%' }}>
                  <BasicInput
                      placeholder="모토"
                      name="motto"
                      type="text"
                      width="100%"
                      value={inputs.motto}
                      onChange={(e) => { onChange(e); }}
                  />

                  <TextareaInput
                      placeholder="닉네임"
                      name="nickname"
                      width="100%"
                      height="50px"
                      value={inputs.description}
                      onChange={(e) => { onChange(e); }}
                  />                    


                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5em' }}>
                      <Link to="/">
                          <button>취소하기</button>
                      </Link>
                      <button className='light' onClick={(e) => onSubmit(e)}>추가하기</button>
                  </div>
              </div>
              </Box>
          </div>
      </div>
    </>
    );
};

export default SignUp;
