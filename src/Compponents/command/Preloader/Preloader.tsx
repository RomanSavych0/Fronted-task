import React from "react";
import preloader from "../../../asserts/images/Spinner.svg";
import classes from "./Preloader.module.scss";
export const Preloader = () => {
  return (
    <div className={classes.imageWrapper}>
      <img src={preloader} />
    </div>
  );
};
export default Preloader;
