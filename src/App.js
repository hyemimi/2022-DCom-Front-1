import React, { useState, useRef, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main.js';
import Login from './pages/Login.js';
import SearchFriend from './pages/SearchFriend';
import SearchGroup from './pages/SearchGroup';
import NewGroup from './pages/NewGroup';
import SignUp from './pages/SignUp';
import Record from './pages/Record';
import Friends from './pages/Friends';
import Groups from './pages/Groups';
import Navigation from './components/Navigation';
import FriendsProfile from './components/FriendsProfile';
import EditProfile from './components/EditProfile';
import Cam from './pages/Cam';
import WebcamComponent from './pages/Cam';

import {users, friends, studyList} from './store/tempData'

function App() {
    const [data, setData] = useState([]);
    // const [info, setInfo] = useState(dummyInfo) // 전체 개인 data
    const [studyList, setStudyList] = useState(null); // 전체 스터디 리스트
    const [activeMenu, setActiveMenu] = useState('home');


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null)

    useEffect(() => {
        setIsLoggedIn(true);
        setStudyList(studyList);
    }, []);
    


    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Navigation
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <>
                            <Main
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                                userObj={userObj}
                                users={users}
                            />
                        </>
                    )}
                />
                <Route exact path="/login" render={() => <Login />} />
                <Route exact path="/register" render={() => <SignUp />} />
                <Route
                    exact
                    path="/searchFriend"
                    render={() => (
                        <>
                            <SearchFriend users={users} />
                        </>
                    )}
                />
                <Route
                    exact
                    path="/searchGroup"
                    render={() => (
                        <>
                            <SearchGroup
                                studyList={studyList}
                                setStudyList={setStudyList}
                            />
                        </>
                    )}
                />
                <Route
                    exact
                    path="/newGroup"
                    render={() => (
                        <>
                            <NewGroup users={users} />
                        </>
                    )}
                />
                <Route
                    exact
                    path="/record"
                    render={() => (
                        <>
                            <Record />
                        </>
                    )}
                />
                <Route
                    exact
                    path="/groups"
                    render={() => (
                        <>
                            <Groups />
                        </>
                    )}
                />
                <Route exact path="/edit" render={() => <EditProfile />} />
                <Route
                    exact
                    path="/friends"
                    render={() => <Friends my_friend={friends} />}
                />
                <Route exact path="/cam" render={() => <WebcamComponent />} />
            </BrowserRouter>
        </div>
    );
}

export default App;
