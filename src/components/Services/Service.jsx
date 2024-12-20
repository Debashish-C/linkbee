import servicejpg from "../../assets/meeting.webp";
import { Link } from "react-router";
// import Preview from "../Preview/Preview";
import worldImg from "../../assets/world.jpg";
const Service = () => {
  return (
    <>
      <div className="flex justify-center mt-12 align-middle sm:mt-0">
        <div className="flex flex-col justify-center w-4/5 align-middle lg:flex-row sm:w-2/3">
          <div className="flex-col pt-10 sm:pt-28">
                <div className="">
                  <h1
                    className="pb-5 text-6xl text-center sm:text-start"
                    style={{
                      "font-family": "Mouse Memoirs,serif",
                      "font-weight": 400,
                      "font-style": "normal",
                    }}
                  >
                    Services
                  </h1>
                </div>
                <div className="">
                  <p
                    className="text-[22px] text-center  sm:text-[24px] sm:text-start"
                    style={{
                      "font-family": "Lora, serif",
                      "font-optical-sizing": "auto",
                      "font-weight": 600,
                      "font-style": "normal",
                      // fontSize: "24px",
                    }}
                  >
                    Our platform offers seamless integration of various links into
                    your centralized profile page. Whether you want to share your
                    portfolio, blog, social media profiles, or any other online
                    content
                    <button className="pl-2 pr-2 text-blue-700 ">
                      <Link to="/services">more..</Link>
                    </button>
                  </p>
                </div>
                <div className="flex justify-center align-middle sm:justify-start">
                  <button
                    className="p-3 m-2 mt-2 border-2 border-black shadow-2xl text-xl sm:text-[24px] sm:mt-8 border-spacing-40 bg-gray-000 rounded-xl"
                    style={{
                      "font-family": "DynaPuff, serif",
                      "font-optical-sizing": "auto",
                      "font-weight": 900,
                      // fontSize: "24px",
                      "font-style": "normal",
                      "font-variation-settings": "wdth 100",
                    }}
                  >
                    Know More
                  </button>
                </div>
            </div>
            <div className="">
              <img src={servicejpg} alt="img" className="" />
            </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col-reverse justify-around w-4/5 mt-10 align-middle sm:w-2/3 lg:flex-row text-start">
          <img src={worldImg} alt="worldimg" className="w-full mr-10 sm:w-2/3" />
          <div className="pt-10">
            <h1
              className="mb-5 text-6xl text-center sm:text-start"
              style={{
                "font-family": "Mouse Memoirs,serif",
                "font-weight": 400,
                "font-style": "normal",
              }}
            >
              Reach out to everyone
              <br /> with one link
            </h1>
            <p
              className="mt-2 text-center sm:text-start text-[22px] sm:text-[24px]"
              style={{
                "font-family": "Lora, serif",
                "font-optical-sizing": "auto",
                "font-weight": 600,
                "font-style": "normal",
                // fontSize: "24px",
              }}
            >
              With a single link, you can showcase your portfolio, share your
              social media accounts, promote your blog, and more
            </p>
            <div className="flex justify-center align-middle sm:justify-start">

            <button
              className="p-3 m-2 mt-5 border-2 border-black shadow-2xl rounded-xl"
              style={{
                "font-family": "DynaPuff, serif",
                "font-optical-sizing": "auto",
                "font-weight": 900,
                fontSize: "20px",
                "font-style": "normal",
                "font-variation-settings": "wdth 100",
              }}
            >
              Share your Profile
            </button>

            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full mt-4">
        <Preview />
      </div> */}

      {/* </div> */}
    </>
  );
};

export default Service;
