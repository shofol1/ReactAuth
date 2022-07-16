import Header from "./shared/Header/Header";
import Nav from "./shared/Nav/Nav";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgetPass from "./components/ForgetPass/ForgetPass";
import Profile from "./components/Profile/Profile";
import axios from "axios";
import { useEffect, useState } from "react";
import Reset from "./components/Reset/Reset";
function App() {
  const [user, setUser] = useState({});

  axios.defaults.baseURL = "http://127.0.0.1:8000/api";
  axios.defaults.headers.common["Authorization"] =
    `Bearer ` + localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/currentuser")
      .then((res) => setUser(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Nav user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
          <Route path="/forget" element={<ForgetPass />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/reset/:id" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
