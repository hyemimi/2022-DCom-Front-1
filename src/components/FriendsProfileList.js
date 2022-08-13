import React, { useEffect, useState, useRef } from 'react';
import FriendsProfile from './FriendsProfile';

function FriendsProfileList({ data }) {
    return (
        <div className="FriendsProfileList">
            {data.map((it) => (
                <FriendsProfile key={it.id} {...it} />
            ))}
        </div>
    );
}

export default FriendsProfileList;
