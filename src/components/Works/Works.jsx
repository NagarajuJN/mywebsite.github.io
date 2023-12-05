import React from 'react'
import './Works.css'



// import {Link} from 'react-scroll'
import { motion } from "framer-motion";

import Pentagon from '../../img/pentagon.png'

import Anudip from '../../img/anudip.png'
import DesiQnA from '../../img/desiQnA.png'
import Free from '../../img/free.png'

export const Works = () => {
    return (
        <div className='works'>

            {/* left side*/}
            <div className="w-left">

            <div className="awesome">
                <span>Works for all these</span>
                <span>Brands & Clients</span>

                <spane>
                    Senior Java Full Stack  Trainer <br /> @ Anudip Foundation --- Oct 2023 - Current Work <br />Bangalore-India.

                    <br /><br />
                    Full Stack Technical Trainer <br />@
                    Pentagon Space ---
                    Oct 2021 - Oct 2023  <br />Bangalore- India
                    <br></br> <br />
                    Software Development Engineer Intern <br /> @
                    DesiQnA --- May 2023 - Sep 2023  <br />Remote - India.
                    <br></br> <b></b> <br />
                    Freelancer<br /> @ Honeydewz Software Technologies 
                    <br />Sep 2023 - Oct 2023 <br /> Bangalore- India.
                </spane>

            </div>
        </div>

            {/* right side*/}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 4, type: "spring" }}
                    className="w-mainCircle" >      
                    
                    
                    <div className="w-secCircle">
                    <a href='https://www.anudip.org/'>
                            <img src={Anudip} alt="" />
                            </a>
                        </div>
                        <div className="w-secCircle">
                        <a href='https://pentagonspace.in/'>
                            <img src={Pentagon} alt="" />
                            
                        </a>
                        </div>
                        {" "}
                        <div className="w-secCircle">
                        <a href='https://honeydewz.com/'>                       
                            <img src={Free} alt="" />
                            </a>
                        </div>
                        
                        <div className="w-secCircle">
                        <a href="https://www.desiqna.in/">

                            <img src={DesiQnA} alt="" />
                            </a>
                        </div>
                        
                        </motion.div>
    

                        {/* background cricles*/}
                        <div className="w-backCircle blueCircle"></div>
                        <div className="w-backCircle yellowCricle"></div>
                    </div>
            </div>
            );
}
            export default Works;
