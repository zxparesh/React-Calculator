import React, { useState } from "react";
import "./index.css";

export default function Calculator() {
  const [operand, setOperand] = useState('+');
  const [result, setResult] = useState(null);
  const [operations, setOperations] = useState(0);
  const [op1, setOp1] = useState(null);
  const [op2, setOp2] = useState(null);

  const onClick = (op) => {
    console.log("onClick", op, op1, op2, operations)
    if (!!op1 && !!op2) {
      setOperand(op);
      setOperations(operations + 1);
      const o1 = parseFloat(op1);
      const o2 = parseFloat(op2);
      if (op == "+") {
        setResult(o1 + o2);
      } else if (op == "-") {
        setResult(o1 + o2);
      } else if (op == "*") {
        setResult(o1 * o2);
      } else if (op == "/") {
        setResult(o1 / o2);
      }
    }
  }



  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations"></div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
              name="input1" />
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator"></label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
              placeholder="Eg: 2" />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={() => onClick("+")}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={() => onClick("-")}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={() => onClick("*")}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={() => onClick("/")}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger">Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div data-testid="result" className="result-value ma-0 slide-up-fade-in"></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}