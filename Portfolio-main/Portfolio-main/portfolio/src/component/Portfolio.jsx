import React from 'react';

import calculator from "../assets/portfolio/cgpaCalcu.jpg";
import resturant from "../assets/portfolio/resturant.png";
import voter from "../assets/portfolio/voter.jpg";
import Food from "../assets/portfolio/Food.jpg";
import Coffee from "../assets/portfolio/Coffee.jpg";

const Portfolio = () => {

    const profiles=[
        {
            id: 1,
            src: calculator,
            proN: 'CGPA Calculator'
        },
        {
            id: 2,
            src: resturant,
            proN: 'Resturant Managment System'
        },
        {
            id: 3,
            src: voter,
            proN: 'Voter Data Entry'
        },
        {
            id: 4,
            src: Food,
            proN: 'Food Website'
        },
        {
            id: 5,
            src: Coffee,
            proN: 'Coffee cafe'
        },
        
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0'>

                {profiles.map(({id,src, proN}) =>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <p className='  px-4 py-3 font-bold duration-200 hover:scale-105'>{proN}</p>
                            {/* <button className='w-1/2  px-4 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  );
}

export default Portfolio;
