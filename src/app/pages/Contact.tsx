import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-50 sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-gray-100">
                        Have questions or need help? Feel free to reach out to us using the form below.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <form action="#" method="POST">
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className=" text-black mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="text-black mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="text-black mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                                    placeholder="Enter subject"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className=" text-black mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-cyan-600 text-white py-3 rounded-md font-medium hover:bg-cyan-700 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="  flex flex-col justify-center bg-white shadow-md rounded-lg p-8">
                        <div className="relative w-[full] h-[300px] border-0 mb-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29985.150803018405!2d99.88995585!3d20.04441655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1736904961436!5m2!1sen!2sth"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact Information
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Feel free to reach out directly via email or phone.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3">
                                    📧
                                </span>
                                <a href="mailto:support@example.com" className="text-gray-700">
                                    6631503061@lamduan.mfu.ac.th
                                </a>
                            </div>
                            <div className="flex items-center">
                                <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3">
                                    📞
                                </span>
                                <p className="text-gray-700">+66 (9) 9-782-0067</p>
                            </div>
                            <div className="flex items-center">
                                <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3">
                                    📍
                                </span>
                                <p className="text-gray-700">Mae Fah Luang University, Chiang Rai, Thailand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Contact;
