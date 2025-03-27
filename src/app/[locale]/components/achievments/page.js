"use client";
import Image from "next/image";
import React, { useState } from "react";
import cs50 from '../../../../../public/cs50.png'

const Achievements = () => {
    const gotoCs50 = () => {
        window.open("https://certificates.cs50.io/75daceaf-b362-445f-8291-183453d6c38a.pdf?size=letter")
    }
  return (
    <div className="flex justify-center w-full h-full bg-white dark:bg-dark text-gray-700 dark:text-white md:pl-4 md:pr-4">
      <div className="w-full max-w-5xl">
        <div className="font-bold text-blue-600 sm:pt-28 pt-20 pl-4 pr-2 bg-white dark:bg-dark">
          Achievements
        </div>
        <div className="font-bold text-2xl pl-4 pr-2 pt-2 text-black dark:text-white bg-white dark:bg-dark">
          Professional Achievements & Growth
        </div>
        <div className="shadow-lg rounded-lg bg-white dark:bg-dark sm:w-1/3 text-black dark:text-white pl-4 pr-4 sm:pr-0 mt-16
        ml-2 mr-2 md:ml-4 md:mr-4 cursor-pointer" onClick={gotoCs50}>
            <div className="max-h-32 overflow-hidden group rounded-xl mt-10 flex justify-center items-center">
                <Image src={cs50} alt="harvard"
                className="rounded-lg" width={100} height={100}/>
            </div>
            <div className="ml-4 mb-2">
                <div className="text-lg">CS50</div>
                <div className="text-xs">Issued March 2025</div>
                <div className="text-xs pb-4">Credential ID: 75daceaf-b362-445f-8291-183453d6c38a</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
