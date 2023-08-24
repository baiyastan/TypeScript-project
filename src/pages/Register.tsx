import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="page">
      <div className="container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)} className="input" type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" id="password" />
          </div>
          <button onClick={handleLogin} className="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
