import React from "react";
import './styles/page.css';
import SudokuGrid from './grid-components/sudokuGrid'

function App() {

  return (
      <>
        <div className="pageContainer">
          <div className="Empty"></div>
          <div className="Header">SUDOKU</div>
          <div className="Lsidebar">
            <div className="difficulties">Select Difficulty:</div>
            <div className="difficulties">Easy</div>
            <div className="difficulties">Intermediate</div>
            <div className="difficulties">Hard</div>
            <div className="difficulties">Impossible</div>
          </div>
          <div className="Content">
            <SudokuGrid></SudokuGrid>
          </div>
        </div>
      </>
  );
}

export default App;
