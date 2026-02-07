import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Sign In</h2>
        <p>Please enter your login info</p>

        <div className="login-fields">
          <label>Username:</label>
          <input
          required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
          required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/home")}
        >
          Sign In
          
        </button>

      </div>
    </div>
  )
}
