"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image'; // Next.js Image component
import phone from '../../../public/images/phone.png'; // Replace with your phone PNG path
import screen1 from '../../../public/images/example.jpeg'; // Example screenshot images
import screen2 from '../../../public/images/example.jpeg';
import screen3 from '../../../public/images/example.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Screenshot = () => {
    const exampleScreens = [screen1, screen2, screen3];

    return (
        <section id='screenshot' className="bg-gray-50 py-14">
            <div className="container mx-auto text-center px-4">
                <div className='flex flex-col gap-4 justify-center items-center my-6'>
                    <h2 className="text-3xl font-bold  text-gray-800 ">App Screenshot</h2>
                    <p className='text-gray-600 w-[700px]'>To create a reliable solution for reuniting people with their lost belongings while providing a simple and accessible interface for reporting and searching for items</p>
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
                        className="max-w-4xl mx-auto"
                    >
                        {exampleScreens.map((screen, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative mt-16 flex justify-center">
                                    {/* Phone Image */}
                                    <Image
                                        src={phone}
                                        alt="App Screenshot"
                                        className="w-[500px] z-10"
                                    />
                                    {/* Example Image in the Phone Screen */}
                                    <Image
                                        src={screen}
                                        alt={`Example ${index + 1}`}
                                        className="absolute w-[200px] h-[400px] top-16 left-[350px] z-0" // Adjust size and position for perfect alignment
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
