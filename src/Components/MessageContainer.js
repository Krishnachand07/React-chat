import React, { useEffect, useRef } from "react";
import "../css/index.css";
import ChatBubble from "./ChatBubble";
const MessageContainer = ({ message }) => {
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
      <div key={i}>
        <ChatBubble value={e.user} date={e.time} message={e.text} />
      </div>
    ));
  return <div ref={ref} className="message-container">{generateList()}</div>;
};

export default MessageContainer;
