import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

const Home = () => {
  const history = useHistory();
  const form = useFormik({
    initialValues: { name: "", room: "" },
    validate: (e) => {
      const errors = {};
      if (!e.name) {
        errors.name = "Name is required";
      }
      if (!e.room) {
        errors.room = "Room is required";
      }
      return errors;
    },
    onSubmit: (e) => {
      console.log(e);
      history.push(`/chat?username=${e.name}&room=${e.room}`);
    },
  });

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="card">
        <div className="card-header">
          <h4>Welcome to Chat Room</h4>
        </div>
        <div className="card-body">
          <Form onSubmit={form.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.name}
                placeholder="Enter your name"
              />
              <p className="text-danger">
                {form.errors.name && form.touched.name && form.errors.name}
              </p>
            </FormGroup>
            <FormGroup>
              <Input
                type="select"
                name="room"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.room}
              >
                <option disabled value="">
                  Select Room
                </option>
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
                <option value="Guest">Guest</option>
              </Input>
              <p className="text-danger">
                {form.errors.room && form.touched.room && form.errors.room}
              </p>
            </FormGroup>
            <Button color="dark" block type="submit">
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
