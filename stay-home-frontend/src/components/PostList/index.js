import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../Post";
import "./index.css";

export default function PostList() {
  const [postData, setPostData] = useState([]);
  const [sentOwnerID, setOwnerID] = useState(null);

  const getAllPosts = async (e) => {
    const settings = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/patient-post`,
        settings
      );
      const data = await fetchResponse.json();
      //console.log(data);
      //console.log("Above Me")
      setPostData(data);
    } catch (e) {
      console.log(e);
    }
  };

  // async function SendApplied(postID){
  //   const obj = {"postID": postID}
  //   let result = await fetch("http://localhost:3001/volunteer-applied",
  //   {
  //     method: "POST",
  //     body: JSON.stringify(obj),
  //     headers:  {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }
  //   })
  //   result = await result.json()
  //   //console.log(result)
  //   await setOwnerID(result.postOwnerID)
  //   console.log("OwnerID in post list is", result.postOwnerID)
    
  //   }
  

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Container>
      <Row>
        {postData.map((item, index) => {
          return (
            <Col key={index}>
              <Post postDetail={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
