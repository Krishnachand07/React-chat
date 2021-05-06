import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import MessageContainer from "../Components/MessageContainer";
import Field from "../Components/messageInput";
import RoomList from "../Components/RoomList";
import io from "../socket";
import Qs from "qs";

const Chat = () => {
  const [name, setName] = useState([]);
  const [message, setMessage] = useState([]);
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    const { username, room } = Qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    setUser(username);
    console.log(username, room);
    io.on("connect", () => {
      console.log("ok");
    });
    io.emit("join", { username, room });
    io.on("roomInfo", ({ room, users }) => {
      setName(users);
      setRoom(room);
    });
    io.on("msg", (message) => {
      setMessage((msg) => [...msg, message]);
    });
    return () => {
      io.close();
    };
  }, []);
  return (
    <div>
      <Row>
        <Col xl={4} lg={6}>
          <RoomList users={name} room={room} user={user} />
        </Col>
        <Col xl={8} lg={6}>
          <MessageContainer message={message} user={user} />
          <Field />
        </Col>
      </Row>
    </div>
  );
};

export default Chat;
