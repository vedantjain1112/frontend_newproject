import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";
import Board from "../signup/Board";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      navigate("/");
      showSuccessToast("Logged in successfully");
    } catch (error) {
      if (error.response?.data?.message === "User not found") {
        showErrorToast("User not found");
      } else if (error.response?.data?.message === "Incorrect password") {
        showErrorToast("Incorrect password");
      } else {
        showErrorToast("An error occurred");
      }
    }
  }
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <div className="loginuser">
        <div className="newMan">
          <div className="veryFirstmainContainercls">
            <div class="iamaTypewriter">
              <div class="typewrited">
                <h1>Hello user</h1>
              </div>
            </div>
            <div className="unique-sec">
              <div className="uniquecontainerclassName ">
                <div className="row unique-full-height justify-content-center">
                  <div className="col-12 text-center align-self-center py-5">
                    <div className="sections pb-5 pt-5 pt-sm-2 text-center">
                      <h6
                        id="unique-hsix"
                        className="mb-0 pb-3"
                        style={{
                          marginTop: "-140px",
                        }}
                      >
                        <span>Log In </span>
                        <span>Play</span>
                      </h6>
                      <input
                        className="unique-checkbox forInput"
                        type="checkbox"
                        id="unique-reg-log"
                        name="unique-reg-log"
                      />
                      <label htmlFor="unique-reg-log"></label>
                      <div className="unique-card-3d-wrap mx-auto">
                        <div className="unique-card-3d-wrapper">
                          <div className="unique-front-card">
                            <div className="unique-center-wrap">
                              <div className="sections text-center">
                                <h4
                                  className="mb-4 pb-3"
                                  id="unique-hfour"
                                  style={{ marginTop: "35px" }}
                                >
                                  Log In
                                </h4>
                                <form onSubmit={handleSubmit}>
                                  <div className="unique-form-group">
                                    <input
                                      type="email"
                                      name="unique-logemail"
                                      className="unique-form-style forInput"
                                      placeholder="Your Email"
                                      id="unique-logemail"
                                      autoComplete="off"
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <i className="unique-input-icon uil uil-at"></i>
                                  </div>
                                  <div className="unique-form-group mt-2">
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      name="unique-logpass"
                                      className="unique-form-style"
                                      placeholder="Your Password"
                                      id="unique-logpass"
                                      autoComplete="off"
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
                                    />
                                    <div
                                      className="password-icon-container"
                                      style={{ paddingRight: "45px" }}
                                    >
                                      <i
                                        className={`unique-input-icon uil ${
                                          showPassword
                                            ? "uil-eye-slash"
                                            : "uil-eye"
                                        }`}
                                        style={{
                                          position: "absolute",
                                          top: "50%",
                                          right: "8px",
                                          transform: "translateY(-50%)",
                                          cursor: "pointer",
                                        }}
                                        onClick={handleTogglePassword}
                                      ></i>
                                    </div>
                                    <i className="unique-input-icon uil uil-lock-alt"></i>
                                  </div>
                                  <button
                                    id="unique-anchor"
                                    type="submit"
                                    className="unique-bbttnn mt-4"
                                  >
                                    Submit
                                  </button>
                                </form>
                                <p
                                  id="unique-forp"
                                  className="mb-0 mt-4 text-center"
                                >
                                  <Link
                                    to="/forgot-password"
                                    className="unique-linking"
                                  >
                                    Forgot your password?
                                  </Link>
                                </p>
                                <p>
                                  Don't have an account?{" "}
                                  <button
                                    style={{
                                      background: "none",
                                      color: "white",
                                      border: "none",
                                      outline: "none",
                                    }}
                                  >
                                    <p
                                      id="unique-forp"
                                      className="mb-0 mt-4 text-center"
                                    >
                                      <Link
                                        to="/signup"
                                        className="unique-linking"
                                      >
                                        Signup
                                      </Link>
                                    </p>
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* signup  */}
                          <div className="unique-back-card">
                            <Board />
                            <button className="back-btn">Back</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
