'use client'
import React, {useEffect, useState} from 'react';
import githubLight from '../../../../../public/github_outline_black.svg';
import githubDark from '../../../../../public/github.png';
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import linkedinLight from '../../../../../public/linkedin_outline_white.svg';
import linkedinDark from '../../../../../public/linkedin_outline_black.svg';
import {useRouter} from "next/navigation";
import {useTranslations} from 'next-intl';

const Home = () => {
    const router = useRouter()
    const t = useTranslations('Index');
    const gotoLinkedin = () => {
        router.push('https://www.linkedin.com/in/min-thant-mg-2620411b3/')
    }
    const gotoGithub = () => {
        router.push('https://github.com/Minthantmg')
    }
    const cvUrl = 'https://drive.google.com/file/d/16lagJ5ziKp5gL-CLiFIXcGJxmGd6yYUA/view';

    const downloadResume = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        aTag.click()
        aTag.remove()
    }
    return (
        <div>
            <div className="w-full h-full">
                <div
                    className="flex flex-col justify-center items-center sm:w-full w-full h-full sm:h-screen bg-white dark:bg-dark dark:text-white pb-10 sm:pb-0">
                    <div className="flex">
                        <div className="flex flex-col sm:justify-center sm:items-center">
                            <div
                                className="flex flex-col sm:flex-row font-bold text-center text-black dark:text-white pt-20 sm:pt-0">
                                <span className="mb-4 sm:mb-0 text-6xl">I am</span>
                                <div className="text-6xl ml-4">
                                    <TypeAnimation
                                        sequence={[
                                            'Front-End Developer',
                                            1000,
                                            'React Developer',
                                            1000,
                                            'Next.js Developer',
                                            1000,
                                            'Web Developer',
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        repeat={Infinity}
                                    />
                                </div>
                            </div>
                            <div
                                className="text-gray-600 sm:text-lg leading-tight sm:mt-4 dark:text-white text-center text-lg ml-6 mr-6 sm:ml-44 sm:mr-44 mt-4">
                                {t('home_detail')}
                            </div>
                            <div
                                className="text-gray-600 sm:text-lg leading-tight sm:mt-4 dark:text-white text-center text-lg ml-6 mr-6 sm:ml-44 sm:mr-44 mt-4"
                            >
                                If you want to learn more about me, <span onClick={() => {
                                downloadResume(cvUrl)
                            }} className="underline hover:text-blue-500 cursor-pointer">click here</span>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row flex flex-col justify-center items-center mt-12 z-0">
                        <div
                            className="flex sm:justify-start sm:items-start justify-center items-center font-bold text-black dark:text-white sm:border-r border-black dark:border-white mr-0 sm:mr-10 sm:w-32 sm:h-7 sm:mt-4 sm:text-lg text-lg border-b sm:border-b-0 w-32 pb-2 sm:pb-0">
                            Tech Stack
                        </div>
                        <div className="sm:flex-row flex justify-around items-center mt-12 sm:mt-4">
                            <div className="sm:flex-row flex flex-col w-1/2 sm:mr-4 mr-0">
                                <div data-tip="Html,Css" className="sm:ml-4 ml-4 tooltip">
                                    <a href="https://skillicons.dev" aria-label="View HTML and Css icons">
                                        <img src="https://skillicons.dev/icons?i=html,css" alt=""/>
                                    </a>
                                </div>
                                <div className="tooltip mt-6 sm:mt-0 sm:ml-4 ml-4" data-tip="JavaScript,Typescript">
                                    <a href="https://skillicons.dev" aria-label="View JavaScript and TypeScript icons">
                                        <img src="https://skillicons.dev/icons?i=js,ts" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="sm:flex-row flex flex-col w-1/2 ml-12 sm:ml-0">
                                <div className="tooltip sm:ml-4 ml-4" data-tip="React,Next">
                                    <a href="https://skillicons.dev" aria-label="View React and Next icons">
                                        <img src="https://skillicons.dev/icons?i=react,next" alt=""/>
                                    </a>
                                </div>
                                <div className="tooltip mt-6 sm:mt-0 sm:ml-4 ml-4" data-tip="Tailwind,Sass">
                                    <a href="https://skillicons.dev" aria-label="View Tailwind and Sass icons">
                                        <img src="https://skillicons.dev/icons?i=tailwind,sass" alt=""/>
                                    </a>
                                </div>
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