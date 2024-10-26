'use client'
import React from 'react';
import Image from "next/image";
import github from '../../../../../public/github_solid.svg'
import github_light from '../../../../../public/github_solod_white.svg'
import popup from '../../../../../public/popup.svg'
import popup_light from '../../../../../public/popup_white.svg'
import coin from '../../../../../public/coindom.png'
import yts from '../../../../../public/yts_01.png'
import nike from '../../../../../public/nike.png'
import product from '../../../../../public/productvity.png'
import store from '../../../../../public/store.png'
import mpc from '../../../../../public/mpc.png'
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

const Projects = () => {
    const router = useRouter()
    const t = useTranslations('Index');
    const gotoGithub = () => {
        window.open('https://github.com/Minthantmg/CoinBase');
    };

    const gotoWebsite = () => {
        window.open('https://coin-base-live-market.vercel.app/');
    };

    const gotoProductlyWebsite = () => {
        window.open('https://productly-landing-page-eta.vercel.app/');
    };
    const gotoProductlyGithub = () => {
        window.open('https://github.com/Minthantmg/productivityLandingPage/');
    };

    const gotoYtsWebsite = () => {
        window.open('https://yts-clone-movie.vercel.app/');
    };
    const gotoYtsGithub = () => {
        window.open('https://github.com/Minthantmg/YtsClone');
    };

    const gotoNikeWebsite = () => {
        window.open('https://nike-commercial.vercel.app/');
    };
    const gotoNikeGithub = () => {
        window.open('https://github.com/Minthantmg/Nike');
    };

    const gotoStoreWebsite = () => {
        window.open('https://mini-store-weld.vercel.app/');
    };
    const gotoStoreGithub = () => {
        window.open('https://github.com/Minthantmg/mini-Ecommerce');
    };

    const gotoMpcWebsite = () => {
        window.open('https://myanmar-postal-code-seven.vercel.app/');
    };
    const gotoMpcGithub = () => {
        window.open('https://github.com/nainglinthant111/Postal-Code-Myanmar-org');
    };
    
    return (
        <div>
            <div className="flex justify-center w-full h-full bg-white dark:bg-dark dark:text-white md:pl-4 md:pr-4">
                <div className="w-full max-w-5xl">
                    <div className="font-bold text-blue-600 sm:pt-28 pt-20 ml-4 mr-2 sm:ml-0 sm:mr-0">
                        PROJECTS
                    </div>
                    <div
                        className="font-bold text-2xl ml-4 mr-2 sm:ml-0 sm:mr-0 mt-2 sm:mt-0 text-black dark:text-white">
                        Check out some of my work here
                    </div>
                    <div
                        className="shadow-lg rounded-lg flex flex-col sm:flex-row ml-2 mr-2 sm:ml-0 sm:mr-0 pb-4 pt-4 pl-4 pr-4 sm:pr-0 mt-12">
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl">
                            <Image src={coin} alt=""
                                   className="rounded-lg sm:transform sm:transition-transform sm:group-hover:translate-y-[-1000px]  sm:duration-[8000ms]"/>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center sm:w-1/2">
                            <div className="font-bold text-2xl sm:text-xl mt-4 sm:mt-0 text-black dark:text-white">
                                Coinbase
                            </div>
                            <div className="mt-4 text-lg sm:ml-20 sm:mr-20 text-gray-600 dark:text-white">
                                {t('project_coinbase_detail')}
                            </div>
                            <div className="flex justify-center items-center mt-4 text-black dark:text-white">
                                <div className="font-bold text-lg badge badge-outline p-3">
                                    React
                                </div>
                                <div className="font-bold text-lg ml-4 badge badge-outline p-3">
                                    Next.js
                                </div>
                                <div className="font-bold text-lg ml-4 badge badge-outline p-3">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoGithub}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Code</span><Image
                                    src={github} alt="" className="w-8 h-8 ml-1 dark:hidden"/>
                                    <Image src={github_light} alt="" className="w-8 h-8 ml-1 hidden dark:block"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer" onClick={gotoWebsite}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Live Demo</span><Image
                                    src={popup} alt="" className="w-7 h-7 ml-1 dark:hidden"/>
                                    <Image src={popup_light} alt="" className="w-7 h-7 ml-1 hidden dark:block"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shadow-lg rounded-lg flex flex-col sm:flex-row ml-2 mr-2 sm:ml-0 sm:mr-0 pb-4 pt-4 pl-4 pr-4 sm:pr-0 mt-12">
                        <div
                            className="flex flex-col justify-center items-center text-center sm:w-1/2 sm:order-1 order-2">
                            <div className="font-bold text-2xl sm:text-xl mt-4 sm:mt-0 text-black dark:text-white">
                                Productly
                            </div>
                            <div className="mt-4 text-lg sm:ml-20 sm:mr-20 text-gray-600 dark:text-white">
                                {t('project_Productly_detail')}
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-outline p-3 text-black dark:text-white">
                                    React
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Next.js
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex justify-center items-center sm:mt-10 mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoProductlyGithub}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Code</span><Image
                                    src={github} alt="" className="w-8 h-8 ml-1 dark:hidden"/>
                                    <Image src={github_light} alt="" className="w-8 h-8 ml-1 hidden dark:block"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer"
                                     onClick={gotoProductlyWebsite}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Live Demo</span><Image
                                    src={popup} alt="" className="w-7 h-7 ml-1 dark:hidden"/>
                                    <Image src={popup_light} alt="" className="w-7 h-7 ml-1 hidden dark:block"/>
                                </div>
                            </div>
                        </div>
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl order-1 sm:order-2">
                            <Image src={product} alt=""
                                   className="rounded-lg sm:transform sm:transition-transform sm:group-hover:translate-y-[-1540px]  sm:duration-[8000ms]"/>
                        </div>
                    </div>
                    <div
                        className="shadow-lg rounded-lg flex flex-col sm:flex-row ml-2 mr-2 sm:ml-0 sm:mr-0 pb-4 pt-4 pl-4 pr-4 sm:pr-0 mt-12">
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl">
                            <Image src={yts} alt=""
                                   className="rounded-lg sm:transform sm:transition-transform sm:group-hover:translate-y-[-190px] sm:duration-[8000ms]"/>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center sm:w-1/2">
                            <div className="font-bold text-2xl sm:text-xl mt-4 sm:mt-0 text-black dark:text-white">
                                YTS
                            </div>
                            <div className="mt-4 text-lg sm:ml-20 sm:mr-20 text-gray-600 dark:text-white">
                                {t('project_Yts_detail')}
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-outline p-3 text-black dark:text-white">
                                    React
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Next.js
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoYtsGithub}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Code</span><Image
                                    src={github} alt="" className="w-8 h-8 ml-1 dark:hidden"/>
                                    <Image src={github_light} alt="" className="w-8 h-8 ml-1 hidden dark:block"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer" onClick={gotoYtsWebsite}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Live Demo</span><Image
                                    src={popup} alt="" className="w-7 h-7 ml-1 dark:hidden"/>
                                    <Image src={popup_light} alt="" className="w-7 h-7 ml-1 hidden dark:block"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shadow-lg rounded-lg flex flex-col sm:flex-row ml-2 mr-2 sm:ml-0 sm:mr-0 pb-4 pt-4 pl-4 pr-4 sm:pr-0 mt-12">
                        <div
                            className="flex flex-col justify-center items-center text-center sm:w-1/2 sm:order-1 order-2">
                            <div className="font-bold text-2xl sm:text-xl mt-4 sm:mt-0 text-black dark:text-white">
                                Nike
                            </div>
                            <div className="mt-4 text-lg sm:ml-20 sm:mr-20 text-gray-600 dark:text-white">
                                {t('project_nike_detail')}
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-outline p-3 text-black dark:text-white">
                                    Next.js
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex justify-center items-center sm:mt-10 mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoNikeGithub}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Code</span><Image
                                    src={github} alt="" className="w-8 h-8 ml-1 dark:hidden"/>
                                    <Image src={github_light} alt="" className="w-8 h-8 ml-1 hidden dark:block"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer"
                                     onClick={gotoNikeWebsite}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Live Demo</span><Image
                                    src={popup} alt="" className="w-7 h-7 ml-1 dark:hidden"/>
                                    <Image src={popup_light} alt="" className="w-7 h-7 ml-1 hidden dark:block"/>
                                </div>
                            </div>
                        </div>
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl order-1 sm:order-2">
                            <Image src={nike} alt=""
                                   className="rounded-lg sm:transform sm:transition-transform sm:group-hover:translate-y-[-1330px]  sm:duration-[8000ms]"/>
                        </div>
                    </div>
                    <div
                        className="shadow-lg rounded-lg flex flex-col sm:flex-row ml-2 mr-2 sm:ml-0 sm:mr-0 pb-4 pt-4 pl-4 pr-4 sm:pr-0 mt-12">
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl">
                            <Image src={store} alt=""
                                   className="rounded-lg sm:transform sm:transition-transform sm:group-hover:translate-y-[-680px] sm:duration-[8000ms]"/>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center sm:w-1/2">
                            <div className="font-bold text-2xl sm:text-xl mt-4 sm:mt-0 text-black dark:text-white">
                                Mini-store
                            </div>
                            <div className="mt-4 text-lg sm:ml-20 sm:mr-20 text-gray-600 dark:text-white">
                                {t('project_ministore_detail')}
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-outline p-3 text-black dark:text-white">
                                    React
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Next.js
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoStoreGithub}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Code</span><Image
                                    src={github} alt="" className="w-8 h-8 ml-1 dark:hidden"/>
                                    <Image src={github_light} alt="" className="w-8 h-8 ml-1 hidden dark:block"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer" onClick={gotoStoreWebsite}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Live Demo</span><Image
                                    src={popup} alt="" className="w-7 h-7 ml-1 dark:hidden"/>
                                    <Image src={popup_light} alt="" className="w-7 h-7 ml-1 hidden dark:block"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shadow-lg rounded-lg flex flex-col sm:flex-row ml-2 mr-2 sm:ml-0 sm:mr-0 pb-4 pt-4 pl-4 pr-4 sm:pr-0 mt-12">
                        <div
                            className="flex flex-col justify-center items-center text-center sm:w-1/2 sm:order-1 order-2">
                            <div className="font-bold text-2xl sm:text-xl mt-4 sm:mt-0 text-black dark:text-white">
                                Myanmar Postal Code
                            </div>
                            <div className="mt-4 text-lg sm:ml-20 sm:mr-20 text-gray-600 dark:text-white">
                                {t('project_mpc_detail')}
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <div className="font-bold text-lg badge badge-outline p-3 text-black dark:text-white">
                                    Next.js
                                </div>
                                <div
                                    className="font-bold text-lg ml-4 badge badge-outline p-3 text-black dark:text-white">
                                    Tailwind
                                </div>
                            </div>
                            <div className="flex justify-center items-center sm:mt-10 mt-10">
                                <div className="flex text-lg font-bold cursor-pointer" onClick={gotoMpcGithub}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Code</span><Image
                                    src={github} alt="" className="w-8 h-8 ml-1 dark:hidden"/>
                                    <Image src={github_light} alt="" className="w-8 h-8 ml-1 hidden dark:block"/>
                                </div>
                                <div className="flex text-lg font-bold ml-10 cursor-pointer"
                                     onClick={gotoMpcWebsite}>
                                    <span className="sm:mt-[3px] text-black dark:text-white">Live Demo</span><Image
                                    src={popup} alt="" className="w-7 h-7 ml-1 dark:hidden"/>
                                    <Image src={popup_light} alt="" className="w-7 h-7 ml-1 hidden dark:block"/>
                                </div>
                            </div>
                        </div>
                        <div className="max-h-96 sm:w-1/2 overflow-hidden group rounded-xl order-1 sm:order-2">
                            <Image src={mpc} alt=""
                                   className="rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;