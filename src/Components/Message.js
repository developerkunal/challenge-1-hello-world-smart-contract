import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const Message = (props) => {
  const [message2, setMessage2] = useState("");
  const [loading,setLoading] = useState(false)
  const message = async () => {
    setLoading(true)
    await window.contract.set_message(
      {
        message: message2,
        account_id: window.accountId,
      },
      300000000000000 // attached GAS (optional)
    );
      location.reload(false)
  };
  function handleChange(event) {
    setMessage2(event.target.value);
  }
  return (
    <Card style={{ padding: "2vh" }}>
      <Container>
        <Row style={{ marginBottom: "2vh" }}></Row>
        <Row className="d-flex justify-content-center">
          <p>Update Your Message!</p>
          <p className="highlight">
            <label htmlFor="message">Message:</label>
            <input
              autoComplete="off"
              autoFocus
              value={message2}
              required
              onChange={handleChange}
            />
          </p>
          <Button
            disabled={loading || window.accountId === ""}
            onClick={message}
            style={{ width: "50vw" }}
          >
            {loading ? 'loading' : 'submit'}
          </Button>

          {props.usermessage && (
            <center>
              <h1>Hello {props.usermessage} </h1>
            </center>
          )}
        </Row>
      </Container>
    </Card>
  );
};

Message.propTypes = {};

export default Message;
