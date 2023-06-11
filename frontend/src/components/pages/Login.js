import React, {useState} from "react";
import Image from '../images/logo.jpeg';
import "./login.css";
import Admin from "../pages/Admin";
import User from "../pages/User"

export default function Login() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");

  
  const handlesubmit = async(e) => {
    e.preventDefualt();
    console.log("logged")


    await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      //setUser({ username, role: data.role });
      console.log("@#$1234Yonatan*")
      if(data.user.role == "admin"){
           return (Admin);
      }else {
        return (User);
      }
    })
    .catch((error) => console.error(error));
}

  return (
    <div className="login">
      <form onSubmit={handlesubmit}>
        <div className="header">
          <img src={Image} alt="logo" />
          <a href="/">Home </a>
        </div>
        <div className="form-container1">
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>{setUsername(e.target.value);console.log(e.target.value)} }
            required
          />
          <br />
          <label style={{ marginTop: "5%" }}>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            required
          />
          <br />
          <button onClick={handlesubmit}>Login</button>
          {/* <a href="/Admin">user</a> */}
        </div>
      </form>
    </div>
  );
}
