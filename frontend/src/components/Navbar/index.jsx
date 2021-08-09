import React, {useState,useEffect} from "react";
import "./index.css";
import logo from "../../../public/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link ,useHistory} from "react-router-dom";

export default function SiteNavbar() {
  //here we check if the user is signed in or not to display the navbar accordingly
  // let signedIn = localStorage.getItem("isSignedIn") ? true : false
  // let isPatient = JSON.parse(localStorage.getItem('user-info')).isPatient ? true : false

  const [signedIn,setSignedIn] = useState(false)
  const [isPatient,setIsPatient] = useState( localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).isPatient  : null)

  // setSignedIn(localStorage.getItem("isSignedIn"))
  const history = useHistory()

   useEffect(() => {
        setInterval(async () => {
          const booleanSignedIn = (localStorage.getItem("isSignedIn") === "true") ? true : false
          await setSignedIn(booleanSignedIn)
            
            await setIsPatient(booleanSignedIn ? JSON.parse(localStorage.getItem('user-info')).isPatient : null)
            
         //await setIsPatient(signedIn ? JSON.parse(localStorage.getItem('user-info')).isPatient : null)
       // await setIsPatient(signedIn ? "yes signed in" : "not signed in")
            }, [])
    }, 5000);

  async function loggingOut() {
    await localStorage.removeItem("isSignedIn",null)
    await localStorage.removeItem("user-info", null)
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
