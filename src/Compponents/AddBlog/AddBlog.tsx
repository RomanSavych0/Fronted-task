import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import ImageUploader from "react-images-upload";
import classes from "./AddBlog.module.scss";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { connect } from "react-redux";
import { addBlog } from "../../store/reducers/blog-reducer/blog-reducer";
import { IBlog } from "../../store/reducers/blog-reducer/types";
import { AppStateType } from "../../store/redux-store";
interface IProps {
  addBlog: (blog: IBlog) => void;
  closeHandler: () => void;
}
export const AddBlog: React.FC<IProps> = (props) => {
  const [image, setImage] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [isError, setIsError] = React.useState<boolean>(true);

  const onTitleChange = (e: any) => {
    if (e.currentTarget.value.length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setTitle(e.currentTarget.value);
  };
  const setBlogImage = (file: Array<File>, image: string[]) => {
    setImage(image[0]);
  };
  const addBlogHandler = () => {
    props.addBlog({ title, image });
    props.closeHandler();
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.title}>
          <h2>Add title:</h2>
          <div>
            <TextField
              inputProps={{ maxLength: 12 }}
              error={isError}
              value={title}
              onChange={onTitleChange}
              helperText={isError ? "filed is required." : ""}
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.imageUpload}>
          <h2> Add Image</h2>
          <ImageUploader
            onChange={setBlogImage}
            withIcon={true}
            buttonText="Choose images"
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            singleImage
            withPreview
          />
        </div>
      </Grid>
      <Grid item xs={12} className={classes.imageUpload}>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={addBlogHandler}
            disabled={isError}
          >
            Add Blog
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default connect(null, { addBlog })(WithAuthRedirect(AddBlog));
