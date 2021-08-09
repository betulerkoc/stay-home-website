import React,{useState} from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import "./index.css";

export default function Login() {
  const history = useHistory()
  const [LoginData, SetLoginData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value
    SetLoginData({...LoginData, [inputName]:value})
  }

  const onSubmit = (e) =>{
      e.preventDefault()
      logIn()
  }

  async function logIn(){
    let result = await fetch("http://localhost:3001/log-in",
    {
      method: "POST",
      body: JSON.stringify(LoginData),
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    console.log(result)
    localStorage.setItem("user-info",JSON.stringify(result))
    localStorage.setItem("isSignedIn",true)
    console.log(typeof localStorage.setItem("isSignedIn",true) )
    if(JSON.parse(localStorage.getItem("user-info")).isPatient){
        history.push("/patient")
    }
    else{
      history.push("/volunteer")
    }
  }
  return (
    <Container className="d-flex flex-column justify-content-center loginContainer">
      <Card className="neumorphism justify-content-center flex-column align-items-center ">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" name='email'
               value={LoginData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password'
               value={LoginData.password} onChange={handleChange} required />
            </Form.Group>
            <div className="loginBtns">
              <Button className="loginButton" type="submit" variant="success">
                Login
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <div className="w-100 text-center mt-2">
              No account yet
              <Link className="otherLink" to="/signup">
                Sign-up
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
