import React, {useState,useEffect} from "react";
import "./index.css";
import logo from "../../../public/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link ,useHistory} from "react-router-dom";

export default function SiteNavbar() {
  //here we check if the user is signed in or not to display the navbar accordingly
  // let signedIn = localStorage.getItem("isSignedIn") ? true : false
  // let isPatient = JSON.parse(localStorage.getItem('user-info')).isPatient ? true : false

  const [signedIn,setSignedIn] = useState(localStorage.getItem("isSignedIn") ? true : false)
  const [isPatient,setIsPatient] = useState(JSON.parse(localStorage.getItem('user-info')).isPatient)

  // setSignedIn(localStorage.getItem("isSignedIn"))
  const history = useHistory()

  useEffect(() => {
        setInterval(() => {
          setSignedIn(localStorage.getItem("isSignedIn"))
          setIsPatient(JSON.parse(localStorage.getItem('user-info')).isPatient)
            }, [])
    }, 5000);

  async function loggingOut() {
    await localStorage.removeItem("isSignedIn",null)
    await localStorage.rmoveItem("user-info", null)
    setSignedIn(false)
    history.push("/")

    
      }

  return (
    
    <Container fluid className="navMainClass">
      <Navbar.Brand  href="/">
        <img src={logo} alt="logo" className="logoImg" />
      </Navbar.Brand>

      <Nav className="justify-content-end" activeKey="/">
      <Nav.Item className="navItem">
          <Link to="/" className="navLink">Home</Link>
        </Nav.Item>
        
        <Nav.Item className="navItem">
         {!signedIn && <Link to="/signup" className="navLink">Volunteer</Link> }
        </Nav.Item>
        <Nav.Item className="navItem">
         {!signedIn && <Link to="/signup" className="navLink">Patient</Link> }
        </Nav.Item>
        <Nav.Item className="navItem">
         {signedIn && <Link to={`${isPatient ? "/patient" : "/volunteer"}`} className="navLink">Applications</Link> }
        </Nav.Item>
        <Nav.Item className="navItem">
         {!signedIn && <Link to="/login" className="navLink">Log in</Link>}
        </Nav.Item>
        
        
          
        <Nav.Item className="navItem">
        {signedIn && <Link to="/"  onClick={loggingOut} className="navLink">Log out</Link> }
        </Nav.Item>
        
      </Nav>
    </Container>
  );
}
