import WeatherApp from './Components/WeatherApp/WeatherApp.jsx';
import { Auth } from "./Components/auth.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Components/login.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Weather" element={<WeatherApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

