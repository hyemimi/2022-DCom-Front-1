import React from "react";
import styled, { useTheme } from "styled-components";
import { BasicInput } from "../Styled/Input";

export const SearchBox = ({onChange, placeholder}) => {
    const theme = useTheme();

    return (
        <BasicInput
            theme={theme}
            width='500px'
            id="inputvalue"
            type="text"
            placeholder="{placeholder}"
            onChange={onChange}
            />
    )
}

