import { useState } from 'react';
import GroupItem from '../components/GroupItem';
import SideMenu from '../Layout/SideMenu';
import { Link } from 'react-router-dom';
import GroupButton from '../components/GroupButton';
import { useSelector } from 'react-redux';

const Groups = () => {
    const MyGroupList = useSelector((state) => state.user.groups);

    return (
        <>
            <div className="content">
                <h1 className="groupList-header"> My Groups </h1>
                <div className="groupsAdd">
                    <Link key="searchGroup" to="searchGroup">
                        <button className="groupsAddBtn">
                            🔍　스터디 그룹 검색하러가기
                        </button>
                    </Link>
                </div>
                <div className="out">
                    <Link key="newGroup" to="newGroup">
                        <button className="groups-btn">
                            스터디그룹 생성하기
                        </button>
                    </Link>
                </div>
                <div>
                    {MyGroupList.map((it) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                                <GroupItem
                                    name={it.name}
                                    leader={it.users[0] && it.users[0].nickname}
                                    members={it.users}
                                    buttontext="탈퇴하기"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Groups;
