import { observable, action } from "mobx";

export default class SudokuCellModel {
  @observable value;
  @observable row_column_square;
  @observable candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(row, column, square) {
    this.row_column_square = [row, column, square];
  }

  @action
  setValue(v) {
    this.value = v;
    this.candidates = null;
  }

  @action
  removeCandidate(c) {
    this.candidates = this.candidates.filter(candidate => candidate !== c);
    if (this.candidates.length === 1) {
      this.setValue(this.candidates[0]);
    }
  }
}
