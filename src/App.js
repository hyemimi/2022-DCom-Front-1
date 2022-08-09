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
import BaseLayout from './components/BaseLayout';
import EditProfile from './components/EditProfile';
import WebcamComponent from './pages/Cam';
import { AuthContext } from './Context/auth';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(true);
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            profileImage: null,
            nickname: 'chichi',
            motto: 'I AM CUTE'
        }}>
            <BaseLayout>
                <Main/>
            </BaseLayout>
        </AuthContext.Provider>
        // <div className="App">
        //     <BrowserRouter>
        //         <BaseLayout
        //             activeMenu={activeMenu}
        //             setActiveMenu={setActiveMenu}
        //         />
        //         <Route
        //             exact
        //             path="/"
        //             render={() => (
        //                 <>
        //                     <Main
        //                         isLoggedIn={isLoggedIn}
        //                         setIsLoggedIn={setIsLoggedIn}
        //                         userObj={userObj}
        //                         users={users}
        //                     />
        //                 </>
        //             )}
        //         />
        //         <Route exact path="/login" render={() => <Login />} />
        //         <Route exact path="/register" render={() => <SignUp />} />
        //         <Route
        //             exact
        //             path="/searchFriend"
        //             render={() => (
        //                 <>
        //                     <SearchFriend users={users} />
        //                 </>
        //             )}
        //         />
        //         <Route
        //             exact
        //             path="/searchGroup"
        //             render={() => (
        //                 <>
        //                     <SearchGroup
        //                         studyList={studyList}
        //                         setStudyList={setStudyList}
        //                     />
        //                 </>
        //             )}
        //         />
        //         <Route
        //             exact
        //             path="/newGroup"
        //             render={() => (
        //                 <>
        //                     <NewGroup users={users} />
        //                 </>
        //             )}
        //         />
        //         <Route
        //             exact
        //             path="/record"
        //             render={() => (
        //                 <>
        //                     <Record />
        //                 </>
        //             )}
        //         />
        //         <Route
        //             exact
        //             path="/groups"
        //             render={() => (
        //                 <>
        //                     <Groups />
        //                 </>
        //             )}
        //         />
        //         <Route exact path="/edit" render={() => <EditProfile />} />
        //         <Route
        //             exact
        //             path="/friends"
        //             render={() => <Friends my_friend={friends} />}
        //         />
        //         <Route exact path="/cam" render={() => <WebcamComponent />} />
        //     </BrowserRouter>
        // </div>
    );
}

export default App;
