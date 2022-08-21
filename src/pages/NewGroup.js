import { createGroup } from './../store/group';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../components/Styled/Box'
import { BasicInput, TextareaInput } from '../components/Styled/Input';

function NewGroup () {
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
    });

    const onChange = (e) => {
        if(e.target.name === 'name'){
            setInputs({ name: e.target.value, description: inputs.description });
        }
        if(e.target.name === 'description'){
            setInputs({ name: inputs.name, description: e.target.value });
        }  
        console.log(inputs);
    };

    const onSubmit = async (event) => {
        if(inputs.name.length)
        event.preventDefault();
        await createGroup({
            description: inputs.description,
            name: inputs.name,
        });
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '0.5em'}}>
            <Box width="80%">
            <h1 className="newgroup-header"> 스터디그룹 생성하기 </h1>
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
                    <Link to="/">
                        <button>취소하기</button>
                    </Link>
                    <button className='light'>추가하기</button>
                </div>
            </form>
        </Box>
        </div>
    );
}

export default NewGroup;
