import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../Post";
import "./index.css";

export default function PostList() {
  const mockPostList = [
    {
      volunterId: 1,
      numberOfFamily: 4,
      numberOfDays: 7,
      typeOfNeed: "food",
      location: "istanbul",
    },
    {
      volunterId: 2,
      numberOfFamily: 4,
      numberOfDays: 7,
      typeOfNeed: "food",
      location: "istanbul",
    },
    {
      volunterId: 3,
      numberOfFamily: 4,
      numberOfDays: 7,
      typeOfNeed: "food",
      location: "istanbul",
    },
  ];

  return (
    <Container fluid="lg">
      <Row>
        {mockPostList.map((item) => {
          return (
            <Col>
              <Post postDetail={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
