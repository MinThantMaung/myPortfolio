import React from 'react';
import photo from '../../../public/mac.jpg'
import Image from "next/image";

const About = () => {
    return (
        <div>
            <div className="w-full h-screen">
                <div className="flex justify-center items-center w-full h-screen">
                    <div className="sm:ml-64">
                        <Image src={photo} alt="" className="rounded-xl"/>
                    </div>
                    <div className="sm:ml-10">
                        <div className="text-blue-600 font-bold">ABOUT ME</div>
                        <div className="text-[25px] font-bold sm:mt-2">
                            Front-end Developer
                        </div>
                        <div className="text-[25px] font-bold">
                            based in Yangon, Myanmar
                        </div>
                        <div className="text-gray-600 text-[17px] sm:mr-56 sm:mt-4">
                            Hey, my name is Min Thant Mg, and I'm a Frontend Developer. My passion is to create and develop a
                            clean UI/UX for my users.
                        </div>
                        <div className="text-gray-600 text-[17px] sm:mr-60 sm:mt-4">
                            My main stack currently is React/Next.js in combination with Tailwind CSS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;