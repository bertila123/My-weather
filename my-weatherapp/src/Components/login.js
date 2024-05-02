import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here, for example using Firebase signInWithEmailAndPassword
    // Once logged in successfully, you can navigate to another page
    navigate('/weather');
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
