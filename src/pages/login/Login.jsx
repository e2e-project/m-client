import Topstat from "../stat/Topstat";
import { useRef, useContext } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  if (user) {
    console.log(user);
  }
  return (
    <div>
      <Topstat />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo" style={{ color: "whitesmoke" }}>
              VVIT Connect
            </h3>
            <span className="loginDesc">
              Connect with alumni excellence on VVIT Connect.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="6"
                className="loginInput"
                ref={password}
              />
              <button className="loginButton" type="submit" disabled={isFetching}>
                {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Log In"
                )}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
              {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Create a new account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}