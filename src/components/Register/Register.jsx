import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassCon] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("/register", {
        name,
        email,
        password,
        password_confirmation,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
        props.setUser(res.data.user);
      })
      .catch((err) => setMessage(err.response.data.message));
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, []);
  return (
    <div>
      <div
        className="row g-0 d-flex align-items-center"
        style={{ height: "600px" }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card p-2 bg-light">
            <h3 className="text-center text-bold">Register</h3>
            <form className="p-3" onSubmit={handleRegister}>
              {message ? (
                <div className="alert alert-danger">{message}</div>
              ) : (
                " "
              )}
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="name@example.com"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
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
                <label for="exampleFormControlTextarea1" class="form-label">
                  Password
                </label>
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Confirm Password
                </label>
                <input
                  class="form-control"
                  type="password"
                  name="c_password"
                  onChange={(e) => setPassCon(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button type="submit" class="btn btn-primary mb-2 w-100">
                  Sign Up
                </button>
                <span>Allready have an account?</span>{" "}
                <Link to="/login">Click here</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
