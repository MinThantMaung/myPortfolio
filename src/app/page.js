'use client'
import React, {useState} from 'react';
import Home from "@/app/components/home";
import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Projects from "@/app/components/projects";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import Timeline from "@/app/components/timeline";
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
        <div>
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