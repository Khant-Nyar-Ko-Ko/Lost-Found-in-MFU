"use client"
import React, { useState } from "react";

const Faq = () => {
    // FAQ data
    const faqs = [
        {
            question: "What is this app about?",
            answer: "This app is designed to help users track and improve their mental health with personalized features and a social platform.",
        },
        {
            question: "Is the app free to use?",
            answer: "Yes! The app offers free access to core features, with optional premium plans for additional benefits.",
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Absolutely! You can cancel your subscription anytime from your account settings.",
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach out to us via the contact form in the app or by emailing support@example.com.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Toggle function for accordion
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">Frequently Asked Questions</h2>
                <p className="mt-4 text-gray-600 text-center">
                    Find answers to some of the most common questions about our app.
                </p>

                {/* Accordion */}
                <div className="mt-8 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        >
                            {/* Question */}
                            <button
                                className="w-full flex justify-between items-center p-4 bg-gradient-to-br from-blue-400 to-teal-400 text-left text-white font-semibold"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="ml-4">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="p-4 bg-gray-50 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
