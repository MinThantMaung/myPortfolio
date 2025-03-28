'use client'
import React, {useState} from 'react';
import map from '../../../../../public/location.svg'
import Image from "next/image";
import {useEmail} from "../../../../../hooks/useEmail";
import {useTranslations} from "next-intl";
import clipBoard from '../../../../../public/clipBoardCheck.svg'
import Map from '../map/page';

const Contact = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [toggle, setToggle] = useState(false)
    const [eToggle, setEToggle] = useState(false)
    const [successAlert,setSuccessAlert] = useState(false)
    const t = useTranslations('Index');

    const { useSendEmail } = useEmail()
    const {mutateAsync:emailRes,isPending} = useSendEmail(email)


    const sendEmail = async (e) => {
        e.preventDefault()
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEToggle(true)
            setTimeout(() => {
                setEToggle(false);
            }, 5000);
            return;
        }
        try {
            const response = await emailRes({email,subject,body})
            setSuccessAlert(true)
            setSubject('')
            setBody('')
            setEmail('')
            setTimeout(() => {
                setSuccessAlert(false);
            }, 5000);
        }catch (e){
            setToggle(true)
            setTimeout(() => {
                setToggle(false);
            }, 5000);
        }
    }

    const openLocation = () => {
        window.open('https://www.google.com/maps/place/Yangon/@16.8390767,96.0167614,11z/data=!4m15!1m8!3m7!1s0x30c1949e223e196b:0x56fbd271f8080bb4!2sYangon!3b1!8m2!3d16.840939!4d96.173526!16zL20vMGZzNTQ!3m5!1s0x30c1949e223e196b:0x56fbd271f8080bb4!8m2!3d16.840939!4d96.173526!16zL20vMGZzNTQ?entry=ttu')
    }

    return (
        <div
            className="flex flex-col sm:flex-row justify-center w-full h-full bg-white dark:bg-dark text-black dark:text-white md:pl-4 md:pr-4">
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
                            <div className="sm:mt-6 text-blue-700 text-start ml-4 sm:ml-0">
                                Let&apos;s create something together
                            </div>
                            <div className="sm:mt-6 mt-4 text-blue-700 text-start ml-4 sm:ml-0">
                               Location
                            </div>
                            <Map />           
                        </div>
                        <div>
                            <div className="rounded-lg shadow-lg p-6 mt-10 sm:mt-44 mx-2">
                                <div className="text-xl font-bold text-start">
                                    {t('send_message')}
                                </div>
                                <form method="POST" onSubmit={sendEmail}>
                                    <label
                                        className="input input-bordered flex items-center gap-2 bg-white dark:bg-dark sm:mt-4 mt-4">
                                        Email
                                        <input type="text" className="bg-white dark:bg-dark"
                                               placeholder="user@gmail.com"
                                               value={email} onChange={(e) => setEmail(e.target.value)}
                                               required={true}/>
                                    </label>
                                    <label
                                        className="input input-bordered flex items-center gap-2 bg-white dark:bg-dark sm:mt-4 mt-4">
                                        Subject
                                        <input type="text" className="bg-white dark:bg-dark" placeholder="Subject"
                                               value={subject} onChange={(e) => setSubject(e.target.value)}
                                               required={true}/>
                                    </label>
                                    <textarea placeholder="Description"
                                              className="textarea textarea-bordered textarea-md w-full bg-white dark:bg-dark sm:mt-4 mt-4"
                                              value={body} onChange={(e) => setBody(e.target.value)}
                                              required={true}></textarea>
                                    <div>
                                        {isPending ? (
                                            <button
                                                className="w-full h-14 py-4 bg-blue-700 text-white rounded-lg sm:mt-1 mt-2">
                                                <span className="loading loading-spinner loading-sm text-white"></span>
                                            </button>
                                        ) : (
                                            <button
                                                className="w-full h-14 py-4 bg-blue-700 text-white rounded-lg sm:mt-1 mt-2"
                                            >
                                                {t('send')}
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={toggle ? '' : 'hidden'}>
                            <div className="toast">
                                <div className="alert alert-warning">
                                    <span>This service is currently not available </span>
                                </div>
                            </div>
                        </div>
                        <div className={eToggle ? '' : 'hidden'}>
                            <div className="toast">
                                <div className="alert alert-error">
                                    <span className="text-white">Please enter a valid email address!</span>
                                </div>
                            </div>
                        </div>
                        <div className={successAlert ? '' : 'hidden'}>
                            <div className="toast">
                                <div className="alert alert-success flex">
                                    <Image src={clipBoard} alt="clip_img" />
                                    <span className="text-white md:x-12">Successfully sent</span>
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