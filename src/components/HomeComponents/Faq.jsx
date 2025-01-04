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
        <div className="dark:bg-transparent transition-all duration-300 border-t-[3px] dark:border-none py-16 min-h-screen">
            <div className="w-[90%] mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 font-Vast_shadow">
                        FAQ’s <span className="text-blue-600">Section</span>
                    </h2>
                    <img src="/Images/line_design.png" alt="line" className="w-[15%] m-auto dark:opacity-0" />
                    <p className="mt-2 dark:mt-0 text-gray-600 dark:text-gray-300 font-medium text-lg">
                        Frequently Asked Questions for better understanding
                    </p>
                </div>

                {/* FAQ Content */}
                <div className="mt-5 space-y-4">
                    {faqData.length > 0 ? (
                        faqData.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="bg-white dark:bg-gradient-to-b dark:from-[#161b3f] dark:to-[#1d1a50] shadow rounded-lg overflow-hidden transition-all"
                            >
                                {/* Question Section */}
                                <div
                                    onClick={() => handleToggle(index)}
                                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-[#151243] transition-all"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-[#d4d4d4] dark:font-Dm_font">
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
