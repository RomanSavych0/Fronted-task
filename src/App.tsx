import React from "react";
import Navbar from "./Compponents/Navbar/Navbar";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Compponents/login/Login";
import styles from "./App.module.scss";
import Profile from "./Compponents/Profile/Profile";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Compponents/Blog/Blog";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/blog" render={() => <Blog />} />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
