import Main from '../../pages/Main'
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'
import SearchFriend from '../../pages/SearchFriend'
import SearchGroup from '../../pages/SearchGroup'
import NewGroup from '../../pages/NewGroup'
import Record from '../../pages/Record'
import EditProfile from '../EditProfile'
import Groups from '../../pages/Groups'
import Friends from '../../pages/Friends'
import WebcamComponent from '../../pages/Cam'
import Test from '../../pages/Test'

const routes = [
    {
        id: 'main',
        path: '/',
        component: Main
    },
    {
        id: 'login',
        path: '/login',
        component: Login
    },
    {
        id: 'signup',
        path: '/signup',
        component: SignUp
    },
    {
        id: 'searchFriend',
        path: '/search-friend',
        component: SearchFriend
    },
    {
        id: 'searchGroup',
        path: '/search-group',
        component: SearchGroup
    },
    {
        id: 'newGroup',
        path: '/new-group',
        component: NewGroup
    },
    {
        id: 'record',
        path: '/record',
        component: Record
    },
    {
        id: 'editProfile',
        path: '/edit-profile',
        component: EditProfile
    },
    {
        id: 'groups',
        path: '/groups',
        component: Groups
    },
    {
        id: 'friends',
        path: '/friends',
        component: Friends
    },
    {
        id: 'webcam',
        path: '/webcam',
        component: WebcamComponent
    },
    {
        id: 'test',
        path: '/test',
        component: Test
    }
]

export default routes
