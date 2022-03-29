
import './App.css';

import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

import SatePractice from './components/SatePractice';
function App() {
  const adminUser = {
    email: "something12@mao.com",
    password: "admin123"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("logeed in");
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      console.log("Email or password mismatch");
      setError("Email or password mismatch");
    }
  }
  const logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: ""
    })
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome , <span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) :
        <LoginForm Login={Login} error={error} />}

      {/* <SatePractice></SatePractice> */}
    </div>
  );
}

export default App;
