import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function FriendsProfile(props) {
    const { image, name, nickname, email } = props;
    return (
        <div className="FriendsProfileBox">
            <div>
                {image && <img src={image} width="100px" height="100px" />}
            </div>
            <p>{name}</p>
            <p>{nickname}</p>
            <p>{email}</p>
        </div>
    );
}

export default FriendsProfile;
