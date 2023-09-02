import React, { useState, useEffect } from "react";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";

const NumberMemoryGame = ({ onGameComplete }) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [round, setRound] = useState(1);

  // Function to generate a random number based on the current round's duration
  const generateRandomNumber = () => {
    let duration;
    switch (round) {
      case 1:
        duration = 5;
        break;
      case 2:
        duration = 4.5;
        break;
      case 3:
        duration = 4;
        break;
      case 4:
        duration = 3;
        break;
      case 5:
        duration = 1.5;
        break;
      default:
        duration = 5; // Default to 5 seconds for any other round
    }
    const randomNumber = (Math.random() * 100).toFixed(2);
    setRandomNumber(randomNumber);
    setTimeout(() => {
      setUserInput(""); // Clear user input after the duration
    }, duration * 1000);
  };

  useEffect(() => {
    generateRandomNumber();
  }, [round]);

  // Function to handle user input and check if it matches the generated number
  const handleUserInput = () => {
    if (parseFloat(userInput) === parseFloat(randomNumber)) {
      showSuccessToast(getSuccessMessage());
      if (round === 5) {
        setIsGameCompleted(true);
        onGameComplete();
      } else {
        setRound((prevRound) => prevRound + 1);
      }
    } else {
      showErrorToast(getFailureMessage());
      setRound(1); // Start from round 1 if the user fails any round
    }
  };

  // Function to get the success message for the current round
  const getSuccessMessage = () => {
    switch (round) {
      case 1:
        return "Nice";
      case 2:
        return "Great";
      case 3:
        return "Awesome";
      case 4:
        return "Excellent";
      case 5:
        return "Outstanding";
      default:
        return "";
    }
  };

  // Function to get the failure message for the current round
  const getFailureMessage = () => {
    switch (round) {
      case 1:
        return "Try again";
      case 2:
        return "Better Luck next time";
      case 3:
        return "Ok";
      case 4:
        return "HMMM";
      case 5:
        return "Fine";
      default:
        return "";
    }
  };

  return (
    <div>
      <h1 style={{ marginTop: "50px" }}>Number Memory Game</h1>
      <p>Round {round}</p>
      <p>Memorize the number: {randomNumber}</p>
      <input
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        disabled={isGameCompleted}
      />
      <button onClick={handleUserInput} disabled={isGameCompleted}>
        Submit
      </button>
    </div>
  );
};

export default NumberMemoryGame;
