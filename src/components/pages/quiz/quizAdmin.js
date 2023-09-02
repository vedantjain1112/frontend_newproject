import React, { useState, useEffect } from "react";
import axios from "axios";
import "./quizAdmin.scss";
import QuoteAdmin from "../../quotes/QuoteAdmin";

function QuizAdmin() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    answers: [],
    correct: 0,
    difficulty: "easy",
  });

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get("http://localhost:4000/api/questions");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchQuestions();
  }, []);

  // const handleAddQuestion = async () => {
  //   const trimmedAnswers = newQuestion.answers.map((answer) => answer.trim());
  //   const cleanedAnswers = trimmedAnswers.filter((answer) => answer !== "");

  //   if (!newQuestion.text || cleanedAnswers.length === 0) {
  //     console.log(
  //       "Question fields are empty or contain no valid answers. Not adding question."
  //     );
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:4000/api/questions", {
  //       text: newQuestion.text,
  //       answers: cleanedAnswers,
  //       correct: newQuestion.correct,
  //     });

  //     setQuestions([...questions, response.data]);
  //     setNewQuestion({ text: "", answers: [], correct: 0 });
  //   } catch (error) {
  //     console.error("Error adding question:", error);
  //   }
  // };

  const handleAddQuestion = async () => {
    const trimmedAnswers = newQuestion.answers.map((answer) => answer.trim());
    const cleanedAnswers = trimmedAnswers.filter((answer) => answer !== "");

    if (!newQuestion.text || cleanedAnswers.length === 0) {
      console.log(
        "Question fields are empty or contain no valid answers. Not adding question."
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/questions", {
        text: newQuestion.text,
        answers: cleanedAnswers,
        correct: newQuestion.correct,
        difficulty: newQuestion.difficulty, // Add difficulty to the request body
      });

      setQuestions([...questions, response.data]);
      setNewQuestion({
        text: "",
        answers: [],
        correct: 0,
        difficulty: "easy", // Reset the difficulty for the next question
      });
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    console.log("Deleting question with ID:", questionId);

    try {
      await axios.delete(`http://localhost:4000/questions/${questionId}`);
      const updatedQuestions = questions.filter(
        (question) => question._id !== questionId
      );
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div
      className="adminofquiz"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="quiz-admin">
        <h2
          className="fade-in"
          style={{
            fontSize: "25px",
          }}
        >
          Quiz Admin Page
        </h2>
        <form className="slide-up">
          <input
            type="text"
            placeholder="Question"
            value={newQuestion.text}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, text: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Comma-separated options"
            value={newQuestion.answers.join(", ")}
            onChange={(e) =>
              setNewQuestion({
                ...newQuestion,
                answers: e.target.value.split(", "),
              })
            }
          />
          <input
            type="number"
            placeholder="Correct answer index"
            value={newQuestion.correct}
            onChange={(e) => {
              const parsedValue = parseInt(e.target.value);
              if (!isNaN(parsedValue)) {
                setNewQuestion({ ...newQuestion, correct: parsedValue });
              }
            }}
          />
          <select
            value={newQuestion.difficulty}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, difficulty: e.target.value })
            }
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            type="button"
            onClick={handleAddQuestion}
            className="btn-pulse"
          >
            Add Question
          </button>
        </form>

        <ul className="slide-in">
          {questions
            .filter(
              (question) => question.difficulty === newQuestion.difficulty
            )
            .map((question) => (
              <li key={question._id} className="question-item">
                {question.text}
                <button
                  onClick={() => handleDeleteQuestion(question._id)}
                  style={{
                    border: "1px solid black",
                    outline: "none",
                    borderRadius: "6px",
                    background: "transparent",
                    width: "100px",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className="quotadmn">
        <QuoteAdmin />
      </div>
    </div>
  );
}

export default QuizAdmin;
