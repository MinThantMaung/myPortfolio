'use client'
import React, {useState} from 'react';
import Home from "@/app/[locale]/components/home/page";
import About from "@/app/[locale]/components/about/page";
import Contact from "@/app/[locale]/components/contact/page";
import Projects from "@/app/[locale]/components/project/page";
import Nav from "@/app/[locale]/components/_nav/page";
import Footer from "@/app/[locale]/components/_footer/page";
import Menu from "@/app/[locale]/components/menu/page";
import Experience from "@/app/[locale]/components/experience/page";
import Timeline from "@/app/[locale]/components/timeline";
import {useTranslations} from 'next-intl';

const Page = () => {
    const [display, setDisplay] = useState(false);
    const handleMenuClick = (event) => {
        // event.preventDefault();
        setDisplay(!display);
    };

    const closeMobileMenu = () => {
        setDisplay(false);
    };
    return (
        <div className="overflow-hidden">
            {display ? (
                <Menu onClose={closeMobileMenu} />
            ) : (
                <>
                    <Nav onOpen={handleMenuClick}/>
                    <section id="home">
                        <Home/>
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="timeline">
                        <Timeline />
                    </section>
                    <section id="skill">
                        <Experience />
                    </section>
                    <section id="project">
                        <Projects />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;