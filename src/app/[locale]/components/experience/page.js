import React from 'react';
import Image from "next/image";
import mark from '../../../../../public/mark.png'
import success from '../../../../../public/success.png'

const Experience = () => {
    return (
        <div>
            <div
                className="flex justify-center w-full h-full bg-white dark:bg-dark dark:text-white md:pl-4 md:pr-4 sm:pb-10">
                <div className="w-full max-w-5xl">
                    <div
                        className="font-bold text-blue-600 sm:pt-40 pt-20 pr-2 pl-4 sm:pl-0 sm:ml-0 sm:mr-0 bg-white dark:bg-dark">
                        Skills
                    </div>
                    <div
                        className="font-bold text-2xl pl-4 sm:pl-0 pr-2 sm:ml-0 sm:mr-0 pt-2 sm:mt-0 text-black dark:text-white bg-white dark:bg-dark">
                        Technologies I&apos;ve worked with
                    </div>
                    <div className="mt-6 sm:mt-16 pl-4 pr-4 sm:pl-0 sm:pr-0 grid sm:grid-cols-3 grid-cols-1 gap-6">
                        <div>
                            <div className="flex flex-col justify-center items-center fade-in-left">
                                <div className="text-blue-500 font-bold">
                                    FrontEnd
                                </div>
                                <div className="grid grid-cols-2 gap-4 sm:mt-16 mt-10">
                                    <div className="flex">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                React
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:ml-6 ml-6">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                NextJS
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                HTML
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:ml-6 ml-6 sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                CSS
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                Tailwind
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:ml-6 sm:mt-2 mt-2 ml-6">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                JavaScript
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                TypeScript
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Basic
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:ml-6 ml-6 sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                Sass
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Intermediate
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center sm:ml-4 mt-2 sm:mt-0">
                            <div className="text-blue-500 font-bold">
                                BackEnd
                            </div>
                            <div className="grid grid-cols-2 gap-4 sm:mt-16 mt-10">
                                <div className="flex">
                                    <div>
                                        <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                        <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                    </div>
                                    <div className="sm:ml-2 ml-3">
                                        <div className="font-bold text-lg">
                                            NodeJS
                                        </div>
                                        <div className="text-gray-200 text-xs">
                                            Basic
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:ml-6 ml-6">
                                    <div>
                                        <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                        <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                    </div>
                                    <div className="sm:ml-2 ml-3">
                                        <div className="font-bold text-lg">
                                            ExpressJS
                                        </div>
                                        <div className="text-gray-200 text-xs">
                                            Basic
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:mt-2 mt-2">
                                    <div>
                                        <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                        <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                    </div>
                                    <div className="sm:ml-2 ml-3">
                                        <div className="font-bold text-lg">
                                            MongoDB
                                        </div>
                                        <div className="text-gray-200 text-xs">
                                            Intermediate
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:ml-6 ml-6 sm:mt-2 mt-2">
                                    <div>
                                        <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                        <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                    </div>
                                    <div className="sm:ml-2 ml-3">
                                        <div className="font-bold text-lg">
                                            MySQL
                                        </div>
                                        <div className="text-gray-200 text-xs">
                                            Intermediate
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:mt-2 mt-2">
                                    <div>
                                        <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                        <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                    </div>
                                    <div className="sm:ml-2 ml-3">
                                        <div className="font-bold text-lg">
                                            Java
                                        </div>
                                        <div className="text-gray-200 text-xs">
                                            Advanced
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:ml-6 ml-6 sm:mt-2 mt-2">
                                    <div>
                                        <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                        <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                    </div>
                                    <div className="sm:ml-2 ml-3">
                                        <div className="font-bold text-lg">
                                            Kotlin
                                        </div>
                                        <div className="text-gray-200 text-xs">
                                            Advanced
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:mt-2 mt-2">
                                    <div>
                                        <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                        <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                    </div>
                                    <div className="sm:ml-2 ml-3">
                                        <div className="font-bold text-lg">
                                            SpringBoot
                                        </div>
                                        <div className="text-gray-200 text-xs">
                                            Intermediate
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-center sm:ml-4 mt-2 sm:mt-0 fade-in">
                                <div className="text-blue-500 font-bold">
                                    Tools
                                </div>
                                <div className="grid grid-cols-2 gap-4 sm:mt-16 mt-10">
                                    <div className="flex">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                PostMan
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:ml-6 ml-6">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                Docker
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Intermediate
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                Git
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:ml-6 ml-6 sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                VSCode
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Intermediate
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                MacOs
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:ml-6 ml-6 sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                Webstorm
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Advanced
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:mt-2 mt-2">
                                        <div>
                                            <Image src={mark} alt="" className="w-6 h-6 dark:hidden"/>
                                            <Image src={success} alt="" className="w-6 h-6 hidden dark:block"/>
                                        </div>
                                        <div className="sm:ml-2 ml-3">
                                            <div className="font-bold text-lg">
                                                Vercel
                                            </div>
                                            <div className="text-gray-200 text-xs">
                                                Intermediate
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;