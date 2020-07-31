import React, { useState } from "react";
import { AppStateType } from "../../store/redux-store";
import { connect } from "react-redux";
import { IMessage } from "../../store/MessageReducer/types";
import Message from "./Message/Message";
import Modal from "@material-ui/core/Modal";
import classes from "./Messages.module.scss";
import AddMessage from "../AddMessage/AddMessage";
import { addMessageThunk } from "../../store/MessageReducer/message-reducer";
import Button from "@material-ui/core/Button";
interface IProps {
  messages: Array<IMessage>;
  addMessageThunk: (message: string, location: string) => void;
}

const Messages: React.FC<IProps> = (props) => {
  let messages = props.messages.map((item) => {
    return <Message message={item.message} location={item.location} />;
  });
  let [isOpened, setIsOpened] = useState(true);
  return (
    <div>
      <div>
        <Modal
          open={isOpened}
          className={classes.modalWindowWrapper}
          onClose={() => {
            setIsOpened(false);
          }}
        >
          <div className={classes.modalWindowContentWrapper}>
            <AddMessage addMessage={props.addMessageThunk} />

          </div>

        </Modal>
      </div>
      <Button   variant="contained"
        color="primary" onClick={()=>{setIsOpened(true)}}>Open</Button>
      {messages}
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    messages: state.messagesPage.messages,
  };
};
export default connect(mapStateToProps, { addMessageThunk })(Messages);
