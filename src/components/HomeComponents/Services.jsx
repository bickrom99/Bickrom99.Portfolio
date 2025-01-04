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
        <div id="service" className="dark:bg-transparent transition-all duration-300 border-t-[3px] dark:border-none min-h-screen pb-16">
            <div className="w-[90%] mx-auto">
                {/* Section Heading */}
                <div className="mt-4 mb-8 text-center">
                    <h2 className="font-semibold font-Vast_shadow text-2xl dark:text-3xl text-gray-800 dark:text-gray-100">
                        Our <span className="text-indigo-600">Services</span>
                    </h2>
                    <img src="/Images/line_design.png" alt="" className="w-[15%] mt-2 m-auto dark:opacity-0" />
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceData.map((data, index) => (
                        <div
                            key={data.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl border hover:bg-blue-500 dark:bg-gradient-to-r dark:from-[#01054D] dark:to-[#010021] dark:border-[1.3px] dark:border-[#F9CB15] dark:rounded-3xl dark:pb-6 dark:hover:shadow-md dark:hover:shadow-[#F6B724] ${
                                expandedIndex === index ? "border-blue-400 dark:border-gray-500" : "border-blue-200 dark:border-[#F9CB15]"
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
                                        <p className="font-semibold font-inter mb-1 dark:text-[#E6C854]">Features: <span className="text-gray-600 dark:text-gray-300 font-Dm_font font-normal"> {data.features}</span></p>
                                        <p className="font-semibold font-inter mb-1 dark:text-[#E6C854]">Technology: <span className="text-gray-600 dark:text-gray-300 font-Dm_font font-normal"> {data.technologies}</span></p>
                                        <p className="font-semibold font-inter dark:text-[#E6C854]">Delivery: <span className="text-gray-600 dark:text-gray-300 font-Dm_font font-normal">{data.estimatedDelivery}</span></p>
                                        
                                    </div>
                                )}
                            </div>

                            {/* Toggle Button */}
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="mt-6 w-[40%] m-auto group flex items-center gap-2 justify-center border-[1.3px] border-gray-300 font-Dm_font text-sm cursor-pointer py-1 rounded-md px-4 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:bg-[#ead8fe] hover:border-[#cea8fc] dark:hover:bg-white dark:hover:text-black"
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
