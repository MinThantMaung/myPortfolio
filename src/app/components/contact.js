'use client'
import React from 'react';
import map from '../../../public/location.svg'
import email from '../../../public/email.svg'
import Image from "next/image";

const Contact = () => {
    const openGmail = () => {
        const emailAddress = 'minthantmg169@mail.com';
        const mailtoLink = `mailto:${emailAddress}`;

        window.open(mailtoLink);
    };

    return (
        <div className="flex justify-center w-full h-full bg-white">
            <div className="w-full max-w-5xl">
                <div className="w-full h-fit sm:pt-32 sm:pb-32">
                    <div className="text-blue-600 font-bold">
                        CONTACT
                    </div>
                    <div className="font-bold text-2xl mt-4">
                        Start by <span className="text-blue-600 underline cursor-pointer" onClick={openGmail}>Saying Hi</span>
                    </div>
                    <div className="flex mt-16">
                        <div className="flex">
                            <div>
                                <div className="shadow-lg rounded-full p-3">
                                    <Image src={map} alt=""/>
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="font-bold text-lg">
                                    Location
                                </div>
                                <div className="mt-1 text-gray-600 hover:text-blue-600 cursor-pointer">
                                    Yangon, Myanmar
                                </div>
                            </div>
                        </div>
                        <div className="flex ml-10">
                            <div>
                                <div className="shadow-lg rounded-full p-3">
                                    <Image src={email} alt=""/>
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="font-bold text-lg">
                                    Mail
                                </div>
                                <div className="mt-1 text-gray-600 hover:text-blue-600 cursor-pointer" onClick={openGmail}>
                                    <a>
                                        minthantmg169@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;