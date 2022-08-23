import { createGroup } from './../store/group';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../components/Styled/Box';
import { BasicInput, TextareaInput } from '../components/Styled/Input';

const NewGroup = () => {
    const [inputs, setInputs] = useState({
        name: '',
        description: ''
    });

    const onChange = (e) => {
        if (e.target.name === 'name') {
          setInputs({
              name: e.target.value,
              description: inputs.description
          });
        }
        if (e.target.name === 'description') {
          setInputs({ name: inputs.name, description: e.target.value });
        }
        console.log(inputs);
    };

    const onSubmit = (e) => {
        if ((inputs.name.length >= 2) && (inputs.description.length >= 2)) {
             e.preventDefault();          
             alert('그룹 생성이 완료되었습니다!');
             setInputs({name: '',
             description: ''})
          }
         else {
          alert('두 글자 이상의 그룹명과 설명을 입력해주세요.');
          setInputs({name: '',
          description: ''})
        }
    };

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
                <h1 style={{ color: '#ffc83d' }}> 스터디그룹 생성하기 </h1>
                <Box width="80%" style={{ maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', width: '100%' }}>
                    <BasicInput
                        placeholder="그룹명"
                        name="name"
                        type="text"
                        width="100%"
                        value={inputs.name}
                        onChange={(e) => { onChange(e); }}
                    />
                    <TextareaInput
                        placeholder="설명"
                        name="description"
                        width="100%"
                        height="240px"
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

export default NewGroup;
