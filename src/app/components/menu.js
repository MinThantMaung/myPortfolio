import React from 'react';
import Image from "next/image";
import close from '../../../public/close.svg'

const Menu = ({ onClose }) => {
    const handleMenuClose = () => {
        onClose && onClose();
    };

    return (
        <div className="w-full h-screen bg-white">
            <div onClick={handleMenuClose} className="bg-white flex justify-end pt-5 pr-5">
                <Image src={close} alt="" className="w-7 h-7"/>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
                <a href="#home" className="font-bold text-3xl" onClick={handleMenuClose}>
                    Home
                </a>
                <a href="#about" className="font-bold text-3xl mt-6" onClick={handleMenuClose}>
                    About
                </a>
                <a href="#timeline" className="font-bold text-3xl mt-6" onClick={handleMenuClose}>
                    Career
                </a>
                <a href="#skill" className="font-bold text-3xl mt-6" onClick={handleMenuClose}>
                    Skills
                </a>
                <a href="#project" className="font-bold text-3xl mt-6" onClick={handleMenuClose}>
                    Projects
                </a>
                <a href="#contact" className="font-bold text-3xl mt-6" onClick={handleMenuClose}>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Menu;
