import React, {useState} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';


const Login = () => {
   const [credentials, setCredentials] = useState({username:'', password:''});

    
 let handleChange = e => {
    
      setCredentials( {
        ...credentials,
        [e.target.name]: e.target.value
      }
      )
  };


 let login = e => {
      e.preventDefault();
      axiosWithAuth()
      .post('/login', credentials)
      .then(res => { 
          localStorage.setItem('token', res.data.payload);
      })
      .catch(err => console.log(err));
  }






    
        return (
            <div>
                <form onSubmit={login} >
                    <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    />
                   <input 
                   type="password"
                   name="password"
                   value={credentials.password}
                   onChange={handleChange}
                   />
                   <button>Login</button>

                </form>
            </div>
        );
    
}

export default Login;