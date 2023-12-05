import React from 'react'
import './Navbar.css'
import '../../fonts/Gumela Regular.otf'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name">Nagaraj</div>
            </div>

            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>

                        <li>
                            <Link spy={true} to='Navbar' smoot={true} activeClass='active'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link spy={true} to='services' smoot={true} >
                                Services
                            </Link>
                        </li>



                        <li>
                            <Link spy={true} to='experience' smoot={true} >
                                Experience
                            </Link>
                        </li>


                        <li>
                            <Link spy={true} to='portfolio' smoot={true} >
                                Portfolio
                            </Link>
                        </li>


                        <li>
                            <Link spy={true} to='gallery' smoot={true} >
                                Gallery
                            </Link>

                        </li>



                    </ul>

                </div>
                <li>
                    <Link spy={true} to='contact-form' smoot={true} >
                        <button className="button n-button">Contact me </button>

                    </Link>

                

                </li>
            </div>
        </div >
    );
};


export default Navbar;