import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1573/api/auth/register", {email, password});
      navigate("/login");
    } catch (err) {
        if (err.response && err.response.status === 409) {
            setError(err.response.data.message || "Email already exists");
        } else {
            setError("Registration failed");
        }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
       <p>
        already have an account? <Link to="/login">Login</Link>
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Create Account</button>
    </form>
  );
}
