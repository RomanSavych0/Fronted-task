import React from "react";
import { IBlog } from "../../../store/reducers/blog-reducer/types";
import { BlogItem } from "./BlogItem";
import classes from "../Blog.module.scss";
interface IProps {
  blogs: Array<IBlog>;
}
export const Blogs: React.FC<IProps> = (props) => {
  let blogs = props.blogs.map((item) => {
    return <BlogItem blog={item} />;
  });
  return <div className={classes.blogsList}>{blogs}</div>;
};
export default Blogs;
