import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleData = (key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!data.email.trim()) {
      alert("Please enter email");
      return;
    }

    if (!data.password.trim()) {
      alert("Please enter password");
      return;
    }

    localStorage.setItem("user", data.email);

    setData({
      email: "",
      password: "",
    });
    navigate("/");
    alert("Login successful ");
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={onSubmit}>
        <h2>Welcome Back</h2>
        <p>Please login to your account</p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => handleData("email", e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => handleData("password", e.target.value)}
          />
        </div>

        <button type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </form>
    </div>
  );
}
