import About from "../About/About";
// import Contact from "../Contact/Contact";
import Service from "../Services/Service";
import demo from "../../assets/Demo.webp";
import Review from "../Review/Review";
import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-10 align-middle ">
        <div
          className="flex justify-around h-full mt-32 align-middle max-w-screen-2xl"
          style={{
            "font-family": "Mouse Memoirs,serif",
            "font-weight": 400,
            "font-style": "normal",
          }}
        >
          <div className="flex-col mt-10 ">
            <h1 className="m-4 mb-5 text-black f text-9xl">
              Your links <br /> Your Story.
            </h1>
            <p
              className="p-3 mt-10 "
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
            <p className="p-2 mt-2 overflow-hidden rounded-md text-cyan-900 w-fit bg-slate-100 "
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
            <div className="flex justify-start m-5">
              {/* <button className="p-4 m-2 text-2xl text-center text-white bg-blue-500 shadow-2xl text-ellipsis rounded-xl">Demo Page</button> */}
              <button className="p-4 m-2 mt-16 font-semibold text-center text-white border-2 shadow-2xl bg-slate-900 bg-slate-000 rounded-xl"
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
            <img src={demo} alt="demo" className="w-96" />
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
