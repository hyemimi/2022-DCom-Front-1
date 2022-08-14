//
//
//아마 API 연동하면서 이제 이 파일 필요없을 것 같은데 마지막에 필요없는 거 확실해지면 삭제하면 될 듯합니당 8/14기준
//
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
