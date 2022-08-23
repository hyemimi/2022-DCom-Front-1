import logo from '../../Layout/image/FOCUZ.png'
export const tempUser = {
    //id,email,name,pr-,nick,motto : null
    // groups : []
    id: 1,
    email: null,
    name: '디닷컴',
    profileImage:
        logo,
    nickname: '포커즈',
    motto: '화이팅~!',
    groups: [
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
                    studyTime: 10,
                },
                {
                    id: 2,
                    motto: '열심히',
                    name: '정지원',
                    nickname: '원',
                    profileImage:
                        'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
                    studyTime: 2000,
                },
                {
                    id: 3,
                    motto: 'string',
                    name: '이혜미',
                    nickname: '혬',
                    profileImage:
                        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                    studyTime: 10000,
                },
                {
                    id: 4,
                    motto: 'string',
                    name: '정혜인',
                    nickname: '혠',
                    profileImage:
                        'https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg',
                    studyTime: 300,
                },
            ],
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
    ],
};
