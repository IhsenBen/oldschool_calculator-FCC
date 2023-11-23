import "./App.css";
import React, { MouseEvent, useState } from "react";
import { Grid } from "@mui/material";
// import Calculator from "./js/Calculator";

const buttonData = [
  { label: "AC" },
  { label: "CE" },
  { label: "-" },
  { label: "+" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "/" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "*" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "=" },
  { label: "0" },
  { label: "." },
];

type ButtonProps = {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
const CalculatorButton = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} id={label} key={label}>
    {label}
  </button>
);

function App() {
  const [display, setDisplay] = useState<number|string>(0);

  // const calculator = new Calculator();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.id;
    console.log(value);
    setDisplay(value);
  };

  return (
    <div className="box">
      <Grid
        maxWidth={400}
        direction="column"
        className="calculatrice"
        container
        gap={3}
      >
        <Grid item className="calculator__sun-container">
          <div className="calculator__sun-battery"></div>
          <div>
            <h2 className="brand">
              JS Super<span>90's</span>
            </h2>
          </div>
        </Grid>
        <Grid className="calculator__screen-container" item>
          <input
            id="display"
            type="text"
            className="calculator__screen"
            value={display}
            readOnly
          />
        </Grid>

        <Grid item container spacing={1} className="button_container">
          {buttonData.map((data) => (
            <CalculatorButton
              label={data.label}
              onClick={handleClick}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
