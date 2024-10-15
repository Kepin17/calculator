import CalcFragment from "../../fragments/CalcFragments";
import DisplayFragment from "../../fragments/DisplayFragments";
import HistoryFragment from "../../fragments/historyfragment";

const HomePage = () => {
  return (
    <>
      <DisplayFragment />
      <main className="bg-slate-900 relative overflow-hidden">
        <HistoryFragment />
        <CalcFragment />
      </main>
    </>
  );
};

export default HomePage;
