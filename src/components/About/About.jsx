// import React from 'react'
import Card from "../Card/Card";
import card1 from "../../assets/about1.webp";
import card2 from "../../assets/about2.webp";
import card3 from "../../assets/about3.webp";
const About = () => {
  return (
    <div className="flex justify-center w-full mt-10 align-middle sm:mt-0 bg-slate-200">
      <div className="flex-col justify-center w-full p-2 pt-3 mt-10 text-center align-middle sm:w-2/3 sm:mb-20 mb:10 sm:pt-0 sm:mt-20 ">
        <div>
          <h1
            className="text-5xl sm:text-8xl"
            style={{
              "font-family": "Mouse Memoirs,serif",
              "font-weight": 400,
              "font-style": "normal",
            }}
          >
            Unlock the Potential of
            <br />
            Your Online Reach
          </h1>
        </div>
        <div className="flex flex-col justify-between mt-2 align-middle sm:flex-row sm:mt-10">
          <div className="flex justify-center p-10 align-middle">
            <Card
              heading="Showcase"
              card={card1}
              content="We believe in the power of showcasing your unique talents, passions, and achievements to the world."
            />
          </div>
          <div className="flex justify-center p-10">
            <Card
              heading="
Engage"
              card={card2}
              content="We understand the importance of actively engaging with your audience and building meaningful connections."
            />
          </div>
          <div className="flex justify-center p-10">
            <Card
              heading="Refine"
              card={card3}
              content="We provide a variety of resources and techniques to help you refine your online presence and make it more effective. "
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default About;
