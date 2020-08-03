import React, { useEffect } from "react";
import classes from "./Blog.module.scss";
import { Button, Container } from "@material-ui/core";
import BlogEditor from "../AppEditor/BlogEditor";
import { connect } from "react-redux";
import { setBlogs } from "../../store/reducers/blog-reducer/blog-reducer";
import { AppStateType } from "../../store/redux-store";
import Blogs from "./Blogs/Blogs";
import { IBlog } from "../../store/reducers/blog-reducer/types";
import Preloader from "../command/Preloader/Preloader";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
interface IProps {
  setBlogs: () => void;
  blogs: Array<IBlog>;
  isFetching: boolean;
}
export const Blog: React.FC<IProps> = (props) => {
  const [isEditorOpened, setIsEditorOpened] = React.useState<boolean>(false);
  const [blogs, setBlogs] = React.useState<Array<IBlog>>(props.blogs);
  useEffect(() => {
    props.setBlogs();
    setBlogs(props.blogs);
  }, []);
  useEffect(() => {
    setBlogs(props.blogs);
  }, [props.blogs]);

  let onClose = () => {
    setIsEditorOpened(false);
  };
  let openEditor = () => {
    setIsEditorOpened(true);
  };
  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Container>
          <div className={classes.blogWrapper}></div>
          <div className={classes.blogsTools}>
            <div>
              <h2>My Blogs</h2>
            </div>
            <div>
              <h2>
                <Button variant="outlined" color="primary" onClick={openEditor}>
                  <b
                    style={{
                      justifyContent: "center",
                      height: "100%",
                      marginRight: "10px",
                    }}
                  >
                    +
                  </b>{" "}
                  Add Blog
                </Button>
              </h2>
            </div>
          </div>
          <BlogEditor isOpened={isEditorOpened} onClose={onClose} />
          <Container>
            <Blogs blogs={blogs} />
          </Container>
        </Container>
      )}
    </>
  );
};
const mapStateToProps = (state: AppStateType) => {
  return {
    blogs: state.blogs.blogs,
    isFetching: state.blogs.isFetching,
  };
};
export default connect(mapStateToProps, { setBlogs })(WithAuthRedirect(Blog));
