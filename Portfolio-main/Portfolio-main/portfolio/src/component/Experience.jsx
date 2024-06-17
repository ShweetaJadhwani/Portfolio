import React from 'react';

import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import github from "../assets/github.png";
import java from "../assets/java.jpg";
import javaScript from "../assets/javascript.png";
import react from "../assets/React.png";
import talwind from "../assets/talwind.jpg";
import python from "../assets/python.jpg";

const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id:4,
            src:java,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id:5,
            src:javaScript,
            title: 'HTML',
            style: 'shadow-yellow-500'
        },
        {
            id:6,
            src:react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id:7,
            src:talwind,
            title: 'Talwind',
            style: 'shadow-sky-500'
        },
        {
            id:8,
            src:python,
            title: 'Python',
            style: 'shadow-orange-500'
        },
    ]

  return (
    <div name="experience" 
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worded with</p>
            </div>

            <div className='w-full grid grid-cols-4 sm:gird-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  );
}

export default Experience;
