'use client'
import React, {useState} from 'react';
import Image from "next/image";
import menu from '../../../public/hamberger.svg'
import menu_light from '../../../public/hamberger_light.svg'
import Theme from "@/app/components/theme";
import Menu from "@/app/components/menu";

const Nav = ({onOpen}) => {
    const handleMenuOpen = (event) => {
        onOpen && onOpen(event);
    };
    return (
        <div>
            <div
                className="flex justify-between items-center sm:p-8 p-4 fixed bg-white w-full z-10 dark:bg-dark dark:text-white">
                <div className="sm:text-xl font-bold">
                    MinThant.dev
                </div>
                <div className="flex">
                    <div className="ml-10 mt-[2px] sm:-mt-[2px]">
                        <Theme/>
                    </div>
                    <div className="hidden sm:block sm:text-lg font-bold sm:ml-8">
                        <a href="#home">
                            Home
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-lg font-bold sm:ml-8">
                        <a href="#about">
                            About
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-lg font-bold sm:ml-8">
                        <a href="#project">
                            Projects
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-lg font-bold sm:ml-8">
                        <a href="#contact">
                            Contact
                        </a>
                    </div>
                    <div className="flex sm:hidden ml-4">
                        <Image src={menu} alt="" className="dark:hidden w-7 h-7 mt-[5px]" onClick={handleMenuOpen}/>
                        <Image src={menu_light} alt="" className="hidden dark:block w-7 h-7 mt-[5px]" onClick={handleMenuOpen} width="25" height="25"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;