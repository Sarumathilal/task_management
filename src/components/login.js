import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../utils/card";
import styles from "./login.module.css";
import Nav from "../utils/nav";

const Login = (props) => {
  console.log(props);

  const userCredentials = {
    userName: "Maha",
    password: "Maha",
  };

  const [loginCredentials, setLoginCredentials] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    console.log(event.target.name);
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(loginCredentials);
    if (
      userCredentials.userName === loginCredentials.userName &&
      userCredentials.password === loginCredentials.password
    ) {
      navigate("/home");
      props.setUserName(loginCredentials.userName);
    } else {
      alert("Enter Correct UserName and Password");
    }
  };

  return (
    <>
      <Nav loginInfo={props.loginInfo}>Welcome... Please Login To Manage Your Tasks</Nav>
      <Card>
        <div className={styles.container}>
          <div className={styles.heading}>Login</div>
          <form method="post" className={styles.form} onSubmit={onSubmitHandler}>
            <p className={styles.label}>Username</p>
            <input
              name="userName"
              onChange={inputChangeHandler}
              className={styles.input}
              type="text"
              placeholder="Enter Username"
            />
            <p className={styles.label}>Password</p>
            <input
              name="password"
              onChange={inputChangeHandler}
              className={styles.input}
              type="password"
              placeholder="Enter Password"
            />
            <button className={styles["login-btn"]} type="submit">
              Login
            </button>
          </form>
        </div>
      </Card>
    </>
  );
};

export default Login;
