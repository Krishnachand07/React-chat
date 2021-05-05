import React, { useState } from "react";
import { Button, Input, InputGroup, InputGroupAddon, Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import io from "../socket";

const MessageInput = () => {
  const [text, setText] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!text || text === " ") {
      setText("");
      return;
    }
    io.emit("chatMsg", text.trim());
    setText("");
  };
  const handleChange = (e) => {
    if (!e.target.value || e.target.value === " ") {
      setText("");
      return;
    }
    setText(e.target.value);
  };
  return (
    <div>
      <Form onSubmit={sendMessage}>
        <InputGroup>
          <Input value={text} onChange={handleChange} placeholder="Type something..." />
          <InputGroupAddon addonType="append">
            <Button size="md" color="dark">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  );
};

export default MessageInput;
