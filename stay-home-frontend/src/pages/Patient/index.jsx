import React, { useEffect, useState } from "react";
import Apply from "../../components/Apply";
import AppliedPost from "../../components/AppliedPost";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

export default function Patient() {
  const [userId, setUserID] = useState(
    JSON.parse(localStorage.getItem("user-info")).id
  );

  useEffect(() => {
    console.log(userId);
    getMyPosts()
  }, []);

  const [myPosts, setMyPosts] = useState(null);

  async function getMyPosts() {
    const reqBody = {
        patient_id: userId,
      };
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      };
      try {
        const fetchResponse = await fetch(
          `http://localhost:3001/getMyPosts`,
          settings
        );
        console.log(fetchResponse);
        const data = await fetchResponse.json();
        console.log(data);
        setMyPosts(data)
      } catch (e) {
        console.log(e);
      }
  }

  return (
    <Container>
      <Row>
        <Col>
          <Apply userId={userId}/>
        </Col>
        <Col>
          <AppliedPost myPosts={myPosts}/>
        </Col>
      </Row>
    </Container>
  );
}
