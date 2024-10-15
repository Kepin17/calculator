import { FaArrowRightArrowLeft } from "react-icons/fa6";

const CalcFragment = () => {
  return (
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
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">C</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">()</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">%</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">:</div>
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
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">7</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">8</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">9</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
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
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">4</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">5</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">6</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
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
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">1</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">2</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">3</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
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
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">0</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">%</div>
          </div>
          <div className="circle cursor-pointer bg-orange-400 text-roboto w-[10rem] h-[10vh] rounded-full  flex justify-center items-center">
            <div className="circle cursor-pointer-inner text-3xl font-bold text-white ">=</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalcFragment;
