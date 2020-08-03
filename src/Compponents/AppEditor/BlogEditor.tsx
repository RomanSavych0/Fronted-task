import React from "react";
import Modal from "@material-ui/core/Modal";
import classes from "./AppEditor.module.scss";
import AddBlog from "../AddBlog/AddBlog";
interface IProps {
  isOpened: boolean;
  onClose: () => void;
}

export const BlogEditor: React.FC<IProps> = (props) => {
  return (
    <div>
      <Modal
        className={classes.modalWindowWrapper}
        open={props.isOpened}
        onClose={() => {
          props.onClose();
        }}
      >
        <div className={classes.modalWindowContentWrapper}>
          <AddBlog closeHandler={props.onClose} />
        </div>
      </Modal>
    </div>
  );
};
export default BlogEditor;
