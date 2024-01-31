'use client'
import React from 'react';
import github from '../../../public/github.png'
import linkedin from '../../../public/linkedin.png'
import photo from '../../../public/cr7.png'
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";

const Home = () => {
    return (
        <div>
            <div className="w-full h-screen bg-black">
                <div className="flex flex-col justify-center items-center sm:w-full w-full h-full sm:h-screen bg-gray-50">
                    <div className="flex">
                        <div className="flex flex-col justify-center items-center">
                            <div className="font-bold sm:text-6xl">
                                <span className="sm:mr-4">I am</span>
                                <TypeAnimation
                                    sequence={[
                                        'Front-End Developer',
                                        1000,
                                        'React Developer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    repeat={Infinity}
                                />

                            </div>
                            <div className="text-gray-600 sm:text-lg leading-tight sm:mt-4">
                                hi, I'm Min Thant Mg.<span className="ml-1">A</span> Passionate Front-end React
                                Developer based in Yangon, Myanmar.
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-12 z-0">
                        <div
                            className="flex justify-start items-start font-bold border-r border-black mr-0 sm:mr-10 sm:w-32 sm:h-7 sm:mt-4 sm:text-lg">
                            Tech Stack
                        </div>
                        <div>
                            <div data-tip="Html,Css" className="tooltip">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=html,css"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip" data-tip="JavaScript,Typescript">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=js,ts"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip" data-tip="React,Next">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=react,next"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip" data-tip="Tailwind,Sass">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=tailwind,sass"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip" data-tip="Java,Kotlin">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=java,kotlin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:mt-10">
                        <div>
                            <Image src={linkedin} alt="" className="w-8 h-8"/>
                        </div>
                        <div className="sm:ml-6">
                            <Image src={github} alt="" className="w-8 h-8"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;