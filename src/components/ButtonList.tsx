import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import "./ButtonList.css";
import Calculate from "./Calculate";

interface ButtonListProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setCalculate: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonList: React.FC<ButtonListProps> = ({
  text,
  setText,
  setCalculate,
}): JSX.Element => {
  const addText = (newText: string) => {
    if (text === "0") {
      setText(`${newText}`);
      return;
    }
    const inputMatches = text.matchAll(Calculate.INPUT_REGEX_MUST);
    for (const match of inputMatches) {
      if (match.groups !== undefined) {
        setCalculateTrue();
        break;
      }
    }
    setText(`${text}${newText}`);
  };

  const clearText = () => {
    setText("");
  };

  const setCalculateTrue = () => {
    setCalculate(true);
  };

  return (
    <section className="calc_btn_list">
      <NumList add={addText} />
      <OperatorList
        add={addText}
        setCalculate={setCalculateTrue}
        clear={clearText}
      />
    </section>
  );
};

export default ButtonList;

interface NumListProps {
  add: (text: string) => void;
}

const NumList: React.FC<NumListProps> = ({ add }): JSX.Element => {
  return (
    <>
      <button
        className="calc_btn calc_num"
        id="num_1"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        1
      </button>
      <button
        className="calc_btn calc_num"
        id="num_2"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        2
      </button>
      <button
        className="calc_btn calc_num"
        id="num_3"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        3
      </button>
      <button
        className="calc_btn calc_num"
        id="num_4"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        4
      </button>
      <button
        className="calc_btn calc_num"
        id="num_5"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        5
      </button>
      <button
        className="calc_btn calc_num"
        id="num_6"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        6
      </button>
      <button
        className="calc_btn calc_num"
        id="num_7"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        7
      </button>
      <button
        className="calc_btn calc_num"
        id="num_8"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        8
      </button>
      <button
        className="calc_btn calc_num"
        id="num_9"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        9
      </button>
      <button
        className="calc_btn calc_num"
        id="num_0"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        0
      </button>
    </>
  );
};

interface OperatorListProps {
  add: (text: string) => void;
  clear: () => void;
  setCalculate: () => void;
}

const OperatorList: React.FC<OperatorListProps> = ({
  add,
  clear,
  setCalculate,
}) => {
  return (
    <>
      <button
        className="calc_btn calc_op"
        id="op_add"
        onClick={(e) => add(` ${e.currentTarget.innerText} `)}
      >
        +
      </button>
      <button
        className="calc_btn calc_op"
        id="op_sub"
        onClick={(e) => add(` ${e.currentTarget.innerText} `)}
      >
        -
      </button>
      <button
        className="calc_btn calc_op"
        id="op_mul"
        onClick={(e) => add(` ${e.currentTarget.innerText} `)}
      >
        ×
      </button>
      <button
        className="calc_btn calc_op"
        id="op_div"
        onClick={(e) => add(` ${e.currentTarget.innerText} `)}
      >
        ÷
      </button>
      <button
        className="calc_btn calc_op"
        id="op_dot"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        .
      </button>
      <button
        className="calc_btn calc_op"
        id="op_del"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        DEL
      </button>
      {/* <button className="calc_btn calc_op" id="op_eq" onClick={setCalculate}> */}
      <button
        className="calc_btn calc_op"
        id="op_eq"
        onClick={() => setCalculate()}
      >
        =
      </button>
      <button className="calc_btn calc_op" id="op_clr" onClick={clear}>
        C
      </button>
      <button
        className="calc_btn calc_op"
        id="op_clr_entry"
        onClick={(e) => add(e.currentTarget.innerText)}
      >
        CE
      </button>
    </>
  );
};
