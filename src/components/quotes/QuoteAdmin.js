import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuoteAdmin.scss";

function QuoteAdmin() {
  const [newQuote, setNewQuote] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/quote", { quote: newQuote });
      setNewQuote("");
    } catch (error) {
      console.log("Error adding quote:", error);
    }
  };

  return (
    <div className="quote-admin-container">
      <h1 className="quote-admin-title">Quote Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the quote..."
          className="quote-input"
          value={newQuote}
          onChange={(e) => setNewQuote(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuoteAdmin;
