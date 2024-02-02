'use client'
import React, {useEffect, useState} from 'react';
import githubLight from '../../../public/github_outline_black.svg';
import githubDark from '../../../public/github.png';
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import linkedinLight from '../../../public/linkedin_outline_white.svg';
import linkedinDark from '../../../public/linkedin_outline_black.svg';
import {useRouter} from "next/navigation";


const Home = () => {
    const router = useRouter()
    const gotoLinkedin = () => {
        router.push('https://www.linkedin.com/in/min-thant-2620411b3/')
    }
    const gotoGithub = () => {
        router.push('https://github.com/Minthantmg')
    }
    return (
        <div>
            <div className="w-full h-screen">
                <div
                    className="flex flex-col justify-center items-center sm:w-full w-full h-full sm:h-screen bg-gray-50 dark:bg-dark dark:text-white">
                    <div className="flex">
                        <div className="flex flex-col sm:justify-center sm:items-center">
                            <div className="font-bold sm:text-6xl text-5xl text-center text-black dark:text-white">
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
                                className="text-gray-600 sm:text-lg leading-tight sm:mt-4 dark:text-white text-center text-lg ml-6 mr-6 sm:ml-44 sm:mr-44 mt-4">
                                hi,  I&apos;m Min Thant Mg.<span className="ml-1">A</span> Passionate Front-end React
                                Developer based in Yangon, Myanmar and passionate about crafting seamless user
                                interfaces. From interactive components to top-notch performance, I turn ideas into
                                engaging digital experiences.
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row flex flex-col mt-12 z-0 ml-32 sm:ml-0">
                        <div
                            className="flex sm:justify-start sm:items-start justify-center items-center font-bold text-black dark:text-white sm:border-r border-black dark:border-white mr-0 sm:mr-10 sm:w-32 sm:h-7 sm:mt-4 sm:text-lg text-lg border-b sm:border-b-0 w-32 pb-2 sm:pb-0">
                            Tech Stack
                        </div>
                        <div className="sm:flex mt-6 sm:mt-0 -ml-16 sm:ml-0">
                            <div data-tip="Html,Css" className="tooltip w-1/2">
                                <a href="https://skillicons.dev" aria-label="View HTML and Css icons">
                                    <img src="https://skillicons.dev/icons?i=html,css" alt=""/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2" data-tip="JavaScript,Typescript">
                                <a href="https://skillicons.dev" aria-label="View JavaScript and TypeScript icons">
                                    <img src="https://skillicons.dev/icons?i=js,ts" alt=""/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2 mt-2 sm:mt-0" data-tip="React,Next">
                                <a href="https://skillicons.dev" aria-label="View React and Next icons">
                                    <img src="https://skillicons.dev/icons?i=react,next" alt=""/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2 mt-2 sm:mt-0" data-tip="Tailwind,Sass">
                                <a href="https://skillicons.dev" aria-label="View Tailwind and Sass icons">
                                    <img src="https://skillicons.dev/icons?i=tailwind,sass" alt=""/>
                                </a>
                            </div>
                            <div className="sm:ml-8 tooltip w-1/2 mt-2 sm:mt-0" data-tip="Java,Kotlin">
                                <a href="https://skillicons.dev" aria-label="View Java and Kotlin icons">
                                    <img src="https://skillicons.dev/icons?i=java,kotlin" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:mt-10 mt-10">
                        <div onClick={gotoLinkedin} className="cursor-pointer">
                            <Image src={linkedinDark} alt="" className="w-8 h-8 dark:hidden"/>
                            <Image src={linkedinLight} alt="" className="w-8 h-8 hidden dark:block"/>
                        </div>
                        <div className="sm:ml-6 ml-6 cursor-pointer" onClick={gotoGithub}>
                            <Image src={githubDark} alt="" className="w-8 h-8 dark:hidden"/>
                            <Image src={githubLight} alt="" className="w-8 h-8 hidden dark:block"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;