import React, { useState, useRef, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main.js";
import Login from "./pages/Login.js";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import TopMenu from "./Layout/TopMenu";
import Record from "./pages/Record";
import Friends from "./pages/Friends";
import app from "./firebase.js";
import db from "./firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
  }, []);

  const [data, setData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("home");

  // firebase
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Main activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </>
          )}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <SignUp />} />
        <Route
          exact
          path="/search"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Search
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
              />
            </>
          )}
        />
          <Route exact path="/record" render={()=>(
              <>
                  <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                  <Record/>
              </>)} />
          <Route exact path="/friends" render={()=>(
          <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Friends/>
          </>)} />              
      </BrowserRouter>
    </div>
  );
}

export default App;