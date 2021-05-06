import React from "react";
import "../css/index.css";

const ChatBubble = ({ value, date, message, userStyle, textStyle }) => {
  return (
    <div className={"p-3 mt-1 mb-1 border-radius " + userStyle}>
      <div className="pl-3">
        <div className="d-flex justify-content-between">
          <h6 className={textStyle}>{value}</h6>
          <p className="text-white">{date}</p>
        </div>
        <p
          style={{ lineHeight: "20px", fontWeight: "lighter" }}
          className={textStyle + " msg"}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
