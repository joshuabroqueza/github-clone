import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widget from "./Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [userStateAuth, setUserStateAuth] = useState(null);

  // const hello = null;
  console.log("this is useeeer", user);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // setUserStateAuth(userAuth);

      if (userAuth) {
        console.log(userAuth);
        console.log(userAuth.email);
        console.log(userAuth.uid);
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        console.log("userauthhhh", userAuth);
        dispatch(logout());
      }
    });
  }, []);

  // console.log("from appuser", userStateAuth);

  /*
return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
*/

  //WORKING CODE
  return (
    <div className="app">
      <Header />

      {userStateAuth === null ? (
        <Login setUserStateAuth={setUserStateAuth} />
      ) : (
        // console.log('this is user', user)
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}
// export const user = user;
export default App;
