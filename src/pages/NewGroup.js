import { createGroup } from './../store/group';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/auth';
import { Box } from '../components/Styled/Box'
import { BasicInput, TextareaInput } from '../components/Styled/Input';

function NewGroup () {
    const auth = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
    });

    const onChange = (e) => {
        if (e.target.name === 'inputs') {
          setInputs(e.target.value);
        }
        if (e.target.name === 'des') {
          setDes(e.target.value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await createGroup({
            description: des,
            name: inputs
        });
    };

    const onClick = () => {
        // setIsEdit(false);
    };

    return (
        <div>
            <Box width="80%">
            <h1> 스터디그룹 생성하기 </h1>
            <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                <BasicInput
                    placeholder="그룹명"
                    name="name"
                    type="text"
                    value={inputs.name}
                    onChange={onChange}
                />    
                <TextareaInput
                    placeholder="설명"
                    name="description"
                    value={inputs.description}
                    onChange={onChange}
                />       
                
                <div style={{display: 'flex', justifyContent: 'center', gap: '0.5em'}}>
                    <button onClick={onClick}>취소하기</button>
                    <button className='light'>추가하기</button>
                </div>
            </form>
        </Box>
        </div>
    );
}

export default NewGroup;
