import React, { useEffect, useState, useRef } from 'react';
import GroupRecord from '../components/Record/GroupRecord';
import RecordGraph from '../components/Record/RecordGraph';
import UserRecord from '../components/Record/UserRecord';
import styled from 'styled-components';
import SideMenu from '../Layout/SideMenu';

const Record = ({ postList, onEdit }) => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Box width="40%" height="400px" color="black" bgColor="#2F2F2F">
                    <UserRecord></UserRecord>
                </Box>
                <Box width="60%" height="400px" color="black" bgColor="#2F2F2F">
                    <RecordGraph></RecordGraph>
                </Box>
            </div>
            <Box
                width="inherit"
                minHeight="100vh"
                height="fit-content"
                bgColor="#2F2F2F"
                style={{ alignItems: 'flex-start' }}
            >
                <GroupRecord></GroupRecord>
            </Box>
        </div>
    );
};

export default Record;

export const Box = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
    font-weight: bold;
    background-color: ${(props) => props.bgColor || 'rgb(230, 230, 230)'};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: flex-start;
    margin: 10px;
    * {
        color: rgb(39, 39, 39);
        font-weight: bold;
    }
    button {
        color: rgb(230, 230, 230);
    }
`;
