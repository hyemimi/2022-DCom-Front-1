import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    getGroupInfo,
    kickoutGroup,
    deleteGroup,
    requestList,
} from '../store/group';
import styled from 'styled-components';
import { PageDiv } from '../components/Styled/PageDiv';
import { AuthContext } from '../Context/auth';
import FriendsProfile from '../components/FriendsProfile';
import { Box } from '../components/Styled/Box';
import RequestGroupProfile from '../components/RequestGroupProfile';
import { friendummylist } from '../store/temp/tempFriendsData';
import { groups } from '../store/temp/tempGroupsData';
import RequestUserProfile from '../components/RequestUserProfile';
import { Button } from './Groups';
import { useNavigate } from 'react-router-dom';

const GroupInfo = () => {
    const { id } = useParams();
    const auth = useContext(AuthContext);
    const [groupinfo, setGroupInfo] = useState(groups[0]);
    const [isRequest, setIsRequest] = useState(false);
    //dummylist 넣어줌, 추후 제거
    const [requestGroupList, setRequestGroupList] = useState(friendummylist);
    useEffect(async () => {
        await getGroupInfo(parseInt(id))
            .then((res) => setGroupInfo(res.data))
            .catch((e) => console.log(e));
    }, []);
    //멤버를 그룹에서 강퇴시킵니다
    const onKickoutHandler = async (targetGroupId, targetUserId) => {
        if (confirm('❗해당 멤버를 정말 강퇴하시겠습니까?')) {
            await kickoutGroup(targetGroupId, targetUserId);
            alert('강퇴 성공!');
        } else {
            return;
        }
    };
    //해당 그룹을 삭제합니다
    const onDeleteHandler = async () => {
        if (confirm('❗해당 그룹을 정말 삭제하시겠습니까?')) {
            await deleteGroup(id).then((r) => alert('삭제 성공!'));
        } else {
            return;
        }
    };
    //그룹 가입 요청을 한 유저 목록을 불러옵니다
    const onRequestHandler = async () => {
        await requestList(id)
            .then((r) => {
                setRequestGroupList(r.data);
                setIsRequest(!isRequest);
            })
            .catch((e) => setIsRequest(!isRequest));
    };

    const onClick = () => {
        setIsRequest(!isRequest);
    };

   //그룹 목록으로 돌아갑니다. 
    const navigate = useNavigate();
    const onClickBack = () => {
        navigate(`/groups`);
    };
    //그룹 강퇴 목록 페이지로 이동합니다.
    const onKickoutList = () => {
        navigate(`/groups/kickoutlist/${id}`);
    }

    return (
        <PageDiv>
            <h1 className="friendsheader">
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 40px)',
                    }}
                >
                    {groupinfo.name}
                </a>
            </h1>
            {!isRequest ? (
                <>
                    <div style={{ display: 'flex' }}>
                        <Button onClick={onKickoutList}>
                            💔　그룹 강퇴 유저 확인하기
                        </Button>
                        <Button onClick={onRequestHandler}>
                            📩 가입신청 확인하기
                        </Button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/*      @ts-ignore
                             실제로는 idx !== 0이 되어야함 */}
                        {groupinfo.users.map(
                            (user, idx) =>
                                idx !== 0 && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <RequestUserProfile
                                            key={idx}
                                            user={user}
                                            buttontext={'강퇴하기'}
                                            groupId={id}
                                        />
                                    </div>
                                )
                        )}
                    </div>
                    <div style={{ display: 'flex'}}>
                         <Button onClick={onClickBack}>
                            ⬅　그룹 목록으로 돌아가기
                        </Button>
                        <Button onClick={onDeleteHandler}>
                            ❌　그룹 삭제하기
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <button onClick={onClick}>
                        그룹 관리 페이지로 돌아가기
                    </button>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {requestGroupList.map((user, idx) => (
                            <RequestGroupProfile
                                id={id}
                                key={idx}
                                user={user}
                            />
                        ))}
                    </div>
                </>
            )}
        </PageDiv>
    );
};
export default GroupInfo;
