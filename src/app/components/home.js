import React from 'react';
import github from '../../../public/github.png'
import linkedin from '../../../public/linkedin.png'
import photo from '../../../public/cr7.png'
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <div className="w-full h-screen bg-black">
                <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-50">
                    <div className="flex">
                        <div className="flex flex-col justify-center items-center">
                            <div className="font-bold text-6xl">
                                Front-End React Developer
                            </div>
                            <div className="text-gray-600 text-lg leading-tight">
                                hi, I'm Min Thant Mg.<span className="ml-1">A</span> Passionate Front-end React Developer based in Yangon,Myanmar.
                            </div>
                            <div className="flex">
                                <div>
                                    <Image src={linkedin} alt="" className="w-8 h-8"/>
                                </div>
                                <div className="sm:ml-4">
                                    <Image src={github} alt="" className="w-8 h-8"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/*<Image src={photo} alt="" />*/}
                        </div>
                    </div>
                    <div className="flex mr-24">
                        <div className="flex justify-start items-start font-bold border-r border-black sm:mr-10 sm:w-32 sm:h-7 sm:mt-4 text-lg">
                            Tech Stack
                        </div>
                        <div>
                            <a href="https://skillicons.dev">
                                <img src="https://skillicons.dev/icons?i=html,css" />
                            </a>
                        </div>
                        <div className="sm:ml-8">
                            <a href="https://skillicons.dev">
                                <img src="https://skillicons.dev/icons?i=js,ts" />
                            </a>
                        </div>
                        <div className="sm:ml-8">
                            <a href="https://skillicons.dev">
                                <img src="https://skillicons.dev/icons?i=react,next" />
                            </a>
                        </div>
                        <div className="sm:ml-8">
                            <a href="https://skillicons.dev">
                                <img src="https://skillicons.dev/icons?i=tailwind,sass" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;