import React, {useEffect} from 'react';
import {useTranslations} from "next-intl";

const Timeline = () => {
    const t = useTranslations('Index');

    useEffect(() => {
        const fadeElems = document.querySelectorAll('.fade-in');
        const fadeElemsRight = document.querySelectorAll('.fade-in-left');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    entry.target.classList.add('show')
                }else{
                    entry.target.classList.remove('show')
                }
            })
        })
        fadeElems.forEach((el) => observer.observe(el))
        fadeElemsRight.forEach((er) => observer.observe(er))
    }, []);
    return (
        <>
            <div className="flex justify-center w-full h-full bg-white dark:bg-dark text-gray-700 dark:text-white">
                <div className="w-full max-w-5xl">
                    <div
                        className="font-bold text-blue-600 sm:pt-28 pt-20 pl-4 pr-2 sm:ml-0 sm:mr-0 bg-white dark:bg-dark">
                        Career
                    </div>
                    <div
                        className="font-bold text-2xl pl-4 pr-2 sm:ml-0 sm:mr-0 pt-2 sm:mt-0 text-black dark:text-white bg-white dark:bg-dark">
                        My Career Journey
                    </div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-10 sm:pt-16 pl-2 sm:pl-0">
                        <li>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="h-5 w-5">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic fade-in-left">2014-2020</time>
                                <div className="text-lg font-black fade-in-left">{t('time_job_one')}</div>
                                <div className="font-sans text-lg fade-in-left">
                                    {t('time_place_one')}
                                </div>
                                <div className="fade-in-left">
                                    {t('time_detail_one')}
                                </div>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="h-5 w-5">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div className="timeline-end mb-2 sm:mb-10 pt-1 sm:pt-0">
                                <time className="font-mono italic fade-in">2020-2022</time>
                                <div className="text-lg font-black fade-in">{t('time_job_two')}</div>
                                <div className="font-sans text-lg fade-in">
                                    {t('time_place_two')}
                                </div>
                                <div className="fade-in">
                                    {t('time_detail_two')}
                                </div>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="h-5 w-5">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic fade-in-left">2023 - present</time>
                                <div className="text-lg font-black fade-in-left">{t('time_job_three')}</div>
                                <div className="font-sans text-lg fade-in-left">
                                    {t('time_place_three')}
                                </div>
                                <div className="fade-in-left">
                                    {t('time_detail_three')}
                                </div>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="h-5 w-5">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div className="timeline-end mb-2 sm:mb-10 pt-1 sm:pt-0">
                                <time className="font-mono italic fade-in">2022 - present</time>
                                <div className="text-lg font-black fade-in">{t('time_job_four')}</div>
                                <div className="font-sans text-lg fade-in">
                                    {t('time_place_four')}
                                </div>
                                <div className="fade-in">
                                    {t('time_detail_four')}
                                </div>
                            </div>
                            <hr/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Timeline;
