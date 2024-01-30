import React from 'react';
import map from '../../../public/location.svg'
import email from '../../../public/email.svg'
import Image from "next/image";

const Contact = () => {
    return (
        <div>
            <div className="w-full h-fit sm:pl-64 sm:pt-32 sm:pb-32">
                <div className="text-blue-600 font-bold">
                    CONTACT
                </div>
                <div className="font-bold text-2xl mt-4">
                    Don't be shy! Hit me up!
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
                            <div className="mt-1 text-gray-600">
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
                            <div className="mt-1 text-gray-600">
                                <a>
                                    minthantmg169@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;