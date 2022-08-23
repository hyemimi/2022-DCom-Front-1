import logo from '../../Layout/image/FOCUZ.png'
export const tempUser = {
    //id,email,name,pr-,nick,motto : null
    // groups : []
    id: 1,
    email: null,
    name: '포커즈',
    profileImage:
        logo,
    nickname: '디닷컴',
    motto: '열심히 공부해야지!',
    groups: [
        {
            description: '파이썬공부해요',
            id: 1,
            name: '디닷컴',
            users: [
                {
                    id: 1,
                    motto: '열심히 공부해야지!',
                    name: '포커즈',
                    nickname: '디닷컴',
                    profileImage:
                        {logo},
                    studyTime: 0,
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
    ],
};
