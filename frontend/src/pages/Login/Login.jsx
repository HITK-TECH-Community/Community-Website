import React, { useReducer, useEffect, useState, useRef } from "react";
import { Button2 } from "../../components/util/Button/index";
import style from "./login.module.scss";

//state type
type State = {
  username: "string",
  password: "string",
  isButtonDisabled: "boolean",
  helperText: "string",
  isError: "boolean",
};

const initialState: State = {
  username: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setUsername", payload: string }
  | { type: "setPassword", payload: string }
  | { type: "setIsButtonDisabled", payload: boolean }
  | { type: "loginSuccess", payload: string }
  | { type: "loginFailed", payload: string }
  | { type: "setIsError", payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "loginSuccess":
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case "loginFailed":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "setIsError":
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return {
        ...state,
        isError: true,
      };
  }
};

export const Login = () => {
  //state for showing and hiding password
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidePassword, setHidePassword] = useState(false);
  const passwordInput = useRef("password");

  useEffect(() => {
    // Show/Hide Functionality.
    hidePassword
      ? (passwordInput.current = "text")
      : (passwordInput.current = "password");

    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.username, state.password, hidePassword]);

  const handleLogin = () => {
    if (state.username === "abc@email.com" && state.password === "password") {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect username or password",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  return (
    <div className={style["login-section"]}>
      <div className={`${style["login-image"]} ${style["child1"]}`}>
        <img src="./images/login.png" alt="login-illustration" />
      </div>
      <div className={`${style["login-form"]} ${style["child2"]}`}>
        <div className={style["login-card"]}>
          <h1 className={style["card-heading"]}>Welcome Back</h1>
          <div className={style["inside-card "]}>
            <div className={style["login-input"]}>
              <input
                autocomplete="off"
                error={state.isError}
                id="username"
                type="email"
                required="required"
                name="username"
                placeholder="Username"
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
                className={style["input-login"]}
              />
              <i className="fas fa-user"></i>
            </div>
            <div className={style["login-input"]}>
              <input
                error={state.isError}
                id="password"
                required="required"
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                className={style["input-login"]}
                type={passwordInput.current}
              />
              <i
                className={hidePassword ? "fa fa-eye" : "fa fa-eye-slash"}
                onClick={() => setHidePassword(!hidePassword)}
              ></i>
            </div>
            <div className={style["submit-btn"]}>
              <Button2
                id="btn"
                label="Sign In"
                type="submit"
                className={style["submit-btn-text"]}
                onClick={handleLogin}
                disabled={state.isButtonDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
