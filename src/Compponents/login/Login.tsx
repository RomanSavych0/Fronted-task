import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm";
import { AppStateType } from "../../store/redux-store";
import {
  login,
  register,
} from "../../store/reducers/auth-reducer/auth-reducer";

interface IProps {
  login: (email: string, password: string) => void;
  isAuthorized: boolean;
  register: (email: string, password: string) => void;
  email: string | null;
  password: string | null;
}

const Login: React.FC<IProps> = (props) => {
  const emailLocalStorage = localStorage.getItem("email");
  const passwordLocalStorage = localStorage.getItem("password");
  if (!props.isAuthorized) {
    if (emailLocalStorage !== null) {
      if (passwordLocalStorage !== null) {
        props.login(emailLocalStorage, passwordLocalStorage);
      }
    }
  }

  if (props.isAuthorized) {
    return <Redirect to={"/profile"} />;
  }

  const handleSubmitLogin = (email: string, password: string) => {
    props.login(email, password);
  };
  return (
    <div>
      <div className={styles.LoginForm}>
        <LoginForm
          handleSubmitLogin={handleSubmitLogin}
          register={props.register}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state: AppStateType) => {
  return {
    isAuthorized: state.auth.isAuth,
    email: state.auth.login,
    userId: state.auth.userId,
    password: state.auth.password,
  };
};
export default connect(mapStateToProps, { login, register })(Login);
