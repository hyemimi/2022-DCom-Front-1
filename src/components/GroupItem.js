// GroupItem은 그룹별 프로필과 같다고 보면 된다. 그룹 리스트를 나열할 때 컴포넌트로 사용될 예정
import React, { useEffect, useState, useRef } from 'react';
import GroupButton from './GroupButton';
function GroupItem({ id, name, leader, members, buttontext }) {
    return (
        <div>
            <div className="group-name">{name}</div>
            <div>그룹장 | {leader}</div>
            {members &&
                members.map((item, idx) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            {item === ''
                                ? 'Empty'
                                : `member${idx + 1} | ${item.nickname}`}
                        </div>
                    );
                })}
            <GroupButton id={id} text={buttontext}></GroupButton>
        </div>
    );
}

export default GroupItem;
