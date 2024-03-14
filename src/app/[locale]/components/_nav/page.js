'use client'
import React from 'react';
import Image from "next/image";
import menu from '../../../../../public/hamberger.svg'
import menu_light from '../../../../../public/hamberger_light.svg'
import lang_white from '../../../../../public/lang_white.png'
import lang_dark from '../../../../../public/lang_dark.png'
import usa from '../../../../../public/flags/usa.png'
import jp from '../../../../../public/flags/jp.png'
import spain from '../../../../../public/flags/spain.png'
import Theme from "@/app/[locale]/components/theme";
import {useRouter} from "next/navigation";
import {useTranslations} from 'next-intl';

const Nav = ({onOpen}) => {
    const router = useRouter()
    const t = useTranslations('Index');
    const handleMenuOpen = (event) => {
        onOpen && onOpen(event);
    };

    const gotoMain = () => {
        router.push('/')
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
                            {t('nav_home')}
                        </a>
                    </div>
                    <div className="hidden sm:block sm:text-base font-bold sm:ml-8">
                        <a href="#about">
                            {t('nav_about')}
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
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button"
                             className="sm:ml-8 sm:text-base font-bold ml-3 mt-[6px] sm:mt-0">
                            <Image src={lang_white} alt="lang_dark" className="hidden dark:block w-6 h-6"/>
                            <Image src={lang_dark} alt="lang_white" className="dark:hidden w-6 h-6"/>
                        </div>
                        <ul tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-base-100 rounded-box w-[90px] sm:mt-2">
                            <li><a href="/en">
                                <div className="flex">
                                    <div>
                                        en
                                    </div>
                                    <div className="flex ml-2 mt-[2px]">
                                        <Image src={usa} alt="flag_usa" className="w-4 h-4"/>
                                    </div>
                                </div>
                            </a></li>
                            <li><a href="/jp">
                                <div className="flex">
                                    <div>
                                        jp
                                    </div>
                                    <div className="flex ml-3 mt-[2px]">
                                        <Image src={jp} alt="flag_usa" className="w-4 h-4"/>
                                    </div>
                                </div>
                            </a></li>
                            <li><a href="/es">
                                <div className="flex">
                                    <div>
                                        es
                                    </div>
                                    <div className="flex ml-[8px] mt-[2px]">
                                        <Image src={spain} alt="flag_spain" className="w-4 h-4"/>
                                    </div>
                                </div>
                            </a></li>
                        </ul>
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