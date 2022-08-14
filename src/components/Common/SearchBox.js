import React from "react";
import styled, { useTheme } from "styled-components";

export const SearchBox = ({onChange}) => {
    const theme = useTheme();

    return (
        <Input
            theme={theme}
            id="inputvalue"
            type="text"
            placeholder="친구의 닉네임을 입력하세요."
            onChange={onChange}
            />
    )
}

const Input = styled.input`
    width: 500px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.lightBackground || '#2f2f2f'};
    border-radius: 20px;
`

