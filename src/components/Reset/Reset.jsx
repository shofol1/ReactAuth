import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgetPass() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassCon] = useState("");
  const [message, setMessage] = useState("");
  const handleResetPass = (e) => {
    e.preventDefault();
    const data = {
      email,
      token,
      password,
      password_confirmation,
    };
    axios
      .post("/resetpass", data)
      .then((res) => {
        setMessage(res.data.message);
        document.getElementById("forgetform").reset();
      })
      .catch((err) => setMessage(err.response.data.message));
  };
  return (
    <div>
      <div
        className="row g-0 d-flex align-items-center"
        style={{ height: "600px" }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card p-2 bg-light">
            <h3 className="text-center text-bold">Reset Password</h3>
            <form className="p-3" onSubmit={handleResetPass} id="forgetform">
              {message ? (
                <div className="alert alert-danger">{message}</div>
              ) : (
                " "
              )}
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Pin Code
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="token"
                  placeholder="name@example.com"
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="name@example.com"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="confirm_pass"
                  placeholder="name@example.com"
                  onChange={(e) => setPassCon(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-primary my-4 w-100">
                Forget Password
              </button>
              Already have an accout? <Link to="/login">Login</Link>
              <br />
              Don't have an accout? <Link to="/register">Register</Link>
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
