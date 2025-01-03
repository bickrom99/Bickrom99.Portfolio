import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const cardsRef = useRef([]); 

    useEffect(() => {
        fetch("/api/DataAll.json")
            .then((response) => response.json())
            .then((Data) => {
                if (Data && Data.Services) {
                    setServiceData(Data.Services);
                } else {
                    console.error("Portfolio data not found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        // GSAP animation for cards
        if (cardsRef.current.length > 0) {
            gsap.set(cardsRef.current, { opacity: 0, y: 50 });
            gsap.to(cardsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        }
    }, [serviceData]);

    return (
        <div id="service" className="bg-gradient-to-b from-[#ffffff] via-[#f4eafc] to-[#e8f8ff] dark:from-[#1A1A1A] dark:via-[#2D2D2D] dark:to-[#3A3A3A] transition-all duration-300 min-h-screen pb-16">
            <div className="w-[90%] mx-auto">
                {/* Section Heading */}
                <div className="mt-4 mb-8 text-center">
                    <h2 className="font-semibold font-Vast_shadow text-2xl text-gray-800 dark:text-gray-100">
                        Our <span className="text-indigo-600">Services</span>
                    </h2>
                    <img src="/Images/line_design.png" alt="" className="w-[15%] mt-2 m-auto" />
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceData.map((data, index) => (
                        <div
                            key={data.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl border hover:bg-blue-500 ${
                                expandedIndex === index ? "border-blue-400 dark:border-gray-500" : "border-blue-200 dark:border-gray-700"
                            }`}
                            style={{
                                overflow: "hidden", 
                                height: expandedIndex === index ? "auto" : "min-content", 
                            }}
                        >
                            {/* Card Content */}
                            <h3 className="text-xl font-inter font-medium text-gray-800 dark:text-gray-100">{data.Title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300 font-Dm_font">{data.desc}</p>

                            {/* Toggleable Content */}
                            <div
                                className={`transition-all duration-500 ease-in-out ${
                                    expandedIndex === index ? "max-h-[500px]" : "max-h-0"
                                }`}
                            >
                                {expandedIndex === index && (
                                    <div className="mt-4">
                                        <p className="font-semibold font-inter mb-1">Features: <span className="text-gray-600 dark:text-gray-300 font-Dm_font font-normal">{data.features}</span></p>
                                        <p className="font-semibold font-inter mb-1">Technology: <span className="text-gray-600 dark:text-gray-300 font-Dm_font font-normal">{data.technologies}</span></p>
                                        <p className="font-semibold font-inter ">Delivery: <span className="text-gray-600 dark:text-gray-300 font-Dm_font font-normal">{data.estimatedDelivery}</span></p>
                                        
                                    </div>
                                )}
                            </div>

                            {/* Toggle Button */}
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="mt-6 w-[40%] m-auto group flex items-center gap-2 justify-center border-[1.3px] border-gray-300 font-Dm_font text-sm cursor-pointer py-1 rounded-md px-4 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:bg-[#ead8fe] hover:border-[#cea8fc]"
                            >
                                {expandedIndex === index ?

                                    "Less" : 
                                    "Read More"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
