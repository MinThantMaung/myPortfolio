'use client'
import React from 'react';
import arrow_white from '../../../../public/back_arrow_white.svg'
import arrow from '../../../../public/back_arrow.svg'
import game_white from '../../../../public/game_white.svg'
import game from '../../../../public/game.svg'
import movie_white from '../../../../public/movie_white.svg'
import movie from '../../../../public/movie.svg'
import Image from "next/image";
import photo from '../../../../public/mac.jpg'
import js_white from '../../../../public/js_white.svg'
import react_white from '../../../../public/react_white.svg'
import java_white from '../../../../public/java_white.svg'
import kotlin_white from '../../../../public/kotlin_white.svg'
import ts_white from '../../../../public/ts_white.svg'
import next_white from '../../../../public/next_white.svg'
import html_white from '../../../../public/html_white.svg'
import css_white from '../../../../public/css_white.svg'
import tw_white from '../../../../public/tailwind_white.svg'
import sass_white from '../../../../public/sass_white.svg'
import macos_white from '../../../../public/macos_white.svg'
import ws_white from '../../../../public/ws_white.svg'
import vscode_white from '../../../../public/vscode_white.svg'
import vc_white from '../../../../public/vc_white.svg'
import Footer from "@/app/components/footer";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    const gotoMain = () => {
        router.push('/')
    }
    return (
        <>
            <div className="bg-white dark:bg-dark text-black dark:text-white">
                <div className="sm:pt-32 sm:pl-32 pt-20 pl-4 cursor-pointer" onClick={gotoMain}>
                    <Image src={arrow_white} alt="" className="w-8 h-8 hidden dark:block"/>
                    <Image src={arrow} alt="" className="w-8 h-8 dark:hidden"/>
                </div>
                <div className="flex justify-center items-center w-full h-full bg-white dark:bg-dark dark:text-white">
                    <div className="w-full max-w-6xl">
                        <div className="flex flex-col sm:flex-row sm:pt-56">
                            <div className="sm:w-3/5 sm:mt-0 mt-6 order-2 sm:order-1">
                                <div className="text-center text-4xl font-bold">
                                    Know Who <span className="text-blue-500">I&apos;M</span>
                                </div>
                                <div
                                    className="sm:text-start text-center text-lg sm:mt-8 mt-10 pl-2 pr-2 sm:pr-0 sm:pl-4">
                                    Hi Everyone, I am <span className="text-blue-500">Min Thant Mg</span> from <span
                                    className="text-blue-500">Yangon, Myanmar.</span>
                                    I am currently employed as a software developer at Global Innovation Consulting.
                                </div>
                                <div className="text-start text-lg sm:mt-8 mt-8 pl-4 sm:pl-0">
                                    Apart from coding, some other activities that I love to do!
                                </div>
                                <div className="sm:mt-6 sm:pl-4 pl-4 mt-4">
                                    <div className="flex">
                                        <div>
                                            <Image src={game_white} alt="" className="w-8 h-8 hidden dark:block"/>
                                            <Image src={game} alt="" className="w-8 h-8 dark:hidden"/>
                                        </div>
                                        <div className="pl-2 flex justify-center items-center">
                                            Playing Game
                                        </div>
                                    </div>
                                    <div className="flex sm:mt-2">
                                        <div>
                                            <Image src={movie_white} alt="" className="w-8 h-8 hidden dark:block"/>
                                            <Image src={movie} alt="" className="w-8 h-8 dark:hidden"/>
                                        </div>
                                        <div className="pl-2 flex justify-center items-center">
                                            Watching movies
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-2/5 order-1 sm:order-2 sm:mt-0 mt-20 pr-4 sm:pr-0 pl-4 sm:pl-0">
                                <div>
                                    <Image src={photo} alt="" className="rounded-xl"/>
                                </div>
                            </div>
                        </div>
                        <div className="text-center sm:text-4xl text-2xl sm:mt-32 mt-6">
                            <div>Professional <span className="text-blue-500">Skillset</span></div>
                        </div>
                        <div className="mt-6 pl-4 pr-4 sm:pl-0 sm:pr-0 grid sm:grid-cols-5 grid-cols-2 gap-4">
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={js_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={react_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={java_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={kotlin_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={ts_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={next_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={html_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={css_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={tw_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={sass_white} alt="" className="w-16 h-32"/>
                            </div>
                        </div>
                        <div className="text-center sm:text-4xl text-2xl sm:mt-32 mt-6">
                            <div><span className="text-blue-500">Tools</span> I use</div>
                        </div>
                        <div className="mt-6 pl-4 pr-4 sm:pl-0 sm:pr-0 grid sm:grid-cols-4 grid-cols-2 gap-4">
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={macos_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={ws_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={vscode_white} alt="" className="w-16 h-32"/>
                            </div>
                            <div className="flex justify-center items-center border border-white rounded-lg">
                                <Image src={vc_white} alt="" className="w-16 h-32"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Page;