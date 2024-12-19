import servicejpg from "../../assets/meeting.webp";
import { Link } from "react-router";
// import Preview from "../Preview/Preview";
import worldImg from "../../assets/world.jpg"
const Service = () => {
  return (
    <div className="">
    <div className="flex justify-center align-middle">
    <div className="flex align-middle max-w-screen-2xl justify-evenly">
        <div className="flex-col pt-40">
          <div className="">
          <h1 className="pb-5 font-mono text-4xl font-bold">Services</h1>
          </div>
            <div className="">
          <p className="font-serif text-2xl">
            Our platform offers seamless integration of various links into your
            centralized profile page. Whether you want to share your portfolio,
            blog, social media profiles, or any other online content
            <button className="pl-2 pr-2 text-blue-700 ">
              <Link to="/services">more..</Link>
            </button>
          </p>
            </div>
            <div className="">
              <button className="p-4 m-2 mt-5 font-bold text-white bg-gray-500 shadow-2xl rounded-xl">Know More</button>
            </div>
        </div>
        <div className="">
        <img src={servicejpg} alt="img" className=""/>
        </div>
      </div>
      </div>
      <div className="flex justify-center">

     
      <div className="flex justify-around mt-10 align-middle text-start max-w-screen-2xl">
        <img src={worldImg} alt="worldimg" className="w-2/3 mr-10"/>
        <div className="pt-36">
          <h1 className="mb-5 font-mono text-4xl font-bold">
            Reach out to everyone
            <br /> with one link
          </h1>
          <p className="mt-2 font-serif text-2xl">With a single link, you can showcase your portfolio, share your social media accounts, promote your blog, and more</p>
          <button className="p-3 m-2 mt-5 font-bold text-white shadow-2xl bg-slate-500 rounded-xl">Share your Profile</button>
        </div>
      </div>
      </div>
      {/* <div className="w-full mt-4">
        <Preview />
      </div> */}
        
    {/* </div> */}
    </div>
  );
};

export default Service;
