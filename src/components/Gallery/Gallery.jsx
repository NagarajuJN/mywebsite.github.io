import React from 'react'

import './Gallery.css'


import P1 from '../../img/p1.png';
import P2 from '../../img/p2.png';

import P3 from '../../img/p3.png';
import P33 from '../../img/p33.png';

import P4 from '../../img/p4.png';
import P5 from '../../img/p5.png';
import P6 from '../../img/p6.png';
import P7 from '../../img/p7.png';
import P8 from '../../img/p8.png';


export const Gallery = () => {
    return (
        <div className="gallery">
            {/* heading*/}
            <span>Gallery </span> <br /><br />
            <span>My Training Session Photes</span>


                <div>
                    <img src={P1} alt="" />
                
                    <img src={P3} alt="" />
                
                    <img src={P4} alt="" />
                    <br /><br /><br /><br />
               
                    <img src={P33} alt="" />
               
                    <img src={P5} alt="" />
                    <img src={P7} alt="" />
                    <img src={P6} alt="" />
                    <img src={P2} alt="" />
                    <img src={P8} alt="" />
                    
                    </div>

        </div>
    )
}

export default Gallery;