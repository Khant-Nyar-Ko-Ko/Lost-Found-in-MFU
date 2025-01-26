import Image from 'next/image';
import React from 'react';
import { FaCommentDots, FaDownload, FaStar } from 'react-icons/fa6';
import { MdOutlinePerson } from 'react-icons/md';
import example from "../../../public/images/example.jpeg";

const Features = () => {
    const metaData = [
        {
            icon: <FaDownload size={30} />,
            number: 0,
            text: "Downloads"
        },
        {
            icon: <FaStar size={30} />,
            number: 0,
            text: "Ratings"
        },
        {
            icon: <FaCommentDots size={30} />,
            number: 0,
            text: "Comments"
        },
        {
            icon: <MdOutlinePerson size={30} />,
            number: 0,
            text: "Happy Clients"
        }
    ]
    return (
        <section id='features' className=" py-8 md:py-20 flex flex-col gap-6 justify-around items-center w-screen">
            <div className='flex flex-col gap-4 justify-center items-center my-10'>
                <h2 className="text-2xl md:text-4xl font-semibold ">Special Features</h2>
                <p className='text-sm md:text-base mx-3 md:mx-0 text-white'>Users no longer need to post on social media or multiple forums to find their lost items.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-around gap-10 w-screen">
                {/* Image Section */}
                <div className="px-4">
                    <Image
                        src={example}
                        alt="App Mockup"
                        className="rounded-lg shadow-lg mx-auto w-[120px]  md:w-[160px]"
                    />
                </div>
                {/* Features Section */}
                <div className="px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 text-left">
                        {[
                            'User Registration & Profile',
                            'Lost/Found Item Reporting',
                            'In-App Messaging',
                            'Real-Time Notifications',
                            'Item Search & Match System',
                            'Easy to Use',
                            'Item Categories',
                            'Clean Code',
                            'Full Support'
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-cyan-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="px-3 md:px-6 py-1 md:py-3 bg-teal-700 text-white font-light md:font-medium rounded-lg shadow-md hover:bg-teal-600 transition">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-start md:items-center gap-4 md:gap-10 mt-2 md:mt-10'>
                {metaData.map((data, index) => (
                    <div className='flex gap-4 justify-center items-center' key={index}>
                        <p className=' px-4 py-3 border rounded'>{data.icon}</p>
                        <div className='flex flex-row gap-2 md:gap-0 md:flex-col justify-center items-start px-4 py-3'>
                            <h4>{data.number}</h4>
                            <p>{data.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
