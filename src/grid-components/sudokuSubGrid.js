import React from "react";
import '../styles/sudoku.css';
import Cell from "./sudokuCell";

const SubGrid = (props) => {

    let col = 3 * (props.pos % 3);
    let row = 27 * Math.floor(props.pos / 3);
    let i = col + row;

    return (
        <div className="sudoku-subgrid">
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={0 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={1 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={2 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={9 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={10 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={11 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={18 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={19 + i}/>
            <Cell sCell={props.sCell} selectCell={props.selectCell} grid={props.grid} pos={20 + i}/>
        </div>
    );
}

export default SubGrid;