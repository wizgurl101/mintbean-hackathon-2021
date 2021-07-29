import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { hideModal2 } from "../../store/modal2";

const LoginForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(username, password));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      dispatch(hideModal2());
      history.push("/");
    }
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
      <h2>Login</h2>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className="login_input">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={updateUsername}
          />
        </div>
        <div className="login_input">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <div className="login_input">
            <input type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
