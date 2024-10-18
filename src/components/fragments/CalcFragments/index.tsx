import { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { evaluate } from "mathjs";
import DisplayFragment from "../DisplayFragments";
import HistoryFragment from "../historyfragment";

const CalcFragment = () => {
  const [inputCalc, setInputCalc] = useState("");
  const [result, setResult] = useState("");

  // button calc

  const handleClick = (value: string) => {
    // first operator can't be the last
    if (inputCalc === "" && ["=", "-", "*", "/"].includes(value)) {
      return;
    }

    const lastChar = inputCalc.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(value)) {
      return;
    }
    if (value === "x") {
      setInputCalc((prev) => prev + "*");
    } else if (value === "/") {
      setInputCalc((prev) => prev + "/");
    } else {
      setInputCalc((prev) => prev + value);
    }
  };

  const handleParenthesis = () => {
    const openBracket = (inputCalc.match(/\(/g) || []).length;
    const closeBracket = (inputCalc.match(/\)/g) || []).length;

    if (openBracket > closeBracket) {
      setInputCalc((prev) => prev + ")");
    } else {
      setInputCalc((prev) => prev + "(");
    }
  };

  const handleBackspace = () => {
    setInputCalc((prev) => prev.slice(0, -1));
  };

  // display calc

  useEffect(() => {
    const prevCalc = document.getElementById("prev-calc");
    const currentCalc = document.getElementById("current-calc");
    if (inputCalc) {
      calculateResult();
      if (currentCalc) {
        currentCalc.innerHTML = result;
      }
    }
    if (prevCalc) {
      prevCalc.innerHTML = formatDisplay(inputCalc);
    }
  });

  // format display

  const formatDisplay = (value: string) => {
    return value.replace(/\*/g, "x").replace(/\//g, "÷");
  };

  // calc result

  const calculateResult = () => {
    const lastChar = inputCalc.slice(-1);

    if (!["+", "-", "*", "/"].includes(lastChar)) {
      try {
        setResult(evaluate(inputCalc));
      } catch {
        setResult("Undefined");
      }
    } else {
      setResult("");
    }
  };

  // delete all input
  const destroyCalc = () => {
    setInputCalc("");
    setResult("");
  };

  return (
    <>
      <DisplayFragment handleBackspace={handleBackspace} />
      <main className="bg-slate-900 relative overflow-hidden">
        <HistoryFragment />
        <section id="calc-btn">
          <div className="w-full h-[15vh]  flex justify-center items-center gap-10">
            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center ">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">
                  <FaArrowRightArrowLeft />
                </div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">Rad</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">√</div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={destroyCalc}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">C</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={handleParenthesis}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">()</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("%")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">%</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("/")}>
                <div className="circle cursor-pointer-inner text-5xl font-bold text-white ">÷</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[15vh]  flex justify-center items-center gap-10">
            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">Sin</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">Cos</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">Tan</div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("7")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">7</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("8")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">8</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("9")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">9</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("*")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">X</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[15vh]  flex justify-center items-center gap-10">
            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">ln</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">log</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">1/x</div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("4")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">4</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("5")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">5</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("6")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">6</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("-")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">-</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[15vh]  flex justify-center items-center gap-10">
            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">
                  e <sup>x</sup>
                </div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">
                  x <sup>2</sup>
                </div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">
                  x <sup>y</sup>
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("1")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">1</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("2")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">2</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("3")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">3</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("+")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">+</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[15vh]  flex justify-center items-center gap-10">
            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">|x|</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">π</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">e</div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">+/-</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("0")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">0</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={() => handleClick("%")}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">%</div>
              </div>
              <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center" onClick={calculateResult}>
                <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">=</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CalcFragment;
