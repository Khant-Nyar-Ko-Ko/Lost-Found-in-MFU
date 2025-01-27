"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image'; // Next.js Image component
import phone from '../../../public/images/phone.png'; // Replace with your phone PNG path
import screen1 from '../../../public/images/Signup.png'; // Example screenshot images
import screen2 from '../../../public/images/Home.png';
import screen3 from '../../../public/images/Search.png';
import screen4 from '../../../public/images/Chats.png'; // Example screenshot images
import screen5 from '../../../public/images/Chat-id.png';
import screen6 from '../../../public/images/Notification.png';
import screen7 from '../../../public/images/PostDeatil.png'; // Example screenshot images
import screen8 from '../../../public/images/Profile.png';
import screen9 from '../../../public/images/upload.jpg';
import screen10 from '../../../public/images/Logout.png'; // Example screenshot images
import { Swiper, SwiperSlide } from 'swiper/react';

const Screenshot = () => {
    const exampleScreens = [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10];

    return (
        <section id='screenshot' className="bg-gradient-to-tr from-white to-slate-300 py-14">
            <div className="container mx-auto text-center px-4">
                <div className='flex flex-col gap-4 justify-center items-center my-6'>
                    <h2 className=" text-2xl md:text-4xl font-bold  text-gray-800 ">App Screenshot</h2>
                    <p className='text-sm md:text-base mx-2 md:mx-0 text-gray-600 w-full md:w-[700px]'>To create a reliable solution for reuniting people with their lost belongings while providing a simple and accessible interface for reporting and searching for items</p>
                </div>
                <div className="relative">
                    {/* Swiper Component */}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        className="md:max-w-4xl mx-auto"
                    >
                        {exampleScreens.map((screen, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative md:mt-16 flex justify-center">
                                    {/* Phone Image */}
                                    <Image
                                        src={phone}
                                        alt="App Screenshot"
                                        className=" w-[300px] md:w-[500px] z-10"
                                    />
                                    {/* Example Image in the Phone Screen */}
                                    <Image
                                        src={screen}
                                        alt={`Example ${index + 1}`}
                                        className="absolute w-[120px] md:w-[208px] h-[260px] md:h-[431px] rounded-lg top-5 md:top-9 md:left-[344px] z-0" // Adjust size and position for perfect alignment
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Screenshot;
