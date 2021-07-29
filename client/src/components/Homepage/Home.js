import React from "react";
import { useDispatch } from "react-redux";

import Login from "../auth/Login";
import SignUp from "../auth/Signup";
import { showModal2, setCurrentModal2 } from "../../store/modal2";

function Home() {
  const dispatch = useDispatch();

  const showLogin = () => {
    dispatch(setCurrentModal2(Login));
    dispatch(showModal2());
  };

  const showSignup = () => {
    dispatch(setCurrentModal2(SignUp));
    dispatch(showModal2());
  };

  return (
    <div>
      <h1>Homepage!</h1>
      <div>
        <button onClick={showLogin}>Login</button>
        <button onClick={showSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Home;
