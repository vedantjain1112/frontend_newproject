import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN, removeItem } from "../utils/localStorageManager";
import { axiosClient } from "../utils/axiosClient";
import { showSuccessToast } from "../utils/toastUtils";
import GoogleTranslate from "../translator/GoogleTranslate";
import ThemeToggle from "../darkmode/ThemeToggle";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import "./Navbar.scss";

function Navbar() {
  const [isNavBarActive, setNavBarActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();

  const handleMenuIconClick = () => {
    setNavBarActive((prevActive) => !prevActive);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isLoggedIn = !!localStorage.getItem(KEY_ACCESS_TOKEN);

  async function handleLogoutClicked() {
    try {
      await axiosClient.post("/auth/logout");
      removeItem(KEY_ACCESS_TOKEN);
      navigate("/login");
      showSuccessToast("LoggedOut Successfully");
    } catch (e) {
      console.error("Logout error:", e);
    }
  }

  return (
    <>
      <div className="header" id="home">
        <div className="logoo">
          <h2>
            g<span style={{ marginLeft: "0" }}>rs</span>
          </h2>
        </div>
        <nav className={isNavBarActive ? "active" : ""} id="navimumbai">
          <ul className="links" style={{ cursor: "pointer" }}>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="active anchorTAGHUmein"
                style={{
                  color: "#0ef",
                }}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="chaturmas"
                smooth={true}
                duration={500}
                className="anchorTAGHUmein"
              >
                Chaturmas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="tirthankara"
                smooth={true}
                duration={500}
                className="anchorTAGHUmein"
              >
                24 Tirthankara's
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="fmt"
                smooth={true}
                duration={500}
                className="anchorTAGHUmein"
              >
                Famous Tirth Locations
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="qz"
                smooth={true}
                duration={500}
                className="anchorTAGHUmein"
              >
                Quiz
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <GoogleTranslate />
        <div id="login-btn-container">
          <div className="clock-container">
            <div id="clock">
              <div id="time">
                <div>
                  <span id="hour">
                    {currentTime.getHours().toString().padStart(2, "0")}
                  </span>
                  <span>Hours</span>
                </div>
                <div>
                  <span id="minute">
                    {currentTime.getMinutes().toString().padStart(2, "0")}
                  </span>
                  <span>Minutes</span>
                </div>
                <div>
                  <span id="second">
                    {currentTime.getSeconds().toString().padStart(2, "0")}
                  </span>
                  <span>Seconds</span>
                </div>
                <div>
                  <span id="ampm">
                    {currentTime.getHours() >= 12 ? "PM" : "AM"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {isLoggedIn ? (
            <button id="login-btn" onClick={handleLogoutClicked}>
              <FaUser
                style={{ marginRight: "4px", marginLeft: "0" }}
                icon="fa-solid fa-user"
              />{" "}
              Logout
            </button>
          ) : (
            <RouterLink to="/login">
              <button id="login-btn">Login</button>
            </RouterLink>
          )}
        </div>
        <div
          className="ts"
          style={{
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
            marginRight: "60px",
            marginBottom: "38px",
          }}
        >
          <div className="onthreesixfiveNone">
            <ThemeToggle />
          </div>
        </div>
        <FaBars
          icon="fa fa-bars"
          id="menu-icon"
          onClick={handleMenuIconClick}
        />
      </div>
    </>
  );
}

export default Navbar;
