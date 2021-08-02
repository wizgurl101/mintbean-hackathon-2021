import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../auth/Login";
import SignUp from "../auth/Signup";
import { showModal2, setCurrentModal2 } from "../../store/modal2";
import { logout } from "../../store/session";
import { Button, Stack, Text } from "@chakra-ui/react";

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
      {!user && <div></div>}
      {user && (
        <div>
          <Text textColor="white" fontSize="lg">Welcome, {user}!</Text>
        </div>
      )}
      {user && (
        <Stack direction="row" spacing={3}>
          <Link to="gameboard">
            <Button colorScheme="teal" size="md">
              Game Board
            </Button>
          </Link>
          <Link to="leaderboard">
            <Button colorScheme="teal" size="md">
              Leader Board
            </Button>
          </Link>
        </Stack>
      )}

      <div>
        {!user && (
          <Stack direction="row" spacing={3}>
            <Button colorScheme="teal" onClick={showLogin}>
              Login
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={showSignup}
            >
              Signup
            </Button>
          </Stack>
        )}
        {user && (
          <Button
            colorScheme="gray"
            size="md"
            onClick={logoutUser}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
