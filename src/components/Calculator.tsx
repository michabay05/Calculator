import React, { useState } from "react";
import ButtonList from "./ButtonList";
import Calculate from "./Calculate";
import "./Calculator.css";

const Calculator = (): JSX.Element => {
  const [display, setDisplay] = useState("0");
  const [calculate, setCalculate] = useState(false);

  const calculateAnswer = () => {
    if (calculate) {
      setDisplay(`${Calculate.fromStr(display)}`);
      setCalculate(false);
    }
  };

  calculateAnswer();
  return (
    <main className="calculator">
      <Display text={display} />
      <ButtonList
        text={display}
        setCalculate={setCalculate}
        setText={setDisplay}
      />
    </main>
  );
};

export default Calculator;

interface DisplayProps {
  text: string;
}

const Display: React.FC<DisplayProps> = ({ text }): JSX.Element => {
  let primaryText: string = text,
    secondaryText: string = "";

  // console.log(calculate);
  const parseText = (): void => {
    let operators = [" + ", " - ", " × ", " ÷ "];
    let splitIndex = -1;
    for (const operator of operators) {
      splitIndex = text.lastIndexOf(operator);
      if (splitIndex != -1) {
        primaryText = text.slice(splitIndex + 2);
        secondaryText += text.slice(0, splitIndex + 2);
        break;
      }
    }
  };
  parseText();

  return (
    <section className="calc_display">
      <div id="upper_display">{secondaryText}</div>
      <div id="lower_display">{primaryText}</div>
    </section>
  );
};
