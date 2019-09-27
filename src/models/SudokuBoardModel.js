import { observable, computed, action } from "mobx";

import SudokuCellModel from "./SudokuCellModel";

export default class SudokuBoardModel {
  @observable cells = [];

  constructor() {
    for (let i = 0; i < 81; i++) {
      let row = Math.floor(i / 9);
      let column = i % 9;
      let square = (Math.floor(row / 3) * 3) + Math.floor(column / 3);
      cells.push(new SudokuCellModel(row, column, square));
    }
  }

  @computed
  get isFinished() {
    let foundEmptyCell = false;
    for (let i = 0; i < 81; i++) {
      if (!this.cells[i].value) {
        foundEmptyCell = true;
      }
    }
    return (!foundEmptyCell);
  }

  @action
  removeCandidates(cell) {
    let value = cell.value;
    let row = cell.row_column_square[0];
    let column = cell.row_column_square[1];
    let square = cell.row_column_square[2];
    let additionalRemovals = [];

    for (let i = 0; i < 81; i++) {
      let newCell = this.cells[i];
      if (
        newCell.candidates && (
          newCell.row_column_square[0] === row
          || newCell.row_column_square[1] === column
          || newCell.row_column_square[2] === square
        )
      ) {
        newCell.removeCandidate(value);
        if (newCell.value) {
          additionalRemovals.push(newCell);
        }
      }
    }

    for (let o = 0; o < additionalRemovals.length; o++) {
      this.removeCandidates(additionalRemovals[o]);
    }
  }

  @action
  wipeCandidates() {
    for (let i = 0; i < 81; i++) {
      if (this.cells[i].value) {
        this.removeCandidates(this.cells[i]);
      }
    }
  }
}
