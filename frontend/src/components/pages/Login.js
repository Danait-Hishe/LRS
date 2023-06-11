import React, {useState} from "react";
import "./login.css";

export default function Login() {
  const [user, setUser] = useState()
  
  const handlesubmit = (e) => {
    e.preventDefualt();

    const { username, password } = this.state;
    console.log(username, password);

    fetch("http://localhost:5000/login", {
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
      setUser({ username, role: data.role });
    })
    .catch((error) => console.error(error));
}

  return (
    <div className="login">
      <form on onSubmit={handlesubmit}>
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
            required
          />
          <br />
          <label style={{ marginTop: "5%" }}>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
          <br />
          <button type="submit">Login</button>
          <a href="/Admin">user</a>
        </div>
      </form>
    </div>
  );
}
