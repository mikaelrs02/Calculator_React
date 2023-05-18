import React, { useState } from "react";
import * as S from "./calculator.style";

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [oldnumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState();

  function inputNumber(e) {
    let input = e.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }
  function clear() {
    setNumber(0);
  }
  function percentage() {
    setNumber(number / 100);
  }
  function changeSign() {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  }
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNumber(number);
    setNumber(0);
  }
  function calculate() {
    if (operator === "/") {
      setNumber(parseFloat(oldnumber) / parseFloat(number));
    } else if (operator === "X") {
      setNumber(parseFloat(oldnumber) * parseFloat(number));
    } else if (operator === "-") {
      console.log(oldnumber);
      console.log(number);
      console.log(oldnumber - number);
      setNumber(parseFloat(oldnumber) - parseFloat(number));
    } else if (operator === "+") {
      setNumber(parseFloat(oldnumber) + parseFloat(number));
    }
  }

  return (
    <S.Main>
      <S.Box>
        <S.ContainerBoxButton>
          <h1>{number}</h1>
          <S.BoxButton>
            <button onClick={clear}>AC</button>
            <S.Gray>
              <button onClick={inputNumber} value={7}>
                7
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value={4}>
                4
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value={1}>
                1
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value={0}>
                0
              </button>
            </S.Gray>
            <button onClick={changeSign}>+/-</button>
            <S.Gray>
              <button onClick={inputNumber} value={8}>
                8
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value={5}>
                5
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value={2}>
                2
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value=",">
                ,
              </button>
            </S.Gray>
            <button onClick={percentage}>%</button>
            <S.Gray>
              <button onClick={inputNumber} value={9}>
                9
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value={6}>
                6
              </button>
            </S.Gray>
            <S.Gray>
              <button onClick={inputNumber} value={3}>
                3
              </button>
            </S.Gray>
            <S.Orange>
              <button onClick={calculate}>=</button>
            </S.Orange>
            <S.Orange>
              <button onClick={operatorHandler} value="/">
                /
              </button>
            </S.Orange>
            <S.Orange>
              <button onClick={operatorHandler} value="X">
                X
              </button>
            </S.Orange>
            <S.Orange>
              <button onClick={operatorHandler} value="-">
                -
              </button>
            </S.Orange>
            <S.Orange>
              <button onClick={operatorHandler} value="+">
                +
              </button>
            </S.Orange>
            <button></button>
          </S.BoxButton>
        </S.ContainerBoxButton>
      </S.Box>
    </S.Main>
  );
}
