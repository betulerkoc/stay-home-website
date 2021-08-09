/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
// import { Col } from "react-bootstrap";
import { Card, Button, Modal } from "react-bootstrap";
import { FaTimes, FaCheck } from "react-icons/fa";
import "./index.css";

export default function Post({ postDetail}) {
  //console.log(postDetail);
  const [show, setShow] = useState(false);
  const [applicaionStatus, setApplicationStatus] = useState(postDetail.isApplied);
  //const [postOwnerID, setOwnerID] = useState(null);
  const [contactInfo, setContactInfo] = useState({email: "", phoneNumber: ""})

  var postOwnerID = null;
  //var contactInfo = {email: "", phoneNumber: ""}

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("HandleShow is executed")
     SendApplied(postDetail.annotation_id, 
      () => {
        getContactInfo()
      })
      .then(
      setShow(true)
      )
      
      
     }

     

     
    
    
     //we send the post ID to the function in postlist
    //to make the post applied = true then the function will send back the ownerID
    //console.log("The owner of this post is:",postOwnerID)
  

  // we should get postDetail.patientId --- accourding to id response, we can get contact information


  async function SendApplied(postID, callback){
    console.log("Send Applied is executed")
    const obj = {"postID": postID}
    let result = await fetch("http://localhost:3001/volunteer-applied",
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    
    //await setOwnerID(result.postOwnerID)
    postOwnerID = result.postOwnerID
    console.log("OwnerID of this post is", postOwnerID)
    console.log("Send Applied is done executing")
    callback()

    }

    async function getContactInfo(){
      console.log("Get contact info is now executed")
      //console.log("post owner id in api function is :",postOwnerID)
      try{
        let result = await fetch(`http://localhost:3001/contact-info/${postOwnerID}`,
      {
        method: "GET",
        
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      result = await result.json()
      //console.log(result)
      
      console.log("The contact info after fetching", result)
      await setContactInfo({email: result.email, phoneNumber: result.phoneNumber})
      setApplicationStatus(true)
      //contactInfo.email = result.email
      //contactInfo.phoneNumber = result.phoneNumber

      }
      catch(e){ console.log("The error is",e)}
      console.log("get contact info is done executing")
      

      }



  return (
    <div>
      <Card border="secondary" className="postCard">
        <Card.Body>
          <Card.Text>Number of Family: {postDetail.number_of_family}</Card.Text>
          <Card.Text>
            Number of Days Staying Home: {postDetail.number_of_days}
          </Card.Text>
          <Card.Text>Type of Need: {postDetail.type_of_need}</Card.Text>
          <Card.Text>Location: {postDetail.location}</Card.Text>
          <Card.Text>
            Application Status:{" "}
            {applicaionStatus ? <FaTimes /> : <FaCheck />}
          </Card.Text>
        </Card.Body>
        {applicaionStatus ? (
          <Button variant="success" onClick={handleShow}>
            See Details
          </Button>
        ) : (
          <Button variant="success" onClick={handleShow}>
            Apply
          </Button>
        )}
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>E-mail: {contactInfo.email} {console.log("Mounted Modal")} </Modal.Body>
        <Modal.Body>Phone: {contactInfo.phoneNumber} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
