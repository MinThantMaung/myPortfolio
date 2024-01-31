'use client'
import React from 'react';
import Image from "next/image";
import github from '../../../public/githubg_fullbg.png'
import popup from '../../../public/popup.svg'
import coin from '../../../public/coindom.png'
import yts from '../../../public/yts_01.png'
import product from '../../../public/productvity.png'
import {useRouter} from "next/navigation";

const Projects = () => {
    const router = useRouter()
    const gotoGithub = () => {
        router.push('https://github.com/Minthantmg/CoinBase');
    };

    const gotoWebsite = () => {
        router.push('https://coin-base-live-market.vercel.app/');
    };

    const gotoProductlyWebsite = () => {
        router.push('https://productly-landing-page-eta.vercel.app/');
    };
    const gotoProductlyGithub = () => {
        router.push('https://github.com/Minthantmg/productivityLandingPage/');
    };
    return (
        <div>
            <div className="flex justify-center w-full h-full bg-white">
                <div className="w-full max-w-5xl">
                    <div className="font-bold text-blue-600 sm:pt-28">
                        PROJECTS
                    </div>
                    <div className="font-bold text-2xl">
                        Each project is a unique piece of development
                    </div>
                    <div className="shadow-lg rounded-lg flex pb-4 pt-4 pl-4 mt-12">
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl">
                            <Image src={coin} alt="" className="rounded-lg transform transition-transform group-hover:translate-y-[-1000px] duration-[8000ms]"/>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center sm:w-1/2">
                            <div className="font-bold text-xl">
                                Coinbase
                            </div>
                            <div className="mt-4 text-lg ml-20 mr-20 text-gray-600">
                                Coinbase is a crypto website that allows users to search for information about various cryptocurrencies in real-time.
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-ghost p-3">
                                    React
                                </div>
                                <div className="font-bold text-lg ml-4 badge badge-ghost p-3">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoGithub}>
                                    Code <Image src={github} alt="" className="w-7 h-7 ml-1"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer" onClick={gotoWebsite}>
                                    Live Demo <Image src={popup} alt="" className="w-7 h-7 ml-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg flex pb-4 pt-4 pl-4 pr-4 mt-12">
                        <div className="flex flex-col justify-center items-center text-center sm:w-1/2">
                            <div className="font-bold text-xl">
                                Productly
                            </div>
                            <div className="mt-4 text-lg ml-20 mr-20 text-gray-600">
                                Productly is a landing page for a productivity app that helps users organize their tasks, manage their time, and achieve their goals.
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-ghost p-3">
                                    React
                                </div>
                                <div className="font-bold text-lg ml-4 badge badge-ghost p-3">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoProductlyGithub}>
                                    Code <Image src={github} alt="" className="w-7 h-7 ml-1"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer" onClick={gotoProductlyWebsite}>
                                    Live Demo <Image src={popup} alt="" className="w-7 h-7 ml-1"/>
                                </div>
                            </div>
                        </div>
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl">
                            <Image src={product} alt="" className="rounded-lg transform transition-transform group-hover:translate-y-[-1520px] duration-[8000ms]"/>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg flex pb-4 pt-4 pl-4 mt-12">
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl">
                            <Image src={yts} alt="" className="rounded-lg transform transition-transform group-hover:translate-y-[-190px] duration-[8000ms]"/>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center sm:w-1/2">
                            <div className="font-bold text-xl">
                                YTS
                            </div>
                            <div className="mt-4 text-lg ml-20 mr-20 text-gray-600">
                                YTS allows users to download free movies in high quality and small file sizes. The website has a simple and user-friendly interface, with categories such as popular downloads, latest movies, upcoming movies, and genres. Users can also search for movies by title, year, rating, or quality.
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-ghost p-3">
                                    React
                                </div>
                                <div className="font-bold text-lg ml-4 badge badge-ghost p-3">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoGithub}>
                                    Code <Image src={github} alt="" className="w-7 h-7 ml-1"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer" onClick={gotoWebsite}>
                                    Live Demo <Image src={popup} alt="" className="w-7 h-7 ml-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;