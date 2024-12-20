import MessageCard from "../Card/MessageCard";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
const Review = () => {
  return (
    <div className="flex justify-center mt-20 ">
      <div className="flex-col justify-around w-4/5 overflow-auto align-middle sm:w-2/3 bg-slate-700 rounded-xl">
        <div className="">
          <h1
            className="mt-5 mb-5 text-6xl text-center text-white"
            style={{
              "font-family": "Mouse Memoirs,serif",
              "font-weight": 400,
              "font-style": "normal",
            }}
          >
            Our Reviews
          </h1>
        </div>
        <div className="flex justify-center overflow-scroll align-middle">
          <div className="flex m-4 align-middle">
            <button>
              <img
                src={left}
                alt=""
                className="w-10 h-10 pb-2 pl-2 pr-2 m-2 rounded-md hover:bg-slate-100 bg-slate-200"
              />
            </button>
          </div>
          <div className="flex justify-center w-full m-4 align-middle">
            <MessageCard username="Ram_21" />
            {/* <MessageCard username="Sita_12" /> */}
          </div>
          <div className="flex justify-center m-4 align-middle">
            <button>
              <img
                src={right}
                alt=""
                className="w-10 h-10 pb-2 pl-2 pr-2 m-2 rounded-md hover:bg-slate-100 bg-slate-200"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
