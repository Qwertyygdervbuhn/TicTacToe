import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");

  function handleClick(index) {
    if (board[index] === "") {
      let newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    }
  }

  function resetGame() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setTurn("X");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "grid", gridTemplateColumns: "100px 100px 100px", gap: "5px" }}>
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{ width: "100px", height: "100px", fontSize: "24px" }}
          >
            {cell}
          </button>
        ))}
      </div>
      <br />
      <button onClick={resetGame} style={{ padding: "10px", fontSize: "18px" }}>
       Начать игру снова
      </button>
    </div>
  );
}

export default TicTacToe;
