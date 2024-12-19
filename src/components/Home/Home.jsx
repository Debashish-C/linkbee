
import About from "../About/About";
import Contact from "../Contact/Contact";
import Service from "../Services/Service";
import demo from "../../assets/Demo.webp"
import Review from "../Review/Review";
import { Link } from "react-router";
const Home = () => {
  return (
    <>
    
      <div className="flex justify-around h-full mt-32 align-middle ">
        <div className="flex-col mt-10">
          <h1 className="m-4 mb-5 font-mono font-bold text-black text-8xl">
            Your links <br /> Your Story.
          </h1>
          <p className="p-3 mt-10 text-xl">
            Welcome to our platform designed to empower you in the digital
            realm.<br/>  Curate and showcase your online presence with ease, allowing
            others to explore the depths of your creativity.{" "}
          </p>
          <p className="p-2 mt-2 overflow-hidden font-mono rounded-md w-fit bg-slate-100 ">
            Share you portfolio, social media accounts and more only with one ~
            Link Bee ~ link.
          </p>
          <div className="flex justify-start m-5">
            {/* <button className="p-4 m-2 text-2xl text-center text-white bg-blue-500 shadow-2xl text-ellipsis rounded-xl">Demo Page</button> */}
            <button className="p-4 m-2 mt-16 font-mono text-2xl font-bold text-center text-white shadow-2xl bg-slate-600 rounded-xl"><Link to="/work">Get Started</Link></button>
          </div>
        </div>
        <div>
          <img src={demo} alt="demo" className="w-96"/>
        </div>
      </div>
      <About />
      <Service />
      <Review />
    </>
  );
};

export default Home;
