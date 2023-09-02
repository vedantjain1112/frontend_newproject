import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [chosenSymbol, setChosenSymbol] = useState(null);

  const winningLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let logic of winningLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const isWinner = checkWinner();

  const checkTie = () => {
    return state.every((square) => square !== null);
  };

  const isTie = checkTie();

  useEffect(() => {
    if (!isWinner && !isXTurn && !isTie) {
      // Computer ki turn
      const emptySquares = state.reduce((acc, val, index) => {
        if (!val) acc.push(index);
        return acc;
      }, []);

      if (emptySquares.length > 0) {
        const randomNum = Math.random();
        const bestMove =
          randomNum <= 0.3
            ? findBestMove(state)
            : emptySquares[Math.floor(Math.random() * emptySquares.length)];
        const copyState = [...state];
        copyState[bestMove] = "O";
        setState(copyState);
        setIsXTurn(true);
      }
    }
  }, [isWinner, isXTurn, isTie, state]);

  const handleClick = (index) => {
    if (state[index] !== null || isWinner || !isXTurn || isTie) {
      return;
    }
    const copyState = [...state];
    copyState[index] = "X";
    setState(copyState);
    setIsXTurn(false);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setChosenSymbol(null);
  };

  const handleSymbolChoice = (e) => {
    e.preventDefault();
    const symbol = e.target.symbol.value;
    if (symbol === "X" || symbol === "O") {
      setChosenSymbol(symbol);
      setIsXTurn(symbol === "X");
    }
  };

  const evaluate = () => {
    if (isWinner === "X") {
      return -10;
    } else if (isWinner === "O") {
      return 10;
    } else {
      return 0;
    }
  };

  const minimax = (board, depth, isMaximizing) => {
    const score = evaluate();

    if (score === 10 || score === -10) {
      return score;
    }

    if (isTie) {
      return 0;
    }

    if (isMaximizing) {
      let best = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = "O";
          best = Math.max(best, minimax(board, depth + 1, !isMaximizing));
          board[i] = null;
        }
      }
      return best - depth;
    } else {
      let best = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = "X";
          best = Math.min(best, minimax(board, depth + 1, !isMaximizing));
          board[i] = null;
        }
      }
      return best + depth;
    }
  };

  const findBestMove = (board) => {
    let bestVal = -Infinity;
    let bestMove = -1;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = "O";
        let moveVal = minimax(board, 0, false);
        board[i] = null;
        if (moveVal > bestVal) {
          bestVal = moveVal;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  return (
    <div className="board-container">
      {chosenSymbol ? (
        <>
          {isWinner ? (
            <>
              {isWinner} won the game{" "}
              <button onClick={handleReset}>Play Again</button>
            </>
          ) : isTie ? (
            <>
              Game Tie <button onClick={handleReset}>Play Again</button>
            </>
          ) : (
            <>
              <h4>Player {isXTurn ? "X" : "O"} please move</h4>
              <div className="board-row">
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
              </div>
              <div className="board-row">
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
              </div>
              <div className="board-row">
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
              </div>
            </>
          )}
        </>
      ) : (
        <form onSubmit={handleSymbolChoice}>
          <label>
            Choose your symbol (X or O):
            <input type="text" name="symbol" pattern="[XO]" required />
          </label>
          <button type="submit">Start Game</button>
        </form>
      )}
    </div>
  );
};

export default Board;
