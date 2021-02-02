import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [binary, setBinary] = React.useState("");
  const [decimal, setDecimal] = React.useState(0);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    convertBinaryLogic(binary);
  }, [binary]);

  function onChange(event) {
    const re = /^[0-1\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setErr(false);
      return setBinary(event.target.value);
    } else {
      return setErr(true);
    }
  }

  function convertBinaryLogic(binary) {
    let subTotal = 0;
    for (let index = 0; index < binary.length; index++) {
      const element = binary.charAt(index);
      subTotal = subTotal * 2 + parseInt(element);
    }
    setDecimal(subTotal);
  }
  return (
    <div className="App">
      <div className="App-header">
        <form>
          {err ? (
            <p style={{ backgroundColor: "red" }}>
              Only allowed numerical characters between <strong>1</strong> and{" "}
              <strong>0</strong>
            </p>
          ) : (
            <p></p>
          )}
          <label>Write your binary number here(1 or 0)</label>
          <input type="text" name="binary" value={binary} onChange={onChange} />
          <label>
            Decimal value
            <p>{decimal}</p>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
