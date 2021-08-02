import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../auth/Login";
import SignUp from "../auth/Signup";
import { showModal2, setCurrentModal2 } from "../../store/modal2";
import { logout } from "../../store/session";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Text } from '@chakra-ui/react';

import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const showLogin = () => {
    dispatch(setCurrentModal2(Login));
    dispatch(showModal2());
  };

  const showSignup = () => {
    dispatch(setCurrentModal2(SignUp));
    dispatch(showModal2());
  };

  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <div className="Navbar">
      {user && (
        <div>
          <Text textColor="white" fontSize="xl">BlackJack!</Text>
        </div>
      )}
      <Link to="/">
        <Button colorScheme="teal" >
          Home
        </Button>
      </Link>
      <div>
        {!user && (
          <div>
            <Button colorScheme="teal" onClick={showLogin}>
              Login
            </Button>
            <Button colorScheme="teal" onClick={showSignup}>
              Signup
            </Button>
          </div>
        )}
        {user && (
          <Button colorScheme="gray" onClick={logoutUser}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
