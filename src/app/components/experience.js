import React from 'react';
import Image from "next/image";
import js_white from "../../../public/js_white.svg";
import js from "../../../public/js.svg";
import react_white from "../../../public/react_white.svg";
import react from "../../../public/react.svg";
import java_white from "../../../public/java_white.svg";
import java from "../../../public/java.svg";
import kotlin_white from "../../../public/kotlin_white.svg";
import kotlin from "../../../public/kotlin.svg";
import ts_white from "../../../public/ts_white.svg";
import ts from "../../../public/ts.svg";
import next_white from "../../../public/next_white.svg";
import next from "../../../public/next.svg";
import html_white from "../../../public/html_white.svg";
import html from "../../../public/html.svg";
import css_white from "../../../public/css_white.svg";
import css from "../../../public/css.svg";
import tw_white from "../../../public/tailwind_white.svg";
import tw from "../../../public/tailwind.svg";
import sass_white from "../../../public/sass_white.svg";
import sass from "../../../public/sass.svg";
import macos_white from "../../../public/macos_white.svg";
import macos from "../../../public/macos.svg";
import ws_white from "../../../public/ws_white.svg";
import ws from "../../../public/ws.svg";
import vscode_white from "../../../public/vscode_white.svg";
import vscode from "../../../public/vscode.svg";
import vc_white from "../../../public/vc_white.svg";
import vc from "../../../public/vc.svg";

const Experience = () => {
    return (
        <div>
            <div className="flex justify-center w-full h-full bg-white dark:bg-dark dark:text-white md:pl-4 md:pr-4">
                <div className="w-full max-w-5xl">
                    <div
                        className="font-bold text-blue-600 sm:pt-28 pt-20 pr-2 pl-4 sm:pl-0 sm:ml-0 sm:mr-0 bg-white dark:bg-dark">
                        Skills
                    </div>
                    <div
                        className="font-bold text-2xl pl-4 sm:pl-0 pr-2 sm:ml-0 sm:mr-0 pt-2 sm:mt-0 text-black dark:text-white bg-white dark:bg-dark">
                        Technologies I&apos;ve worked with
                    </div>
                    <div className="mt-6 pl-4 pr-4 sm:pl-0 sm:pr-0 grid sm:grid-cols-4 grid-cols-2 gap-6">
                        <div
                            className="flex justify-center items-center border border-warning rounded-lg grow fade-in-left">
                            <Image src={js} alt="" className="w-16 h-32"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-blue-300 rounded-lg grow fade-in-left">
                            <Image src={react} alt="" className="w-16 h-32"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-orange-400 rounded-lg grow fade-in">
                            <Image src={java} alt="" className="w-16 h-32"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-blue-400 rounded-lg grow fade-in">
                            <Image src={kotlin} alt="" className="w-16 h-32"/>
                        </div>
                        {/*<div*/}
                        {/*    className="flex justify-center items-center border border-dark dark:border-white rounded-lg grow">*/}
                        {/*    <Image src={ts_white} alt="" className="w-16 h-32 hidden dark:block"/>*/}
                        {/*    <Image src={ts} alt="" className="w-16 h-32 dark:hidden"/>*/}
                        {/*</div>*/}
                        <div
                            className="flex justify-center items-center border border-dark dark:border-white rounded-lg grow fade-in-left">
                            <Image src={next_white} alt="" className="w-16 h-32 hidden dark:block"/>
                            <Image src={next} alt="" className="w-16 h-32 dark:hidden"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-red-500 rounded-lg grow fade-in-left">
                            <Image src={html} alt="" className="w-16 h-32"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-blue-500 rounded-lg grow fade-in">
                            <Image src={css} alt="" className="w-16 h-32"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-accent rounded-lg grow fade-in">
                            <Image src={tw} alt="" className="w-16 h-32"/>
                        </div>
                        {/*<div*/}
                        {/*    className="flex justify-center items-center border border-dark dark:border-white rounded-lg grow">*/}
                        {/*    <Image src={sass_white} alt="" className="w-16 h-32 hidden dark:block"/>*/}
                        {/*    <Image src={sass} alt="" className="w-16 h-32 dark:hidden"/>*/}
                        {/*</div>*/}
                    </div>
                    <div
                        className="font-bold text-2xl pl-4 sm:pl-0 pr-2 sm:ml-0 sm:mr-0 sm:pt-14 pt-12 sm:mt-0 text-black dark:text-white bg-white dark:bg-dark">Tools
                        I use
                    </div>
                    <div className="mt-6 pl-4 pr-4 sm:pl-0 sm:pr-0 grid sm:grid-cols-4 grid-cols-2 gap-6 sm:pb-10 pb-4">
                        <div
                            className="flex justify-center items-center border border-dark dark:border-white rounded-lg grow fade-in-left">
                            <Image src={macos_white} alt="" className="w-16 h-32 hidden dark:block"/>
                            <Image src={macos} alt="" className="w-16 h-32 dark:hidden"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-dark dark:border-white rounded-lg grow fade-in-left">
                            <Image src={ws} alt="" className="w-16 h-32"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-dark dark:border-white rounded-lg grow fade-in">
                            <Image src={vscode} alt="" className="w-16 h-32"/>
                        </div>
                        <div
                            className="flex justify-center items-center border border-dark dark:border-white rounded-lg grow fade-in">
                            <Image src={vc_white} alt="" className="w-16 h-32 hidden dark:block"/>
                            <Image src={vc} alt="" className="w-16 h-32 dark:hidden"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;