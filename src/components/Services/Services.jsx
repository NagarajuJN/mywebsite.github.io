import React from 'react'
import './Services.css'
import { motion } from 'framer-motion';


import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './Nagaraju JN -Resume .pdf'

export const Services = () => {


  // transition
  const transition = {
    duration: 3,
    type: "spring",
  };
  return (
    <div className='services' id ='Services '>

      {/* left side*/}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>

        <spane>
          In my professional capacity, I hold a position as a
          Senior Java full-stack trainer,<br />
          where I am responsible for imparting comprehensive
          training in <br /> all aspects of full-stack development. <br /> <br />
          Simultaneously, I engage in freelancing endeavors,<br />
          taking on diverse projects that allow me to <br />
          apply my expertise in developing solutions across <br />
          various platforms and technologies. <br />
          <br /> Additionally, I actively work as a developer,<br />
          leveraging my skills and knowledge to contribute effectively <br />
          to projects and deliver high-quality solutions."
        </spane>
        <br></br>

        <a href={Resume} download>
          <button className='button s-button'>Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "rgb(238 210 255)" }}></div>

      </div>


      {/* right side*/}
      <div className="cards" >


        <motion.div initial={{ left: "20rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Trainer'}
            detail={"Java, Hibernate, Spring, JavaScript, Angular, Python"}

          />

        </motion.div>

        {/* second card*/}


        <motion.div initial={{ top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"Opps,J2EE, HTML,CSS,SpringBoot, ReactJs,Oracle/MySQL"}
          />
        </motion.div>


        {/* <div style={{ top: '19rem',left:'12rem' }}> */}
        <motion.div initial={{ top: "17rem" }}
          whileInView={{ left: "13rem"}}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'Freelancer'}
            detail={"Database deginer , Web Development"}
          />
        </motion.div>

      </div>
      <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

    </div>
    
  )
}

export default Services;