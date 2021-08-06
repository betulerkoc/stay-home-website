import React from "react";
import Apply from "../../components/Apply";
import AppliedPost from "../../components/AppliedPost";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { useState } from "react";



export default function Patient() {

  // const [userID,setUserID] = useState(JSON.parse(localStorage.getItem("user-info")).id)
  // const [MyPosts, setMyPosts] = useState(null)
  // async function getMyPosts(){
  //   let result = await fetch("http://localhost:3001/log-in",
  //   {
  //     method: "POST",
  //     body: JSON.stringify(LoginData),
  //     headers:  {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }
  //   })
  //   result = await result.json()
  //   console.log(result)
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   localStorage.setItem("isSignedIn",true)
  //   if(JSON.parse(localStorage.getItem("user-info")).isPatient){
  //       history.push("/patient")
  //   }
  //   else{
  //     history.push("/volunteer")
  //   }
  // }


  return (
    <Container>
      <Row>
        <Col>
          <Apply />
        </Col>
        <Col>
          <AppliedPost  />
        </Col>
      </Row>
    </Container>
  );
}
