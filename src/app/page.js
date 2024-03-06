'use client'
import React, {useState} from 'react';
import Home from "@/app/components/home/page";
import About from "@/app/components/about/page";
import Contact from "@/app/components/contact/page";
import Projects from "@/app/components/project/page";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu/page";
import Timeline from "@/app/components/timeline/page";
import Experience from "@/app/components/experience/page";
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