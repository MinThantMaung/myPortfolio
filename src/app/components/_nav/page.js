'use client'
import React from 'react';
import Image from "next/image";
import menu from '../../../../public/hamberger.svg'
import menu_light from '../../../../public/hamberger_light.svg'
import Theme from "@/app/components/theme";
import {useRouter} from "next/navigation";

const Nav = ({onOpen}) => {
    const router = useRouter()
    const handleMenuOpen = (event) => {
        onOpen && onOpen(event);
    };

    const gotoMain = () => {
        router.push('/')
        console.log("hello")
    }
    return (
        <div>
            <div
                className="flex justify-between items-center sm:p-8 p-4 fixed bg-white w-full z-10 dark:bg-dark dark:text-white">
                <div className="sm:text-xl font-bold text-black dark:text-white cursor-pointer" onClick={gotoMain}>
                    MinThant.dev
                </div>
                <div className="flex mt-2">
                    <div className="ml-10 mt-[2px] sm:-mt-[4px]">
                        <Theme/>
                    </div>
                    <div className="hidden sm:block sm:text-base font-bold sm:ml-8">
                        <a href="#home">
                            Home
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-base font-bold sm:ml-8">
                        <a href="#about">
                            About
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-base font-bold sm:ml-8">
                        <a href="#timeline">
                            Career
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-base font-bold sm:ml-8">
                        <a href="#skill">
                            Skills
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-base font-bold sm:ml-8">
                        <a href="#project">
                            Projects
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-base font-bold sm:ml-8">
                        <a href="#contact">
                            Contact
                        </a>
                    </div>
                    <div className="flex sm:hidden ml-4">
                        <Image src={menu} alt="" className="dark:hidden w-7 h-7 mt-[5px]" onClick={handleMenuOpen}/>
                        <Image src={menu_light} alt="" className="hidden dark:block w-7 h-7 mt-[5px]"
                               onClick={handleMenuOpen} width="25" height="25"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;