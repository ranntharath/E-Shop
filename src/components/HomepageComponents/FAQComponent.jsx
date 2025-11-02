import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const faqs = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept Bakong payment methods.",
    },
    {
        question: "How long does the product shipping take?",
        answer: "Shipping typically takes 5-7 business days depending on your location.",
    },
    {
        question: "Can I see my order history?",
        answer:
            "Absolutely! Once your order has been success, You'll able to see your order history ."
    },
];

export default function FAQComponent() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-6 text-primary-color">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`rounded-lg p-4 md:p-6 cursor-pointer transition-all bg-white`}
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3
                                    className={`text-lg font-medium ${isOpen ? "text-[#f25c47] " : "text-gray-800"
                                        }`}
                                >
                                    {faq.question}
                                </h3>
                                <span
                                    className={`transform transition-transform ${isOpen ? "rotate-180 text-[#f25c47]" : ""
                                        }`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>

                            {isOpen && (
                                <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
