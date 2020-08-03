import React from "react";
import { IBlog } from "../../../store/reducers/blog-reducer/types";
import classes from "../Blog.module.scss";
import { Paper } from "@material-ui/core";
import defaultBlogImage from "../../../asserts/images/defaultBlogImage.png";
interface IProps {
  blog: IBlog;
}
export const BlogItem: React.FC<IProps> = (props) => {
  return (
    <Paper className={classes.blogsWrapper}>
      <div className={classes.blogItem}>
        <img
          src={`${
            props.blog.image === "" ? defaultBlogImage : props.blog.image
          }`}
          alt=""
        />
      </div>
      <div className={classes.blogItem}>{props.blog.title}</div>
    </Paper>
  );
};
