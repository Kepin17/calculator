import { IoIosArrowBack } from "react-icons/io";

const HistoryFragment = () => {
  const closeHistory = () => {
    const historyCalc = document.getElementById("history-calc");
    if (historyCalc) {
      historyCalc.style.left = "-42vw";
    }
  };
  return (
    <div className="w-[42vw] h-full p-7  bg-slate-800 absolute top-0 left-0 z-10 transtition-all duration-300 ease-in-out" id="history-calc">
      <div className="w-full h-10 flex justify-start items-center text-orange-400 font-bold text-4xl">
        <div className="w-10 h-10 flex justify-center items-center circle hover:bg-slate-100 rounded-full cursor-pointer transtion-all duration-300 ease-in-out" onClick={closeHistory}>
          <IoIosArrowBack />
        </div>
      </div>

      <div className="history-wrapper w-full h-[90%] py-5 flex flex-col gap-5 ">
        <div className="history-item w-full h-14 bg-white rounded-lg flex justify-end items-center text-orange-400 font-roboto text-2xl px-3">
          <p>10+10=20</p>
        </div>

        <div className="history-item w-full h-14 bg-white rounded-lg flex justify-end items-center text-orange-400 font-roboto text-2xl px-3">
          <p>10+10=20</p>
        </div>

        <div className="history-item w-full h-14 bg-white rounded-lg flex justify-end items-center text-orange-400 font-roboto text-2xl px-3">
          <p>10+10=20</p>
        </div>

        <div className="history-item w-full h-14 bg-white rounded-lg flex justify-end items-center text-orange-400 font-roboto text-2xl px-3">
          <p>10+10=20</p>
        </div>
        <button className="w-full h-10 bg-orange-400 text-white rounded-lg font-bold font-roboto">Clear History</button>
      </div>
    </div>
  );
};

export default HistoryFragment;
