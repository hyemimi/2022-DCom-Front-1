import { input } from '@tensorflow/tfjs';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../components/Styled/Box';
import { BasicInput, TextareaInput } from '../components/Styled/Input';
import { registerUser } from '../store/user';
import { API } from '../store/axiosCall';

const UserRegister = () => {
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
        console.log(inputs);
    };

    const onSubmit = (e) => {        
            //registerUser(inputs);
            console.log(inputs);
             alert('회원가입이 완료되었습니다!');
    }
    

    return (
        <>
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
        </>
    );
};

export default UserRegister;
