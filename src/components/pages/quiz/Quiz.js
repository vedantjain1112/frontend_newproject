import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import axios from "axios";
import "./Quiz.scss";

function useCounter(initialState) {
  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);

  const add = () => setValue((value) => (value += 1));

  return { value, add, reset };
}

function Question({
  data,
  buttonText,
  hasButton = true,
  onQuestionButtonClick,
  showAnswer = false,
  markSelection = null,
}) {
  const [answer, setAnswer] = useState(null);
  const parseValue = (value) => (value ? parseInt(value.split("-")[1]) : null);
  const questionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      questionRef.current.querySelector(".question-text"),
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
      }
    );
    gsap.fromTo(
      questionRef.current.querySelectorAll("li"),
      {
        opacity: 0,
        x: 40,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
      }
    );
  }, [data]);

  return (
    <div className="question" ref={questionRef}>
      <div className="question-inner">
        <h2 className="question-text">{data.text}</h2>
        <ul className="question-answers">
          {data.answers.map((text, index) => {
            const value = `q${data.id}-${index}`;
            return (
              <li
                className={
                  index === data.correct && showAnswer ? "is-true" : ""
                }
                key={value}
                id="iamlis"
                data-selected={markSelection === index ? true : null}
              >
                <input
                  type="radio"
                  name={`q_${data.id}`}
                  value={value}
                  id={value}
                  onChange={(e) => setAnswer(e.target.value)}
                  checked={
                    !showAnswer ? answer === value : markSelection === index
                  }
                  className="inpt"
                />
                <label id="qna" className="question-answer" htmlFor={value}>
                  <div className="answer-box">{text}</div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {hasButton && (
        <button
          className="question-button"
          onClick={() => onQuestionButtonClick(parseValue(answer), data)}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

function Results({ wrong, correct, empty }) {
  return (
    <div className="result">
      <div className="result-item is-correct">
        <span className="result-count">{correct}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01 9 11.01"></path>
          </svg>
          CORRECT
        </span>
      </div>
      <div className="result-item is-wrong">
        <span className="result-count">{wrong}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9L9 15"></path>
            <path d="M9 9L15 15"></path>
          </svg>
          WRONG
        </span>
      </div>
      <div className="result-item is-empty">
        <span className="result-count" style={{ color: "black" }}>
          {empty}
        </span>
        <span
          className="result-text"
          style={{
            color: "black",
          }}
        >
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            className="css-i6dzq1"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12L16 12"></path>
          </svg>
          EMPTY
        </span>
      </div>
    </div>
  );
}

function Quiz() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameSize, setGameSize] = useState({});
  const [questions, setQuestions] = useState([]);
  const totalQuestion = questions.length - 1;
  const gameRef = useRef(null);
  const gameOverlayRef = useRef(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(
          `/api/questions?difficulty=${selectedDifficulty}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchQuestions();
  }, [selectedDifficulty]);

  // useEffect(() => {
  //   async function fetchQuestions() {
  //     try {
  //       const response = await axios.get("/api/questions");
  //       setQuestions(response.data);
  //     } catch (error) {
  //       console.error("Error fetching questions:", error);
  //     }
  //   }

  //   fetchQuestions();
  // }, []);

  function QuestionCorrection({ wrong, correct, empty }) {
    return (
      <div className="correction">
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              hasButton={false}
              markSelection={question.selection}
              showAnswer={true}
              data={question}
            />
          );
        })}
      </div>
    );
  }

  const handleNewQuestionClick = async (selectedValue, currQuestion) => {
    console.log("currQuestion:", currQuestion);
    console.log("questions:", questions);
    if (totalQuestion >= question.value) {
      console.log("selectedValue:", selectedValue);
      if (selectedValue === currQuestion.correct) {
        correct.add();
      } else if (
        selectedValue !== null &&
        selectedValue !== currQuestion.correct
      ) {
        wrong.add();
      } else {
        empty.add();
      }

      const updatedQuestions = [...questions];
      updatedQuestions[currQuestion.id] = {
        ...updatedQuestions[currQuestion.id],
        selection: selectedValue,
      };

      setQuestions(updatedQuestions);

      if (question.value <= totalQuestion) {
        question.add();
      }

      if (selectedValue !== null) {
        try {
          await axios.post("/api/questions", questions[currQuestion.id]);
        } catch (error) {
          console.error("Error inserting question:", error);
        }
      }
    }
  };

  const resetSelection = () => {
    questions.forEach((q) => (q.selection = null));
  };

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  const indicatorBg = (index) => {
    if (question.value > index) {
      return "green";
    } else if (question.value === index) {
      return "#fff";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  useEffect(() => {
    if (question.value > totalQuestion) {
      gameRef.current.scrollTop = 0;
    }
  }, [question.value]);

  const questionComponent = questions.length > 0 && (
    <Question
      data={questions[question.value]}
      buttonText={
        question.value < totalQuestion ? "Next Question" : "Finish Quiz"
      }
      onQuestionButtonClick={handleNewQuestionClick}
    />
  );

  return (
    <div
      className="game"
      ref={gameRef}
      data-game-started={gameStarted ? true : null}
      data-game-finished={question.value > totalQuestion ? true : null}
    >
      <div
        className="intro"
        style={{
          background: "rgb(149, 233, 227)",
        }}
      >
        <div className="intro-inner">
          <h1 className="intro-title" style={{ color: "#1f8197" }}>
            How much you know about JAINISM?
          </h1>
          {!gameStarted && (
            <>
              <select
                className="difficulty-select"
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                value={selectedDifficulty}
                style={{
                  color: "#1f8197",
                  background: "transparent",
                  border: "2px solid teal",
                  borderRadius: "5px",
                  margin: "5px",
                }}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <p
                className="intro-desc"
                style={{
                  color: "#1f8197",
                }}
              >
                {`The quiz contains ${questions.length} questions and there is no time limit.`}
              </p>

              <button
                className="intro-button"
                onClick={() => setGameStarted(true)}
                style={{
                  marginTop: "-30px",
                }}
              >
                Start Quiz
              </button>
            </>
          )}
          {gameStarted && (
            <div className="indicator">
              {questions.map((q, index) => {
                return (
                  <span
                    className="indicator-item"
                    style={{
                      backgroundColor: indicatorBg(index),
                    }}
                  />
                );
              })}
            </div>
          )}
          <Results
            wrong={wrong.value}
            correct={correct.value}
            empty={empty.value}
          />
          <button
            className="restart-button"
            onClick={() => handleRestartClick()}
            style={{
              color: "black",
            }}
          >
            Restart Quiz
          </button>
        </div>
      </div>
      <div className="game-area">
        {questions[question.value] && (
          <Question
            data={questions[question.value]}
            buttonText={
              question.value < totalQuestion ? "Next Question" : "Finish Quiz"
            }
            onQuestionButtonClick={handleNewQuestionClick}
          />
        )}

        {!questions[question.value] && (
          <>
            <QuestionCorrection data={questions} />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
