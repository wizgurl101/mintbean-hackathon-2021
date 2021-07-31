import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "../auth/Login";
import SignUp from "../auth/Signup";
import { showModal2, setCurrentModal2 } from "../../store/modal2";

import { Button } from "@chakra-ui/react";


function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
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
    <h1>Welcome {user}!</h1>
    <a href="/gameboard">GameBoard</a>
      <div>
        {!user && (
          <div>
            <Button colorScheme="teal" onClick={showLogin}>
              Login
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={showSignup}>
              Signup
            </Button>
          </div>
        )}
        {user && (
          <Button colorScheme="teal" variant="outline">
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
