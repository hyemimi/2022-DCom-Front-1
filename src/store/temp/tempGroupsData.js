import { friendummylist } from './tempFriendsData';
import logo from '../../Layout/image/FOCUZ.png'
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
                name: '디닷컴',
                nickname: '포커즈',
                profileImage:
                    logo,
                studyTime: 0,
            },
            ...friendummylist,
        ],
    },
    {
        description: 'react',
        id: 2,
        name: 'React',
        users: [{
            nickname: 'react파이팅',
        }],
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
        name: '파이썬스터디',
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
    {
        description: '토플',
        id: 5,
        name: '토플',
        users: [{
            nickname: '토플러',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '경희대',
        users: [{
            nickname: '희대생',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '미적분',
        users: [{
            nickname: 'N수생',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '국어',
        users: [{
            nickname: '고3',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '경희고등학교 3학년',
        users: [{
            nickname: '대학가자',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '경희중학교 3학년',
        users: [{
            nickname: '헤헷',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '경희초등학교',
        users: [{
            nickname: '바보',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '공무원',
        users: [{
            nickname: '에듀윌',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '한국사',
        users: [{
            nickname: '자격증러',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '컴활',
        users: [{
            nickname: '1급',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '에듀윌',
        users: [{
            nickname: '합격가자',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '생물학',
        users: [{
            nickname: '의대생',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '법공부',
        users: [{
            nickname: '로스쿨생',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: 'UI/UX',
        users: [{
            nickname: '디자이너',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '독서모임',
        users: [{
            nickname: '북러버',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '경제학',
        users: [{
            nickname: '대학생1',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '한의학',
        users: [{
            nickname: '경희대_한의학과',
        }],
    },
    {
        description: '토플',
        id: 6,
        name: '책읽자',
        users: [{
            nickname: '독서왕',
        }],
    },
];
