import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleForgetPass = (e) => {
    e.preventDefault();
    axios
      .post("/forget", { email })
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
            <h3 className="text-center text-bold">Forget Password</h3>
            <form className="p-3" onSubmit={handleForgetPass} id="forgetform">
              {message ? (
                <div className="alert alert-danger">{message}</div>
              ) : (
                " "
              )}
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
                <button type="submit" class="btn btn-primary my-4 w-100">
                  Forget Password
                </button>
                Already have an accout? <Link to="/login">Login</Link>
                <br />
                Don't have an accout? <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
