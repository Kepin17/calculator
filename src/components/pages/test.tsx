import React, { useState } from "react";
import { evaluate, isNull } from "mathjs"; // Gunakan math.js untuk perhitungan jika diperlukan

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Fungsi untuk menangani input
  const handleClick = (value: string) => {
    const lastChar = input.slice(-1); // Ambil karakter terakhir dari input

    if (value === "x") {
      setInput((prev) => prev + "*");
    } else if (value === "/") {
      setInput((prev) => prev + "/");
    } else if (value === "%") {
      setInput((prev) => prev + "/100"); // Hitung persentase
    } else {
      // Jika terakhir input % dan input baru adalah angka, tambahkan *
      if (lastChar === "%" && !isNull(value)) {
        setInput((prev) => prev + "*" + value);
      } else {
        setInput((prev) => prev + value);
      }
    }
  };

  // Fungsi untuk menangani input kurung
  const handleParenthesis = () => {
    const openBrackets = (input.match(/\(/g) || []).length;
    const closeBrackets = (input.match(/\)/g) || []).length;

    if (openBrackets > closeBrackets) {
      setInput((prev) => prev + ")"); // Tambahkan ')' jika jumlah '(' lebih banyak
    } else {
      setInput((prev) => prev + "("); // Tambahkan '(' jika lebih sedikit atau seimbang
    }
  };

  // Fungsi untuk menghitung hasil
  const calculateResult = () => {
    try {
      setResult(evaluate(input)); // Evaluasi ekspresi input
    } catch {
      setResult("Error");
    }
  };

  // Menghapus input
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <p>{input || "0"}</p> {/* Tampilkan input */}
        <h1>{result || "0"}</h1> {/* Tampilkan hasil */}
      </div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={handleParenthesis}>()</button> {/* Tombol kurung */}
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>x</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
