'use client'
import React from 'react';
import github from '../../../../../public/github.svg'
import linkedin from '../../../../../public/linkedin.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";

const Footer = () => {
    const router = useRouter()
    const gotoLinkedin = () => {
        router.push('https://www.linkedin.com/in/min-thant-mg-2620411b3/')
    }
    const gotoGithub = () => {
        router.push('https://github.com/Minthantmg')
    }

    return (
        <div className="flex justify-center w-full h-full bg-dark text-white">
            <div className="w-full max-w-5xl">
                <div className="flex sm:flex-row flex-col justify-between items-center pb-10 sm:pb-0">
                    <div className="font-bold pt-14 pb-14 text-lg sm:mr-0 sm:ml-0 mr-4 ml-4 text-center">
                        Copyright © 2024. All rights are reserved
                    </div>
                    <div className="flex">
                        <div onClick={gotoLinkedin} className="cursor-pointer">
                            <Image src={linkedin} alt="" className="w-6 h-6"/>
                        </div>
                        <div className="sm:ml-6 ml-6 cursor-pointer" onClick={gotoGithub}>
                            <Image src={github} alt="" className="w-6 h-6"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;