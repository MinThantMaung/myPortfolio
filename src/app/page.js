import React from 'react';
import Home from "@/app/components/home";
import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Projects from "@/app/components/projects";

const Page = () => {
    return (
        <div>
          {/*<Home />*/}
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Page;