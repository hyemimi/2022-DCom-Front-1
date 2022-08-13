import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function MyProfile(props) {
    const { image, name, nickname, motto } = props;
    return (
        <div className="Profile">
            <div>
                {image ? (
                    <img src={image} width="300px" height="300px" />
                ) : (
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        width="300px"
                        height="300px"
                    />
                )}
            </div>
            <div>
                <p>Name : {name}</p>
                <p>Nickname : {nickname}</p>
                <p>{motto && `motto : ${motto}`}</p>
            </div>
        </div>
    );
}

export default MyProfile;
