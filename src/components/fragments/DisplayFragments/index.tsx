import { FaHistory, FaRulerHorizontal, FaCalculator } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const DisplayFragment = ({ handleBackspace }: { handleBackspace: () => void }) => {
  const showHistory = () => {
    const historyCalc = document.getElementById("history-calc");
    if (historyCalc) {
      historyCalc.style.left = "0";
    }
  };
  return (
    <header className="home w-full h-[30vh] bg-black relative">
      <div className="text-white absolute top-10 right-20">
        <h3 className="text-slate-300 text-right text-xl" id="prev-calc"></h3>
        <h1 className="text-5xl text-right my-2" id="current-calc"></h1>
      </div>
      <nav className="w-full absolute bottom-5 left-0 flex items-center justify-between px-20">
        <ul className="text-white flex items-center gap-3">
          <li>
            <FaHistory className="text-2xl cursor-pointer" onClick={showHistory} />
          </li>
          <li>
            <FaRulerHorizontal className="text-2xl cursor-pointer" />
          </li>
          <li>
            <FaCalculator className="text-2xl cursor-pointer" />
          </li>
        </ul>
        <button className="text-2xl text-red-500" onClick={handleBackspace}>
          <FaDeleteLeft className="cursor-pointer" />
        </button>
      </nav>
    </header>
  );
};

export default DisplayFragment;
