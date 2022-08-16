import React from 'react';
import styled, { useTheme } from 'styled-components';

export const SearchBox = ({ onChange, placeholder }) => {
    const theme = useTheme();

    return (
        <Input
            placeholder={placeholder}
            theme={theme}
            id="inputvalue"
            type="text"
            onChange={onChange}
        />
    );
};

const Input = styled.input`
    width: 500px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.lightBackground || '#2f2f2f'};
    border-radius: 20px;
`;
