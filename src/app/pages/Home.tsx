"use client";
import React from 'react';
import { BsAndroid2 } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa6';
import phone from "../../../public/images/phone.png";
import Image from 'next/image';
import example from "../../../public/images/HomePage.png";
import Link from 'next/link';

const Home = () => {
    return (
        <div id='home' className=" text-white min-h-screen flex flex-col md:flex-row items-center justify-around px-[40px] mb-10 md:mb-0">
            <div className='flex flex-col ms-4 mt-[140px] md:mt-0 md:ms-[100px] items-start gap-2 md:gap-4'>
                <header className="text-start">
                    <h1 className=" text-3xl md:text-5xl font-bold mb-4">Lost & Found in MFU</h1>
                    <p className=" text-base md:text-xl">Social Networking Platform</p>
                </header>
                <p className="text-start text-xs md:text-base mt-6 max-w-2xl">
                    The Lost & Found app is a mobile application built using Flutter, designed to help users find and recover lost items. The app integrates with Firebase to provide secure, real-time data storage and retrieval, user authentication, and efficient item management.
                </p>
                <div className=" mt-4 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-10">
                    <Link
                        href="https://youtu.be/WH5M6z5PzGs?si=BNAB8ffvdJXZ9ZYO"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-center items-center gap-1 md:gap-4 border border-white bg-white bg-opacity-10 text-white px-3 md:px-6 py-2 md:py-3 rounded-md shadow-lg font-medium hover:bg-slate-50 hover:text-cyan-500 duration-300">
                            <FaPlay className="text-[30px] md:text-[40px]" />
                            <div className='flex flex-col items-start'>
                                <p className=' text-xs md:text-sm'>You can</p>
                                <p className=' text-base md:text-xl'>View Demo</p>
                            </div>
                        </button>
                    </Link>
                    <Link
                        href="https://play.google.com/console/about/guides/getting-featured-on-google-play/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-center items-center gap-1 md:gap-4 border border-white bg-white bg-opacity-10 text-white px-3 md:px-6 py-2 md:py-3 rounded-md shadow-lg font-medium hover:bg-slate-50 hover:text-cyan-500 duration-300">
                            <BsAndroid2 className="text-[30px] md:text-[40px]" />
                            <div className='flex flex-col items-start'>
                                <p className='text-xs md:text-sm'>Get it on</p>
                                <p className='text-base md:text-xl'>Google Play</p>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="relative mt-16 flex justify-center">
                <Image
                    src={phone}
                    alt="App Screenshot"
                    className=" w-[300px] md:w-[500px] z-10"
                    unoptimized
                />

                <Image
                    src={example}
                    alt="Example"
                    className="absolute w-[120px] md:w-[200px] h-[258px] md:h-[430px] top-[20px] md:top-[34px] md:left-[150px] z-0"
                    unoptimized
                />
            </div>

        </div>
    );
};

export default Home;
