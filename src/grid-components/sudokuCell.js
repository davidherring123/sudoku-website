import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/sudoku.css';

const Cell = (props) => {

    const [style, setStyle] = useState("sudoku-cell");

    const handleClick = () => {

        props.selectCell(props.pos);
        setStyle("sudoku-cell-selected")
    }

    useEffect(() => {

        if (props.sCell !== props.pos && style === "sudoku-cell-selected") {
            setStyle("sudoku-cell");
        } 

        if ( props.grid[props.sCell] !== props.grid[props.pos] && style === "sudoku-cell-highlighted") {
            setStyle("sudoku-cell");
        }

        if (style !== "sudoku-cell-selected" && props.grid[props.sCell] !== 0 && props.grid[props.sCell] === props.grid[props.pos]) {
            setStyle("sudoku-cell-highlighted");
        }

    },[style,props.sCell,props.pos,props.grid]);

    return (
        <button className={style} onClick={handleClick} >{props.grid[props.pos] ? props.grid[props.pos] : ""}</button>
    );
}

export default Cell;