import React from "react";
import "../css/index.css";

const ChatBubble = ({ value, date, message }) => {
  return (
    <div className="p-3 mt-1 mb-1 border-radius bg-dark">
      <div className="pl-3">
        <div className="d-flex justify-content-between">
          <h6 className="text-light">{value}</h6>
          <p className="text-muted">{date}</p>
        </div>
        <p
          style={{ lineHeight: "20px", fontWeight: "lighter" }}
          className="text-light msg"
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
