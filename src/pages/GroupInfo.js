import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupInfo, kickoutGroup, deleteGroup } from '../store/group';
import styled from 'styled-components';
import { PageDiv } from './SearchFriend';
import { AuthContext } from '../Context/auth';
import FriendsProfile from '../components/FriendsProfile';
const GroupInfo = () => {
    const { id } = useParams();
    const auth = useContext(AuthContext);
    const [groupinfo, setGroupInfo] = useState({
        //dummy
        name: '(스터디이름)',
        users: [auth.user],
    });
    useEffect(async () => {
        await getGroupInfo(parseInt(id))
            .then((res) => setGroupInfo(res.data))
            .catch((e) => console.log(e));
    }, []);
    const onClick = async (targetGroupId, targetUserId) => {
        if (confirm('❗해당 멤버를 정말 강퇴하시겠습니까?')) {
            await kickoutGroup(targetGroupId, targetUserId);
            alert('강퇴 성공!');
        } else {
            return;
        }
    };
    const onDeleteHandler = async () => {
        if (confirm('❗해당 그룹을 정말 삭제하시겠습니까?')) {
            await deleteGroup(id).then((r) => alert('삭제 성공!'));
        } else {
            return;
        }
    };
    return (
        <PageDiv>
            <h1 className="groupList-header">
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 40px)',
                    }}
                >
                    {groupinfo.name}
                </a>
            </h1>
            <div style={{ display: 'flex' }}>
                <button onClick={onDeleteHandler}>그룹 삭제하기</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {groupinfo.users.map(
                    (user, idx) =>
                        // @ts-ignore
                        // 실제로는 idx !== 0이 되어야함
                        idx !== 1 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <FriendsProfile key={user.id} user={user} />
                                <button
                                    className="light"
                                    onClick={() => {
                                        onClick(id, user.id);
                                    }}
                                >
                                    강퇴하기
                                </button>
                            </div>
                        )
                )}
            </div>
        </PageDiv>
    );
};

export default GroupInfo;
