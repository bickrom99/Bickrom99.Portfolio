import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
    const [faqData, setFaqData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        fetch("/api/DataAll.json")
            .then((response) => response.json())
            .then((data) => {
                if (data && data.Faq) {
                    setFaqData(data.Faq);
                } else {
                    console.error("FAQ data not found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching FAQ data:", error);
            });
    }, []);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-b from-[#f8f9fa] via-[#eaf4fc] to-[#e8faff] dark:from-[#1A1A1A] dark:via-[#2D2D2D] dark:to-[#2A2A2A] transition-all duration-300 py-16 min-h-screen">
            <div className="w-[90%] mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        FAQ’s <span className="text-blue-600">Section</span>
                    </h2>
                    <img src="/Images/line_design.png" alt="line" className="w-[15%] m-auto" />
                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium text-lg">
                        Frequently Asked Questions for better understanding
                    </p>
                </div>

                {/* FAQ Content */}
                <div className="mt-5 space-y-4">
                    {faqData.length > 0 ? (
                        faqData.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden transition-all"
                            >
                                {/* Question Section */}
                                <div
                                    onClick={() => handleToggle(index)}
                                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        {faq.Question}
                                    </h3>
                                    {activeIndex === index ? (
                                        <FaChevronUp className="text-blue-600 text-xl" />
                                    ) : (
                                        <FaChevronDown className="text-gray-500 dark:text-gray-300 text-xl" />
                                    )}
                                </div>

                                {/* Answer Section */}
                                <div
                                    className={`transition-all duration-300 ${
                                        activeIndex === index
                                            ? "max-h-[500px] opacity-100 p-4"
                                            : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                                >
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                                        {faq.Answer}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            Loading FAQ data...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Faq;