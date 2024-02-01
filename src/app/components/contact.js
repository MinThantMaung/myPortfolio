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
        <div className="flex flex-col sm:flex-row  justify-center w-full h-full bg-white dark:bg-dark dark:text-white">
            <div className="w-full max-w-5xl">
                <div className="w-full h-fit text-center sm:text-start sm:pt-32 sm:pb-32 mt-20 sm:mt-0 pb-24">
                    <div className="text-blue-600 font-bold">
                        CONTACT
                    </div>
                    <div className="font-bold text-2xl mt-4">
                        Start by <span className="text-blue-600 underline cursor-pointer" onClick={openGmail}>Saying Hi</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start mt-16">
                        <div className="flex flex-col sm:flex-row justify-center items-center">
                            <div>
                                <div className="shadow-lg rounded-full p-3">
                                    <Image src={map} alt=""/>
                                </div>
                            </div>
                            <div className="sm:ml-4 ml-0 mt-2 sm:mt-0">
                                <div className="font-bold text-lg">
                                    Location
                                </div>
                                <div className="sm:mt-1 mt-2 text-gray-600 hover:text-blue-600 cursor-pointer dark:text-white">
                                    Yangon, Myanmar
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-center sm:ml-10 ml-0 mt-4 sm:mt-0">
                            <div>
                                <div className="shadow-lg rounded-full p-3">
                                    <Image src={email} alt=""/>
                                </div>
                            </div>
                            <div className="sm:ml-4 mt-2 sm:mt-0">
                                <div className="font-bold text-lg">
                                    Mail
                                </div>
                                <div className="sm:mt-1 mt-2 text-gray-600 hover:text-blue-600 cursor-pointer dark:text-white" onClick={openGmail}>
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