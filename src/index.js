import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import SudokuBoard from "./components/SudokuBoard";
import SudokuBoardModel from "./models/SudokuBoardModel";
import SudokuCellModel from "./models/SudokuCellModel";

const store = new SudokuBoardModel();

render(
  <div>
    <DevTools />
    <SudokuBoard store={store} />
  </div>,
  document.getElementById("root")
);


// playing around in the console
window.store = store;
