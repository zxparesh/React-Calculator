import React, { useState } from "react";
import "./index.css";

export default function Calculator() {
  const [operand, setOperand] = useState('+');
  const [result, setResult] = useState(null);
  const [operations, setOperations] = useState(0);
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");

  const onClick = (op) => {
    if (!!op1 && !!op2) {
      setOperand(op);
      setOperations(operations + 1);
      const o1 = parseFloat(op1);
      const o2 = parseFloat(op2);
      if (op === "+") {
        setResult(o1 + o2);
      } else if (op === "-") {
        setResult(o1 - o2);
      } else if (op === "*") {
        setResult(o1 * o2);
      } else if (op === "/") {
        setResult(o1 / o2);
      }
    } else {
      setResult(null);
    }
  }

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "op1") {
      setOp1(value);
    } else if (id === "op2") {
      setOp2(value);
    }
  }

  const onReset = () => {
    setOp1("");
    setOp2("");
    setOperand('+');
    setResult(null);
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {operations}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input id="op1" type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
              name="input1" onChange={onChange} value={op1} />
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operand}</label>
            <input id="op2" type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
              placeholder="Eg: 2" onChange={onChange} value={op2} />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={() => onClick("+")}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={() => onClick("-")}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={() => onClick("*")}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={() => onClick("/")}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={onReset}>Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {result != null ? <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div> : null}
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}