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

    const openLocation = () => {
        window.open('https://www.google.com/maps/place/Yangon/@16.8390767,96.0167614,11z/data=!4m15!1m8!3m7!1s0x30c1949e223e196b:0x56fbd271f8080bb4!2sYangon!3b1!8m2!3d16.840939!4d96.173526!16zL20vMGZzNTQ!3m5!1s0x30c1949e223e196b:0x56fbd271f8080bb4!8m2!3d16.840939!4d96.173526!16zL20vMGZzNTQ?entry=ttu')
    }

    return (
        <div
            className="flex flex-col sm:flex-row  justify-center w-full h-full bg-white dark:bg-dark dark:text-white md:pl-4 md:pr-4">
            <div className="w-full max-w-5xl">
                <div className="w-full h-fit text-center sm:text-start sm:pt-32 sm:pb-32 mt-20 sm:mt-0 pb-24">
                    <div className="text-blue-600 font-bold text-start ml-4 sm:ml-0">
                        CONTACT
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div>
                            <div className="sm:text-5xl text-2xl text-start sm:mt-10 mt-4 ml-4 sm:ml-0">
                                Let&apos;s chat.
                            </div>
                            <div className="sm:text-5xl text-2xl sm:mr-20 text-start ml-4 sm:ml-0">
                                Tell me about your project
                            </div>
                            <div className="sm:mt-6 text-blue-500 text-start ml-4 sm:ml-0">
                                Let&apos;s create something together
                            </div>
                            <div className="sm:mt-6 mt-4 text-blue-500 text-start ml-4 sm:ml-0">
                                Location
                            </div>
                            <div className="sm:w-fit w-full flex justify-center items-center mt-6 sm:mt-0">
                                <div
                                    className="flex sm:flex-row mt-0 sm:mt-10 shadow-lg sm:p-6 p-6 rounded-lg">
                                    <div>
                                        <div className="shadow-lg rounded-full p-3">
                                            <Image src={map} alt=""/>
                                        </div>
                                    </div>
                                    <div className="sm:ml-14 ml-4 sm:mt-0">
                                        <div className="font-bold text-lg text-black dark:text-white">
                                            Location
                                        </div>
                                        <div
                                            className="sm:mt-1 mt-2 text-gray-600 hover:text-blue-600 cursor-pointer dark:text-white"
                                            onClick={openLocation}>
                                            Yangon, Myanmar
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg shadow-lg p-6 mt-10 sm:mt-20 mx-2">
                                <div className="text-xl font-bold text-start">
                                    Send us a message
                                </div>
                                <label
                                    className="input input-bordered flex items-center gap-2 bg-white dark:bg-dark sm:mt-4 mt-4">
                                    Email
                                    <input type="text" className="bg-white dark:bg-dark" placeholder="user@gmail.com"/>
                                </label>
                                <label
                                    className="input input-bordered flex items-center gap-2 bg-white dark:bg-dark sm:mt-4 mt-4">
                                    Subject
                                    <input type="text" className="bg-white dark:bg-dark" placeholder="Subject"/>
                                </label>
                                <textarea placeholder="Description"
                                          className="textarea textarea-bordered textarea-md w-full bg-white dark:bg-dark sm:mt-4 mt-4"></textarea>
                                <div>
                                    <button
                                        className="w-full py-4 bg-blue-500 text-white rounded-lg sm:mt-1 mt-2">Send
                                    </button>
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