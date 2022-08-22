import React from 'react';
import styled from 'styled-components';
export default function Timer(props) {
    return (
        <Watch>
            <Span font="3rem" color="#f5f5f5">
                {('0' + Math.floor(props.time / 3600)).slice(-2)}:
            </Span>
            <Span font="3rem" color="#f5f5f5">
                {('0' + Math.floor((props.time / 60) % 60)).slice(-2)}:
            </Span>
            <Span font="3rem" color="#f5f5f5">
                {('0' + Math.floor((props.time / 1) % 60)).slice(-2)}
            </Span>
        </Watch>
    );
}

export const Watch = styled.div`
    display: flex;
    height: ${(props) => props.height};
    justify-content: center;
    align-items: center;
`;
export const Span = styled.span`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: ${(props) => props.font};
    color: ${(props) => props.color};
`;
