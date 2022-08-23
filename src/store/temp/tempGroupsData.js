import { friendummylist } from './tempFriendsData';
export const groups = [
    // dummy
    // groups 페이지에서 이후 auth.user.groups로 바꾸기
    {
        description: '파이썬공부해요',
        id: 1,
        name: '디닷컴',
        users: [
            {
                id: 1,
                motto: '화이팅~!',
                name: '이혜미',
                nickname: '포커즈',
                profileImage:
                    'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
                studyTime: 0,
            },
            ...friendummylist,
        ],
    },
    {
        description: 'react',
        id: 2,
        name: 'React',
        users: friendummylist,
    },
    {
        description: '스피킹',
        id: 3,
        name: '스피킹',
        users: friendummylist,
    },
    {
        description: '파이썬스터디',
        id: 4,
        name: '더미그룹',
        users: [
            {
                id: 3,
                motto: '배고파...',
                name: '이혜미',
                nickname: '혜',
                profileImage: null,
            },
            {
                id: 2,
                motto: 'string',
                name: '정지원',
                nickname: '손님',
                profileImage: null,
            },
        ],
    },
];
