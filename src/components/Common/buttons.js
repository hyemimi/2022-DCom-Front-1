import styled from "styled-components";
import { useThemeColor } from "../../Context/theme";

export const BasicButton = styled.button`
    font-size: 14px;
    padding: 8px;
    margin: auto;
    text-align: center;
    color: ${theme => theme.background};
    background-color: ${theme => theme.lightBackground};
    border-radius: 10px;
    display: block;
    border: 0px;
    cursor: pointer;
    transition-duration: 100ms;
    &:hover {
        color: ${theme => theme.lightBackground};
        background-color: ${theme => theme.white};
        transition-duration: 100ms;
    }
`



export const ghostButton = styled.button`
    font-size: 14px;
    padding: 8px;
    margin: auto;
    text-align: center;
    color: rgb(218, 218, 218);
    background-color: rgb(48, 48, 48);
    border-radius: 10px;
    display: block;
    border: 0px;
    cursor: pointer;
    transition-duration: 100ms;
    &:hover {
    color: rgb(254, 254, 254);
    background-color: rgb(63, 63, 63);
    transition-duration: 100ms;
}
`

export const lineButton = styled.button`

`