import React, {useState} from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import "./index.css";
import { Container } from "react-bootstrap";

export default function Signup() {
  const history = useHistory()
  const [SignUpFields, setFeilds] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    password: "",
    isPatient: ""
  });

  // const [isPatientSelected, setIsPatientSelected] = useState(false)

  // const selectUserType = (e) =>{

  // }

  const handleFieldChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
   
    setFeilds({...SignUpFields, [inputName]: value})
  }
  //on Submit
  const onSubmit = (e) =>{
    e.preventDefault()   //to submit on same page
    signUp()
  }

  async function signUp(){
    let result = await fetch("http://localhost:3001/sign-up",
    {
      method: "POST",
      body: JSON.stringify(SignUpFields),
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    console.log(result)
    localStorage.setItem("user-info",JSON.stringify(result))
    localStorage.setItem("isSignedIn",true)
    console.log(localStorage.getItem("user-info"))
    
    if (JSON.parse(localStorage.getItem("user-info")).isPatient) {
      history.push("/patient")
    }
    else {
      history.push("/volunteer")
    }
  }

  return (                 
    <Container className="d-flex flex-column justify-content-center signUpContainer">
      <Card className="neumorphism justify-content-center flex-column align-items-center">
        <Card.Body>
          <h2 className="text-center mb-4 purpleElemSignUp">SignUp</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group id="userEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="text"
                name='email'
                value={SignUpFields.email}
                onChange={handleFieldChange}
                required
              />
            </Form.Group>
            <Form.Group id="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name='fullName'
                value={SignUpFields.fullName}
                onChange={handleFieldChange}
                
                required
              />
            </Form.Group>
            <Form.Group id="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text"
              name='phoneNumber'
              value={SignUpFields.phoneNumber}
              onChange={handleFieldChange} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password'
                value={SignUpFields.password}
                onChange={handleFieldChange}required />
            </Form.Group>
            <Form.Group id="userType">
              <Form.Label>User Type</Form.Label>
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Patient"
                      name="isPatient"
                      value='true'
                      onChange={handleFieldChange}
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Volunteer"
                      name="isPatient"
                      value='false'
                      onChange={handleFieldChange}
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form>
            </Form.Group>

            <Button
              className="w-100 signUpButton"
              variant="success"
              type="submit"
            >
              Sign-up
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            Have an Account
            <Link className="otherLink" to="/login">
              Login
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
