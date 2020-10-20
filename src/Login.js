import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
    //   firebase stuff
  };
  const register = (e) => {
    e.preventDefault();
    //   firebase stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signin}
            className="login__signinButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By sign-in you agree to AMAZON CLONE'S Condition of Use & Sale. Please
          Privacy Notice ,our Cookie Notice and our Interest-Based Ads
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
