import React, { Component } from "react";
//import { observable, action } from "mobx";
import { observer } from "mobx-react";

import SudokuCell from "./SudokuCell";

@observer
class SudokuBoard extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.store.wipeCandidates}>
          <table>
            <tr>
              <SudokuCell cell={this.props.store.cells[0]} />
              <SudokuCell cell={this.props.store.cells[1]} />
              <SudokuCell cell={this.props.store.cells[2]} />
              <SudokuCell cell={this.props.store.cells[3]} />
              <SudokuCell cell={this.props.store.cells[4]} />
              <SudokuCell cell={this.props.store.cells[5]} />
              <SudokuCell cell={this.props.store.cells[6]} />
              <SudokuCell cell={this.props.store.cells[7]} />
              <SudokuCell cell={this.props.store.cells[8]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[9]} />
              <SudokuCell cell={this.props.store.cells[10]} />
              <SudokuCell cell={this.props.store.cells[11]} />
              <SudokuCell cell={this.props.store.cells[12]} />
              <SudokuCell cell={this.props.store.cells[13]} />
              <SudokuCell cell={this.props.store.cells[14]} />
              <SudokuCell cell={this.props.store.cells[15]} />
              <SudokuCell cell={this.props.store.cells[16]} />
              <SudokuCell cell={this.props.store.cells[17]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[18]} />
              <SudokuCell cell={this.props.store.cells[19]} />
              <SudokuCell cell={this.props.store.cells[20]} />
              <SudokuCell cell={this.props.store.cells[21]} />
              <SudokuCell cell={this.props.store.cells[22]} />
              <SudokuCell cell={this.props.store.cells[23]} />
              <SudokuCell cell={this.props.store.cells[24]} />
              <SudokuCell cell={this.props.store.cells[25]} />
              <SudokuCell cell={this.props.store.cells[26]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[27]} />
              <SudokuCell cell={this.props.store.cells[28]} />
              <SudokuCell cell={this.props.store.cells[29]} />
              <SudokuCell cell={this.props.store.cells[30]} />
              <SudokuCell cell={this.props.store.cells[31]} />
              <SudokuCell cell={this.props.store.cells[32]} />
              <SudokuCell cell={this.props.store.cells[33]} />
              <SudokuCell cell={this.props.store.cells[34]} />
              <SudokuCell cell={this.props.store.cells[35]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[36]} />
              <SudokuCell cell={this.props.store.cells[37]} />
              <SudokuCell cell={this.props.store.cells[38]} />
              <SudokuCell cell={this.props.store.cells[39]} />
              <SudokuCell cell={this.props.store.cells[40]} />
              <SudokuCell cell={this.props.store.cells[41]} />
              <SudokuCell cell={this.props.store.cells[42]} />
              <SudokuCell cell={this.props.store.cells[43]} />
              <SudokuCell cell={this.props.store.cells[44]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[45]} />
              <SudokuCell cell={this.props.store.cells[46]} />
              <SudokuCell cell={this.props.store.cells[47]} />
              <SudokuCell cell={this.props.store.cells[48]} />
              <SudokuCell cell={this.props.store.cells[49]} />
              <SudokuCell cell={this.props.store.cells[50]} />
              <SudokuCell cell={this.props.store.cells[51]} />
              <SudokuCell cell={this.props.store.cells[52]} />
              <SudokuCell cell={this.props.store.cells[53]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[54]} />
              <SudokuCell cell={this.props.store.cells[55]} />
              <SudokuCell cell={this.props.store.cells[56]} />
              <SudokuCell cell={this.props.store.cells[57]} />
              <SudokuCell cell={this.props.store.cells[58]} />
              <SudokuCell cell={this.props.store.cells[59]} />
              <SudokuCell cell={this.props.store.cells[60]} />
              <SudokuCell cell={this.props.store.cells[61]} />
              <SudokuCell cell={this.props.store.cells[62]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[63]} />
              <SudokuCell cell={this.props.store.cells[64]} />
              <SudokuCell cell={this.props.store.cells[65]} />
              <SudokuCell cell={this.props.store.cells[66]} />
              <SudokuCell cell={this.props.store.cells[67]} />
              <SudokuCell cell={this.props.store.cells[68]} />
              <SudokuCell cell={this.props.store.cells[69]} />
              <SudokuCell cell={this.props.store.cells[70]} />
              <SudokuCell cell={this.props.store.cells[71]} />
            </tr>
            <tr>
              <SudokuCell cell={this.props.store.cells[72]} />
              <SudokuCell cell={this.props.store.cells[73]} />
              <SudokuCell cell={this.props.store.cells[74]} />
              <SudokuCell cell={this.props.store.cells[75]} />
              <SudokuCell cell={this.props.store.cells[76]} />
              <SudokuCell cell={this.props.store.cells[77]} />
              <SudokuCell cell={this.props.store.cells[78]} />
              <SudokuCell cell={this.props.store.cells[79]} />
              <SudokuCell cell={this.props.store.cells[80]} />
            </tr>
          </table>
          <button type="submit">Solve</button>
        </form>
      </div>
    );
  }
}
