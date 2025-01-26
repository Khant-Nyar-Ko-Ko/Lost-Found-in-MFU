"use client";

import React from "react";
import Marquee from "react-fast-marquee";

interface Testimonial {
    name: string;
    role: string;
    feedback: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Pyae Phyo Zaw",
        role: "Fourth Year Student @MFU",
        feedback: "The Lost & Found app has been a lifesaver for our students. I once misplaced my student ID card, and thanks to this app, it was returned to me within a day! It's an essential tool for our university community."
    },
    {
        name: "Amara Won",
        role: "Lecturer @MFU IT Department",
        feedback: "I was impressed by the app's design and functionality. The interface is user-friendly and intuitive. It's amazing how efficiently students and staff can now recover lost items. Kudos to the team behind this!"
    },
    {
        name: "Win Hlaing Moe",
        role: "Senior Developer @GlobalTech Co.",
        feedback: "This app is a great example of technology solving real-life problems. I had the chance to see how it works when I visited MFU, and I was blown away by its simplicity and effectiveness. A brilliant initiative by the students!"
    },
    {
        name: "Nadiya Acharya",
        role: "Event Organizer @MFU Cultural Club",
        feedback: "The Lost & Found app has made a huge difference during large events. Items like umbrellas, wallets, and bags that used to get misplaced all the time are now returned to their owners quickly. It's a game-changer!"
    },
    {
        name: "Thanakorn Chaiyasit",
        role: "Campus Security Officer @MFU",
        feedback: "Managing lost items used to be a hassle, but this app has simplified the process immensely. It's great to see students and staff taking responsibility for creating something that benefits everyone on campus."
    },
];

const Testimonial = () => {
    const loopedTestimonials = [...testimonials, ...testimonials];

    return (
        <div id="testimonial" className="md:py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-extrabold text-white">Testimonials</h2>
                <p className="mt-4 text-sm md:text-base text-gray-100">
                    Here are the feedbacks from the app
                </p>
            </div>
            <Marquee pauseOnHover={true}>
                <div
                    className="flex overflow-x-scroll scrollbar-hide my-6"
                    style={{
                        scrollBehavior: "smooth",
                    }}
                >
                    {loopedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[250px] md:w-[320px] flex-shrink-0 flex-grow-0 relative group border h-[160px] md:h-[180px] mx-4 p-3 md:p-6 shadow-lg rounded-lg flex flex-col items-center text-center snap-center bg-gray-50"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-gray-800">{testimonial.name}</h3>
                            <p className="text-xs md:text-md text-gray-600 font-semibold line-clamp-1">
                                {testimonial.role}
                            </p>
                            <p className="text-xs md:text-md mt-4 text-start text-gray-600 line-clamp-2 md:line-clamp-4">
                                {testimonial.feedback}
                            </p>
                            <div className="absolute z-10 shadow left-6 bottom-5 w-[280px] bg-lightbackground1 bg-gray-700 text-gray-500 dark:text-white text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {testimonial.feedback}
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;
