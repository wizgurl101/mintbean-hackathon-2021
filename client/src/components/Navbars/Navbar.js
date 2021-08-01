import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../auth/Login";
import SignUp from "../auth/Signup";
import { showModal2, setCurrentModal2 } from "../../store/modal2";
import { logout } from "../../store/session";
import { Button } from "@chakra-ui/react";

import "./Navbar.css";

function Navbar() {
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
  };

  return (
    <div className="Navbar">
      {user && (
        <div>
          <h1>Welcome, {user}!</h1>
          <Link to="gameboard">
            <Button colorScheme="teal" variant="outline">
              GameBoard
            </Button>
          </Link>
          <Link to="gameboard/online">
            <Button colorScheme="teal" variant="outline">
              Play Online
            </Button>
          </Link>
        </div>
      )}
      
      
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
          <Button colorScheme="teal" variant="outline" onClick={logoutUser}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
