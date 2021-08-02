import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import { hideModal2 } from "../../store/modal2";
import { Button, Text } from "@chakra-ui/react"

import "./auth.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      await dispatch(signUp(username, password));
      await dispatch(hideModal2());
      alert("Your account has been successfully made. Please log in using the 'Log In' button. Thank you!");
      history.push("/");
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup_form">
      <form className="signup" onSubmit={onSignUp}>
        <div></div>
        <Text textColor="white" noOfLines={2} maxW="75%" textAlign="center" mb={4} fontSize="xl" > Welcome! Please make an account below.</Text>
        <div className="signup_input">
          <input
            className="input"
            placeholder=" Username"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="signup_input">
          <input
            className="input"
            placeholder=" Password"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="signup_input">
          <input
            className="input"
            placeholder=" Repeat Password"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="signup_input">
          <Button colorScheme="teal" className="input2" type="submit" value="SignUp">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
