'use client'
import React, {useEffect, useState} from 'react';
import Home from "@/app/[locale]/components/home/page";
import About from "@/app/[locale]/components/about/page";
import Contact from "@/app/[locale]/components/contact/page";
import Projects from "@/app/[locale]/components/project/page";
import Nav from "@/app/[locale]/components/_nav/page";
import Footer from "@/app/[locale]/components/_footer/page";
import Menu from "@/app/[locale]/components/menu/page";
import Experience from "@/app/[locale]/components/experience/page";
import Timeline from "@/app/[locale]/components/timeline";
import topArrow from "../../../public/topArrow.svg"
import topArrowDark from "../../../public/topArrowDark.svg"
import Image from "next/image";

const Page = () => {
    const [backToTop, setBackToTop] = useState(false)
    const [display, setDisplay] = useState(false);
    const handleMenuClick = (event) => {
        event.preventDefault();
        setDisplay(!display);
    };

    const closeMobileMenu = () => {
        setDisplay(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="overflow-hidden bg-white dark:bg-dark">
            {display ? (
                <Menu onClose={closeMobileMenu}/>
            ) : (
                <>
                    <Nav onOpen={handleMenuClick}/>
                    {backToTop && (
                        <button
                            className="fixed flex justify-end items-end sm:mt-[710px] sm:ml-[1340px] bg-white shadow-lg dark:bg-gray-200
                             sm:px-4 sm:py-2 rounded-lg text-xs text:white dark:text:dark"
                            onClick={scrollUp}>
                            <div className="flex justify-center items-center">
                                <Image src={topArrow} alt="arrow_icon" className="hidden dark:block"/>
                                <Image src={topArrowDark} alt="arrow_dark" className="dark:hidden block"/>
                                <div className="sm:ml-3">
                                   Back To Top
                                </div>
                            </div>
                        </button>
                    )}
                    <section id="home">
                        <Home/>
                    </section>
                    <section id="about">
                        <About/>
                    </section>
                    <section id="timeline">
                        <Timeline/>
                    </section>
                    <section id="skill">
                        <Experience/>
                    </section>
                    <section id="project">
                        <Projects/>
                    </section>
                    <section id="contact">
                        <Contact/>
                    </section>
                    <Footer/>
                </>
            )}
        </div>
    );
};

export default Page;