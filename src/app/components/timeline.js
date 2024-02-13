import React, {useEffect} from 'react';

const Timeline = () => {
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
            <div className="flex justify-center w-full h-full bg-white dark:bg-dark text-gray-700 dark:text-white md:pl-4 md:pr-4">
                <div className="w-full max-w-5xl">
                    <div
                        className="font-bold text-blue-600 sm:pt-28 pt-20 pl-4 pr-2 sm:ml-0 sm:mr-0 bg-white dark:bg-dark">
                        Career
                    </div>
                    <div
                        className="font-bold text-2xl pl-4 pr-2 sm:ml-0 sm:mr-0 pt-2 sm:mt-0 text-black dark:text-white bg-white dark:bg-dark">
                        Each job is a unique piece of my life
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
                                <div className="text-lg font-black fade-in-left">University Student</div>
                                <div className="font-sans text-lg fade-in-left">
                                    University of Computer Studies,Yangon
                                </div>
                                <div className="fade-in-left">
                                    My university life has been a wonderful journey of learning, discovery, and
                                    growth. I have met many amazing people, explored new ideas, and developed
                                    valuable skills that will help me in my future endeavors. I have also enjoyed
                                    the freedom and flexibility of managing my own time and schedule, while also
                                    facing various challenges and opportunities.
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
                                <div className="text-lg font-black fade-in">Android Developer</div>
                                <div className="font-sans text-lg fade-in">
                                    HexCreative
                                </div>
                                <div className="fade-in">
                                    I am an Android developer at HexCreative Company, where I design, create, and
                                    maintain Android-based applications using Java and Kotlin. I collaborate with
                                    cross-functional teams to define, design, and ship new features for our clients.
                                    I also work with outside data sources and APIs, unit-test code for robustness,
                                    and fix bugs and improve performance.I am passionate about building innovative
                                    and user-friendly apps that solve real-world problems.
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
                                <div className="text-lg font-black fade-in-left">Web Developer</div>
                                <div className="font-sans text-lg fade-in-left">
                                    Global Innovation Consulting
                                </div>
                                <div className="fade-in-left">
                                    I am a passionate web developer with experience in working at Global Innovation
                                    Consulting company.I have created dynamic and responsive
                                    web applications using Java, React, and Next.js for various clients and
                                    projects. I have a strong knowledge of web development tools and frameworks,
                                    such as Spring Boot, Material UI, and Next.js API routes. I enjoy working on
                                    challenging and innovative projects that require both front-end and back-end
                                    skills. I am always eager to learn new technologies and improve my coding
                                    skills.
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
                                <div className="text-lg font-black fade-in">Front-end Developer</div>
                                <div className="font-sans text-lg fade-in">
                                    FreeLance
                                </div>
                                <div className="fade-in">
                                    I am a freelance frontend developer with a passion for creating beautiful and
                                    functional websites. I have experience in working with various clients and
                                    projects, using HTML, CSS, JavaScript, and popular framework such as React. I
                                    have a keen eye for design and UX, and I always strive to
                                    deliver high-quality code that meets the client&apos;s needs and expectations. I
                                    enjoy learning new technologies and keeping
                                    up with the latest trends in web development.
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
