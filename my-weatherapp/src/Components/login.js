import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import React, {signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user=userCredential.user;
      navigate("/weather");
      console.log("Clicked");
    })
    .catch((error) => {
      const errorCode=error.code;
      const errorMessage=error.message;
      console.log(errorCode, errorMessage);
    });
  };

  return (
     <div className='form'>
      <h1>Login</h1>
      
      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
