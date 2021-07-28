import {useState} from 'react'
import { useHistory } from "react-router-dom";

function SignUn({handleFetch}) {
    const [user, setUser] = useState({
        email:"",
        password:"",
        firstName:"",
        lastName:"",
    })
    let history = useHistory()
    const handlChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handlSingUn = async (e) => {
        e.preventDefault()
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(user)
        };
        try {
            const fetchResponse = await fetch(`http://localhost:3001/sign-up`, settings);
            const data = await fetchResponse.json();
            console.log(data);
            handleFetch(data.user)
            history.push('/')
            return data;
        } catch (e) {
            return e;
        }
    }
  return (
    <div>
      <form onSubmit={handlSingUn}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" required value={user.firstName} onChange={handlChange}/>
          <label htmlFor="firstName">Last Name</label>
          <input type="text" name="lastName" required value={user.lastName} onChange={handlChange}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required value={user.email} onChange={handlChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required value={user.password} onChange={handlChange}/>
          <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUn;
