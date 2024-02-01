'use client'
import React from 'react';
import github from '../../../public/githu_outline_black.svg'
import linkedin from '../../../public/linkedin_outline_black.svg'
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";

const Home = () => {
    return (
        <div>
            <div className="w-full h-screen">
                <div
                    className="flex flex-col justify-center items-center sm:w-full w-full h-full sm:h-screen bg-gray-50 dark:bg-dark dark:text-white">
                    <div className="flex">
                        <div className="flex flex-col sm:justify-center sm:items-center">
                            <div className="font-bold sm:text-6xl text-5xl text-center">
                                <span className="sm:mr-4 mr-4">I am</span>
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
                            <div
                                className="text-gray-600 sm:text-lg leading-tight sm:mt-4 dark:text-white text-center text-lg ml-4 mr-4 sm:ml-0 sm:mr-0 mt-4">
                                hi, I'm Min Thant Mg.<span className="ml-1">A</span> Passionate Front-end React
                                Developer based in Yangon, Myanmar.
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row flex flex-col mt-12 z-0 ml-32 sm:ml-0">
                        <div
                            className="flex sm:justify-start sm:items-start justify-center items-center font-bold sm:border-r border-black dark:border-white mr-0 sm:mr-10 sm:w-32 sm:h-7 sm:mt-4 sm:text-lg text-lg border-b sm:border-b-0 w-32 pb-2 sm:pb-0">
                            Tech Stack
                        </div>
                        <div className="sm:flex mt-6 sm:mt-0 -ml-16 sm:ml-0">
                            <div data-tip="Html,Css" className="tooltip w-1/2">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=html,css"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2" data-tip="JavaScript,Typescript">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=js,ts"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2 mt-2 sm:mt-0" data-tip="React,Next">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=react,next"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2 mt-2 sm:mt-0" data-tip="Tailwind,Sass">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=tailwind,sass"/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2 mt-2 sm:mt-0" data-tip="Java,Kotlin">
                                <a href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=java,kotlin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:mt-10 mt-10">
                        <div>
                            <Image src={linkedin} alt="" className="w-8 h-8"/>
                        </div>
                        <div className="sm:ml-6 ml-6">
                            <Image src={github} alt="" className="w-8 h-8 dark:outline-white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;