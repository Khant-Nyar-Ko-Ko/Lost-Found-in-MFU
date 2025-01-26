import React from 'react';
import { BsAndroid2 } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa6';
import phone from "../../../public/images/phone.png";
import Image from 'next/image';
import example from "../../../public/images/example.jpeg";

const Home = () => {
    return (
        <div id='home' className=" text-white min-h-screen flex items-center justify-around px-[40px]">
            <div className='flex flex-col ms-[100px] items-start gap-4'>
                <header className="text-start">
                    <h1 className="text-5xl font-bold mb-4">Lost & Found in MFU</h1>
                    <p className="text-xl">Social Networking Platform</p>
                </header>
                <p className="text-start mt-6 max-w-2xl">
                    The Lost & Found app is a mobile application built using Flutter, designed to help users find and recover lost items. The app integrates with Firebase to provide secure, real-time data storage and retrieval, user authentication, and efficient item management.
                </p>
                <div className="mt-10 flex gap-10">
                    <button className="flex justify-center items-center gap-4 border border-white bg-white bg-opacity-10 text-white px-6 py-3 rounded-md shadow-lg font-medium hover:bg-slate-50 hover:text-cyan-500 duration-300">
                        <FaApple size={30} />
                        <div className='flex flex-col items-start'>
                            <p className='text-sm'>Download on the</p>
                            <p className='text-xl'>App Store</p>
                        </div>

                    </button>
                    <button className="flex justify-center items-center gap-4 border border-white bg-white bg-opacity-10 text-white px-6 py-3 rounded-md shadow-lg font-medium hover:bg-slate-50 hover:text-cyan-500 duration-300">
                        <BsAndroid2 size={30} />
                        <div className='flex flex-col items-start'>
                            <p className='text-sm'>Get it on</p>
                            <p className='text-xl'>Google Play</p>
                        </div>
                    </button>
                </div>
            </div>

            <div className="relative mt-16 flex justify-center">
                <Image
                    src={phone}
                    alt="App Screenshot"
                    className="w-[500px] z-10"
                    unoptimized
                />

                <Image
                    src={example}
                    alt="Example"
                    className="absolute w-[200px] h-[430px] top-[35px] left-[150px] z-0"
                    unoptimized
                />
            </div>

        </div>
    );
};

export default Home;
