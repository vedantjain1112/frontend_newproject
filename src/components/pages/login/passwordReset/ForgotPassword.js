import React, { useState } from "react";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import { axiosClient } from "../../../utils/axiosClient";
import NumberMemoryGame from "./NumberMemoryGame";
import { Link } from "react-router-dom";
import "../Login.scss";
function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function handleForgotPassword(e) {
    e.preventDefault();
    try {
      await axiosClient.post("/auth/forgot-password", { email });
      showSuccessToast("Password reset link sent to your email");
    } catch (error) {
      showErrorToast(error.response?.data?.message || "An error occurred");
    }
  }

  const [isGameCompleted, setIsGameCompleted] = useState(false);

  // Function to handle the game completion
  const handleGameComplete = (isMatch) => {
    setIsGameCompleted(isMatch);
  };

  return (
    <div className="newMan">
      <div className="veryFirstmainContainercls">
        <div className="unique-sec">
          <div className="uniquecontainerclassName ">
            <div className="row unique-full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="sections pb-5 pt-5 pt-sm-2 text-center">
                  <h6 id="unique-hsix" className="mb-0 pb-3">
                    <span>Reset Password</span>
                    <span>Play</span>
                  </h6>
                  <input
                    className="unique-checkbox"
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
                            <h4 className="mb-4 pb-3" id="unique-hfour">
                              Forget Password
                            </h4>
                            <form onSubmit={handleForgotPassword}>
                              <div className="unique-form-group">
                                <input
                                  type="email"
                                  name="unique-logemail"
                                  className="unique-form-style"
                                  placeholder="Your Email"
                                  value={email}
                                  id="unique-logemail"
                                  autoComplete="off"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <i className="unique-input-icon uil uil-at"></i>
                              </div>
                              <button
                                id="unique-anchor"
                                type="submit"
                                className="unique-bbttnn mt-4"
                              >
                                Reset Password
                              </button>
                            </form>
                            <p
                              id="unique-forp"
                              className="mb-0 mt-4 text-center"
                              style={{
                                marginTop: "20px",
                              }}
                            >
                              <Link to="/signup" className="unique-linking">
                                Sign Up
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* backSection  */}
                      <div className="unique-back-card">
                        {isGameCompleted ? (
                          <p></p>
                        ) : (
                          <NumberMemoryGame
                            onGameComplete={handleGameComplete}
                          />
                        )}
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
  );
}

export default ForgotPassword;
