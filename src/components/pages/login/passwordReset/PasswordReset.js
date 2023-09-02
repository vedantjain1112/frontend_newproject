import React, { useState } from "react";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import { axiosClient } from "../../../utils/axiosClient";

function PasswordReset({ match }) {
  const [password, setPassword] = useState("");

  async function handlePasswordReset(e) {
    e.preventDefault();
    try {
      const resetToken = match.params.token;
      await axiosClient.post(`/auth/reset-password/${resetToken}`, {
        password,
      });
      showSuccessToast("Password reset successful");
    } catch (error) {
      showErrorToast(error.response?.data?.message || "An error occurred");
    }
  }

  return (
    <div>
      <h2>Password Reset</h2>
      <form onSubmit={handlePasswordReset}>
        <input
          type="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default PasswordReset;
