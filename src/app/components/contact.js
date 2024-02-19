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
                    {/*<div className="font-bold text-2xl mt-4 text-black dark:text-white">*/}
                    {/*    Start by <span className="text-blue-600 underline cursor-pointer" onClick={openGmail}>Saying Hi</span>*/}
                    {/*</div>*/}
                    {/*<div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start mt-16">*/}
                    {/*    <div className="flex flex-col sm:flex-row justify-center items-center">*/}
                    {/*        <div>*/}
                    {/*            <div className="shadow-lg rounded-full p-3">*/}
                    {/*                <Image src={map} alt=""/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="sm:ml-4 ml-0 mt-2 sm:mt-0">*/}
                    {/*            <div className="font-bold text-lg text-black dark:text-white">*/}
                    {/*                Location*/}
                    {/*            </div>*/}
                    {/*            <div className="sm:mt-1 mt-2 text-gray-600 hover:text-blue-600 cursor-pointer dark:text-white" onClick={openLocation}>*/}
                    {/*                Yangon, Myanmar*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex flex-col sm:flex-row justify-center items-center sm:ml-10 ml-0 mt-4 sm:mt-0">*/}
                    {/*        <div>*/}
                    {/*            <div className="shadow-lg rounded-full p-3">*/}
                    {/*                <Image src={email} alt=""/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="sm:ml-4 mt-2 sm:mt-0">*/}
                    {/*            <div className="font-bold text-lg text-black dark:text-white">*/}
                    {/*                Mail*/}
                    {/*            </div>*/}
                    {/*            <div className="sm:mt-1 mt-2 text-gray-600 hover:text-blue-600 cursor-pointer dark:text-white" onClick={openGmail}>*/}
                    {/*                <a href="mailto:minthantmg169@gmail.com" onClick={openGmail}>*/}
                    {/*                    minthantmg169@gmail.com*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
                                {/*<div*/}
                                {/*    className="flex sm:flex-row mt-0 sm:mt-10 border shadow-lg dark:border-white sm:p-6 p-6 rounded-lg">*/}
                                {/*    <div>*/}
                                {/*        <div className="shadow-lg rounded-full p-3">*/}
                                {/*            <Image src={map} alt=""/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="sm:ml-14 ml-4 sm:mt-0">*/}
                                {/*        <div className="font-bold text-lg text-black dark:text-white">*/}
                                {/*            Location*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className="sm:mt-1 mt-2 text-gray-600 hover:text-blue-600 cursor-pointer dark:text-white"*/}
                                {/*            onClick={openLocation}>*/}
                                {/*            Yangon, Myanmar*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488799.6758948432!2d95.85191337417017!3d16.838879501049373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon!5e0!3m2!1sen!2smm!4v1708319147784!5m2!1sen!2smm"
                                        width="400" height="300" allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                     className="rounded-lg sm:mt-2 pl-16 pr-16 sm:pl-0 sm:pr-0"></iframe>
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