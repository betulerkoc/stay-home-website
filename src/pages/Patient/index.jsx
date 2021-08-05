import React from "react";
import Apply from "../../components/Apply";
import AppliedPost from "../../components/AppliedPost";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

export default function Patient() {
  return (
    <Container>
      <Row>
        <Col>
          <Apply />
        </Col>
        <Col>
          <AppliedPost />
        </Col>
      </Row>
    </Container>
  );
}
