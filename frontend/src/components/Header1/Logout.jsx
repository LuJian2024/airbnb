/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react"
import "./Login.css"

export default function Login({ setUser }) {
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  // focusiert input-Element beim ersten Rendern (initial Render)
  useEffect(() =>
    usernameRef.current && usernameRef.current.focus(), []
  )

  function checkLogin() {
    if (username !== "root") {
      usernameRef.current.focus();
      return setError("Wrong username")
    }
    if (password === "1234") {
      passwordRef.current.focus();
      return setError("That's the old password")
    }
    if (password !== "toor") {
      passwordRef.current.focus();
      return setError("Wrong password")
    }

    setUser(username)
  }

  return (
    <>
      <p className="error">{error}</p>

      <label>
        User
        <input
          type="text"
          ref={usernameRef}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>

      <label>
        Pass
        <input
          type={!showPassword ? "password" : "text"}
          ref={passwordRef}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <label >
        <input
          style={{ width: '15px' }}
          type="checkbox"
          checked={showPassword}
          onChange={() => {
            !showPassword && passwordRef.current.focus();
            setShowPassword(!showPassword)
          }} />
        show password</label>
      <button onClick={checkLogin}>
        Login
      </button>

      <p className="error">{error}</p>
    </>
  )

}