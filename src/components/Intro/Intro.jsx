import React from 'react'
import './Intro.css'
import '../../fonts/Gumela Regular.otf'
import Github from '../../img/github.png'

import LinkedIn from '../../img/linkedin.png'

import Instagram from '../../img/instagram.png'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


export const Intro = () => {

    const transition = { duration: 3, type: 'spring' }
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy!! I Am  </span>
                    <span>Nagaraju J N</span>
                    <span>  Senior Java Full Stack Technical Trainer
                        with very good experience in Full Stack triaing
                        and software development
                    </span>
                </div>

                <Link spy={true} to='experience' smoot={true} >

                <button className='button i-button'>Hire me</button>
                </Link>

                <div className="i-icons">
                    <a href='https://github.com/NagarajuJN'>
                        <img src={Github} alt="" />

                    </a>
                    <a href='https://www.linkedin.com/in/nagaraju-j-n-719249208/'>
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href='https://instagram.com/punith_nagaraj17?igshid=YTQwZjQ0NmI0OA=='>
                        <img src={Instagram} alt="" />
                    </a>
                </div>

            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-40%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={glassesimoji} alt="" />


                <motion.div

                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}

                    style={{ top: '-1%', left: '65%' }}>
                    <FloatingDiv image={Crown} txt1='Full Stack' txt2='Trainer' />
                </motion.div>

                <motion.div
                    initial={{ left: '-40%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Trainer' txt2='Award' />
                </motion.div>

                {/* blur divs */}

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#c1f5ee',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>

            </div>

        </div>
    )
}
export default Intro;
