import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { hideModal2 } from "../../store/modal2";
import { Button, Text } from "@chakra-ui/react"

const LoginForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));

    dispatch(hideModal2());
    history.push("/");
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  } 

  return (
    <div className="login_form">
      <div>
        <form className="login" onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <Text textColor="white" noOfLines={2} maxW="75%" textAlign="center" mb={4} fontSize="xl" > Welcome back! Please add your username and password.</Text>
          <div className="login_input">
            <input
              className="input"
              name="username"
              type="text"
              placeholder=" Username"
              value={username}
              onChange={updateUsername}
            />
          </div>
          <div className="login_input">
            <input
              className="input"
              name="password"
              type="password"
              placeholder=" Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div className="login_input">
            <Button colorScheme="teal" className="input2" type="submit" value="Login">Log In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
