import React, { useState } from "react";
import SubGrid from "./sudokuSubGrid"
import '../styles/sudoku.css';
import useKeypress from 'react-use-keypress';

let exampleGrid = [
    5, 3, 0, 0, 7, 0, 0, 0, 0,
    6, 0, 0, 1, 9, 5, 0, 0, 0,
    0, 9, 8, 0, 0, 0, 0, 6, 0,
    8, 0, 0, 0, 6, 0, 0, 0, 3,
    4, 0, 0, 8, 0, 3, 0, 0, 1,
    7, 0, 0, 0, 2, 0, 0, 0, 6,
    0, 6, 0, 0, 0, 0, 2, 8, 0,
    0, 0, 0, 4, 1, 9, 0, 0, 5,
    0, 0, 0, 0, 8, 0, 0, 7, 9
];

const SudokuGrid = (props) => {

    const [selectedCell, setSelectedCell] = useState(-1);
    const [grid, setGrid] = useState(exampleGrid);
    const evkeys = ["1","2","3","4","5","6","7","8","9","Backspace"];
    let tempGrid = grid;

    const changeGrid = (value) => {
        tempGrid[selectedCell] = value;
        setGrid(tempGrid);
    }

    const isNumber = (value) => {
        if (typeof value === "string") {
            return !isNaN(value);
        }
    }

    useKeypress( evkeys, (event) => {
        if (isNumber(event.key)) {
            changeGrid(parseInt(event.key));
        } else {
            changeGrid(0);
        }
    });


    return (
        <div className="sudoku-grid">
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={0}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={1}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={2}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={3}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={4}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={5}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={6}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={7}/>
            <SubGrid sCell={selectedCell} selectCell={setSelectedCell} grid={grid} pos={8}/>
        </div>
    )
}

export default SudokuGrid;