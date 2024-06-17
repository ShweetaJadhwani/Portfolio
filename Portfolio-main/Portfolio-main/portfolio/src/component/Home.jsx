import React from 'react';
import profile from "../assets/prof_pic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md" 
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-2xl sm:text-7xl font-bold inline border-b-4  border-gray-500 text-white'>Shweeta jadhwani</h2> <br/>
                <h2 className='text-4xl sm:text-3xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md '>I have 1 year of experience building and desigining software.
                Currently, I love to work on web application using technologies  like
                React, Tailwind, Nodejs and MongoDB</p>

                <div>
                    <Link to='portfolio' smooth duration={500}
                    className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> 
                        </span> 
                    </Link>
                </div> 
            </div>
            <div>
                <img src={profile }  alt="myPtofile" className='rounded-4xl h-full mx-auto w-2/3 md:w-full '/>
            </div>
        </div>
    </div>
  );
}

export default Home;
