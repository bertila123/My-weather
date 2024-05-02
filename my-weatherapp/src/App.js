import './App.css';

import WeatherApp from './Components/WeatherApp/WeatherApp.jsx';

import Auth from "./Components/auth.js"
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from "./Components/login.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element ={<Auth />} />
          <Route path ="/login" element= {<Login/>} />
          <Route path ="/Weather" element={<WeatherApp/>}/>
          </Routes>
          </div>
      </Router>
  );
}

export default App;
