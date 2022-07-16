import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  let button;
  let profile;
  const { user } = props.user;
  const { setUser } = props.setUser;
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };
  if (localStorage.getItem("token")) {
    button = (
      <Link className="nav-link" to="/" onClick={handleLogout}>
        Logout
      </Link>
    );
    profile = (
      <Link className="nav-link" to="/profile">
        Profile
      </Link>
    );
  } else {
    button = (
      <>
        <ul class="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Self Learner
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">{profile}</li>
            </ul>
            <span className="navbar-text">{button}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
