import React from 'react'
import Card from '../Card/Card'
import card1 from "../../assets/about1.webp"
import card2 from "../../assets/about2.webp"
import card3 from "../../assets/about3.webp"
const About = () => {
  return (
    <>
    <div className='flex-col justify-center w-full p-2 pt-10 mt-20 mb-40 text-center align-middle bg-slate-200'>
      <div>
        <h1 className='text-4xl font-bold md:text-6xl'>Unlock the Potential of<br/>
        Your Online Reach</h1>
      </div>
      <div className='flex justify-center mt-10 align-middle md:flex sm:flex'>
        <div className="flex justify-center p-10">
        <Card heading="Showcase"  card={card1}
content="We believe in the power of showcasing your unique talents, passions, and achievements to the world." />
        </div>
        <div className="flex justify-center p-10">
        <Card heading="
Engage" card={card2}
        content="We understand the importance of actively engaging with your audience and building meaningful connections." />
        </div><div className="flex justify-center p-10">
        <Card heading="Refine"  card={card3}
        content="We provide a variety of resources and techniques to help you refine your online presence and make it more effective. "/>
      </div>
      </div>
    </div>
    </>
  )
}

export default About
 