import React, { useEffect, useState, useRef } from 'react';
import { quitGroup } from './../store/group';
function GroupButton({ id, text }) {
    const onClick = async () => {
        if (window.confirm('그룹을 탈퇴하시겠습니까?')) {
            await quitGroup(id);
            return;
        } else {
            return;
        }
    };
    return (
        <div className="out">
            <button onClick={onClick} className="groups-btn">
                {text}
            </button>
        </div>
    );
}

export default GroupButton;
