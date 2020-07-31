import React, { useState } from "react";
import TextField from "@material-ui/core/TextField/TextField";
import { Button } from "@material-ui/core";

interface IProps {
  addMessage: (message: string, location: string) => void;
}
const AddMessage: React.FC<IProps> = (props) => {
  let [messageItem, setMessage] = useState("");

  return (
    <div>
      <TextField
        type="text"
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
        defaultValue={messageItem}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.addMessage(messageItem, " ");
        }}
      >
        
        Add Message
        
      </Button>
    </div>
  );
};
export default AddMessage;
