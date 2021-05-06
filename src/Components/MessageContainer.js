import React, { useEffect, useRef } from "react";
import moment from "moment";

import "../css/index.css";
import ChatBubble from "./ChatBubble";

const MessageContainer = ({ message, user }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref) {
      ref.current.addEventListener("DOMNodeInserted", (e) => {
        const { currentTarget: target } = e;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  const generateList = () =>
    message.map((e, i) => (
      <div key={i} className={user === e.user ? "right":"left"}>
        <ChatBubble
          value={user === e.user ?"You": e.user}
          date={moment().format("h:mm a")}
          message={e.text}
        />
      </div>
    ));
  return (
    <div ref={ref} className="message-container">
      {generateList()}
    </div>
  );
};

export default MessageContainer;
