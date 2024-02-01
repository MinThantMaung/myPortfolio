import React from 'react';
import github from '../../../public/github.svg'
import linkedin from '../../../public/linkedin.svg'
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex justify-center w-full h-full bg-dark text-white">
            <div className="w-full max-w-5xl">
                <div className="flex sm:flex-row flex-col justify-between items-center pb-10 sm:pb-0">
                    <div className="font-bold pt-14 pb-14 text-lg sm:mr-0 sm:ml-0 mr-4 ml-4 text-center">
                        Copyright © 2024. All rights are reserved
                    </div>
                    <div className="flex">
                        <div>
                            <Image src={linkedin} alt="" className="w-10 h-10"/>
                        </div>
                        <div className="sm:ml-6 ml-6">
                            <Image src={github} alt="" className="w-10 h-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;