import {useState} from 'react';
import { useHistory } from "react-router-dom";

function SignIn({handleFetch}) {
    const [user, setUser] = useState({
        email:"",
        password:"",
    })
    const history = useHistory()
    const handlChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handlSingIn = async (e) => {
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
            const fetchResponse = await fetch(`http://localhost:3001/sign-in`, settings);
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
      <form onSubmit={handlSingIn}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required value={user.email} onChange={handlChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required value={user.password} onChange={handlChange}/>
          <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;
