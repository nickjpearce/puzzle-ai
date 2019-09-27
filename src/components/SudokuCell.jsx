import React from "react";
import { observer } from "mobx-react";

const SudokuCell = observer(({ cell }) => (
  <td>
    <input
      type="number"
      min="1"
      max="9"
      step="1"
      value={cell.value}
      onChange={(newValue) => (cell.setValue(newValue))}
    />
  </td>
));

export default SudokuCell;
