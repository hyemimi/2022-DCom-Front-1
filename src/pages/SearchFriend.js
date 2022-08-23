import React, { useState, useEffect } from 'react';
import { fetchAllUserList } from '../store/user';
import { SearchBox } from '../components/Common/SearchBox';
import FriendsProfile from '../components/FriendsProfile';
import styled from 'styled-components';
import { PageDiv } from '../components/Styled/PageDiv';
import { friendummylist } from '../store/temp/tempFriendsData';
import logo from '../Layout/image/FOCUZ.png';
const SearchFriend = () => {
    // App.js에서 주입(Provide)한 context정보 받아오기
    // @ts-ignore
    const [allUserList, setAllUserList] = useState([
        {
            id: 1,
            motto: '화이팅~!',
            name: '디닷컴',
            nickname: '포커즈',
            profileImage:
                logo,
            studyTime: 0,
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: 'react파이팅',
            profileImage:
                'https://reactjs-kr.firebaseapp.com/logo-og.png',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '고3',
            profileImage:
                'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202105/16/23714614-36d1-4059-9692-b7bfd973d1a7.jpg',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '헤헷',
            profileImage:
                'https://bunny.jjalbot.com/2019/01/iHWafT2nwj/J2iOsEK8I.png',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '바보',
            profileImage:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '에듀윌',
            profileImage:
                'https://play-lh.googleusercontent.com/zM5CTXcHTZoSfGd_nhx50WuLEqdVMeua1zHiKI3whrAhK6DbwXaqxibwyjdcYucw6Oyo=w512',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '자격증러',
            profileImage:
                'https://newsroom-prd-data.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2/cfile8.uf.2258034252D33A0A1B322E.png',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '1급',
            profileImage:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '합격가자',
            profileImage:
                'https://t1.daumcdn.net/cfile/tistory/23429A3F559703BB08',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '의대생',
            profileImage:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXAUoqeDWjXcQvoC8iNl-NihLWpx-RR-TKA&usqp=CAU',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '로스쿨생',
            profileImage:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '디자이너',
            profileImage:
                'http://cdn.edujin.co.kr/news/photo/201901/23023_42093_058.jpg',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '북러버',
            profileImage:
                'https://img.khan.co.kr/news/2021/12/24/l_20211224010031776002759711.jpg',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '대학생1',
            profileImage:
                'https://cdn.ftoday.co.kr/news/photo/201904/108095_100686_4156.jpg',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: '경희대_한의학과',
            profileImage:
                'https://www.doctorsnews.co.kr/news/photo/201911/132025_84193_1056.jpg',
        },
        {
            id: 2,
            motto: '파이팅!!!',
            name: '정지원',
            nickname: '독서왕',
            profileImage:
                'https://www.nizform.com/DsImage/DsE/view1/A32/2853.jpg',
        },
        {
            id: 3,
            motto: '열공중!',
            name: '강다현',
            nickname: '희대생',
            profileImage:
                'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
        },
        {
            id: 4,
            motto: '헤헤',
            name: '김나현',
            nickname: '나나',
            profileImage:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        {
            id: 4,
            motto: '휴',
            name: '박민재',
            nickname: '코딩중',
            profileImage:
                'https://i0.wp.com/jaglo.net/wp-content/uploads/2021/03/%EC%BD%94%EB%94%A9-%EC%82%AC%EC%9D%B4%ED%8A%B8-1.jpg?resize=768%2C432&ssl=1',
        },
        {
            id: 4,
            motto: '열심히!',
            name: '정승원',
            nickname: 'N수생',
            profileImage:
                'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202105/16/23714614-36d1-4059-9692-b7bfd973d1a7.jpg',
        },
        ...friendummylist,
    ]); // []로 바꾸기 (8/23)
    const [searchUserList, setSearchedUserList] = useState([]);
    const [searchText, setSearchText] = useState('');

    // 모든 유저 정보 API Call
    {/*useEffect(() => {
        fetchAllUserList().then((res) => {
            setAllUserList(res.data);
            setSearchedUserList(res.data);
        });
    }, []);*/}

    useEffect(() => {
        // @ts-ignore

        const filteredFriend = allUserList.filter((user) => {
            if (searchText === '' || searchText === null) {
                return user;
            } else {
                return user?.nickname?.includes(searchText);
            }
        });

        // @ts-ignore
        setSearchedUserList(filteredFriend);
    }, [searchText]);

    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
            onSearch();
        }
    };
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onSearch = (e) => {
        setSearchText(document.getElementById('inputvalue')?.value);
        console.log(searchText);
        // const searchednickname = users.filter((val) => (searchText === val.nickname))
        // const result = users.filter((it) =>it.nickname === searchText)
        // return(result)
    };

    return (
        <PageDiv>
            <SearchBox
                placeholder={'친구의 닉네임을 입력하세요'}
                onKeyPress={onPressEnter}
                onClick={onSearch}
            />
            {searchUserList.length === 0 ? (
                <div> 표시할 유저가 없습니다 </div>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {searchUserList &&
                        searchUserList.map((user) => (
                            <FriendsProfile key={user.id} user={user} />
                        ))}
                </div>
            )}
        </PageDiv>
    );
};

export default SearchFriend;
