import React, { useReducer, useEffect } from "react";
import styles from "./login.module.css";

// Show/Hide Functionality.
window.onload = function () {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");
  if (togglePassword) {
    togglePassword.addEventListener("click", function (e) {
      // toggle the type attribute
      if (password) {
        const type =
          password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        // toggle the eye slash icon
        this.classList.toggle("fa-eye-slash");
      }
    });
  }
};

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

const Login = () => {
  //state for showing and hiding password
  // const [showPass, setShowPass] = useState(false);

  // const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
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
  }, [state.username, state.password]);

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
    <div className={styles.loginSection}>
      <div className={`${styles.loginImage} ${styles.child1}`}>
        <img src="./images/login.png" alt="login-illustration" />
      </div>
      <div className={`${styles.loginForm} ${styles.child2}`}>
        <div className={styles.loginCard}>
          <h1 className={styles.cardHeading}>Welcome Back</h1>
          <div className={styles.insideCard}>
            <div className={styles.loginInput}>
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
                class="inputLogin"
              />
              <i className="fas fa-user"></i>
            </div>
            <div className={styles.loginInput}>
              <input
                error={state.isError}
                id="password"
                required="required"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                class="inputLogin"
              />
              <i className="far fa-eye" id="togglePassword"></i>
            </div>
            <div className={styles.loginInput} style={{ textAlign: "center" }}>
              <button
                id="btn"
                className={`${styles.loginBtn} main-btn main-btn-2`}
                onClick={handleLogin}
                disabled={state.isButtonDisabled}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
