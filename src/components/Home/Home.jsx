import About from "../About/About";
// import Contact from "../Contact/Contact";
import Service from "../Services/Service";
import demo from "../../assets/Demo.webp";
import Review from "../Review/Review";
import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <div className="flex justify-center align-middle sm:mt-10 ">
        <div
          className="flex-col justify-around w-4/5 h-full align-middle mt-28 sm:mt-32 sm:w-2/3 sm:flex-row lg:flex xl:flex"
          style={{
            "font-family": "Mouse Memoirs,serif",
            "font-weight": 400,
            "font-style": "normal",
          }}
        >
          <div className="flex-col sm:mt-0 ">
            <h1 className="text-center text-black sm:mb-5 sm:m-4 text-7xl sm:text-start sm:text-9xl">
              Your links <br /> Your Story.
            </h1>
            <p
              className="p-3 mt-2 text-xl text-center sm:mt-10 sm:text-start"
              style={{
                "font-family": "Sour Gummy, serif",
                "font-optical-sizing": "auto",
                "font-weight": 400,
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 100",
                  "fontSize":"22px"
              }}
            >
              Welcome to our platform designed to empower you in the digital
              realm.
              <br /> Curate and showcase your online presence with ease,
              allowing others to explore the depths of your creativity.{" "}
            </p>
            <p className="p-2 mt-2 overflow-hidden text-center rounded-md sm:text-start text-cyan-900 w-fit bg-slate-100 "
             style={{
              "font-family": "Lora, serif",
              "font-optical-sizing": "auto",
              "font-weight": 600,
              "font-style": "normal",
              "fontSize":"20px",
            }}
            >
              Share you portfolio, social media accounts and more only with one
              ~ Link Bee ~ link.
            </p>
            <div className="flex justify-center m-5 sm:justify-start">
              {/* <button className="p-4 m-2 text-2xl text-center text-white bg-blue-500 shadow-2xl text-ellipsis rounded-xl">Demo Page</button> */}
              <button className="p-3 mt-2 font-semibold text-center text-white border-2 shadow-2xl sm:p-4 sm:m-2 sm:mt-16 bg-slate-900 bg-slate-000 rounded-xl"
              style={{
                "font-family": "DynaPuff, serif",
                "font-optical-sizing": "auto",
                "font-weight": 900,
                "fontSize":"28px",
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 100"
              }}
              >
                <Link to="/work">Get Started</Link>
              </button>
            </div>
          </div>
          <div className="pt-10">
            <img src={demo} alt="demo" className="sm:w-[30rem]" />
          </div>
        </div>
      </div>
      <About />
      <Service />
      <Review />
    </div>
  );
};

export default Home;
