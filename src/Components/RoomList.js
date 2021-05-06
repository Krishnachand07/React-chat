import React from "react";
import { useHistory } from "react-router";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";
import "../css/index.css";

const RoomList = ({ users, room, user }) => {
  const history = useHistory();
  const generateList = () =>
    users.map((e) => (
      <ListGroupItem color={user === e.username ? "dark" : "light"} key={e.id}>
        {e.username}
      </ListGroupItem>
    ));
  const onLeave = () => {
    history.goBack();
  };
  return (
    <div className="card">
      <div className="card-header">
        <h4>Chat Room</h4>
        <div className="d-flex justify-content-between">
          <p className="text-muted">
            {room} - {user}
          </p>
          <Button size="sm" type="button" color="dark" onClick={onLeave}>
            Leave
          </Button>
        </div>
      </div>
      <div className="card-body">
        <div className="room-list">
          <ListGroup>
            <ListGroupItemHeading>Active Users</ListGroupItemHeading>
            {generateList()}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
