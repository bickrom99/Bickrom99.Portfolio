import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [popupData, setPopupData] = useState(null); // popup data state
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup open/close state

    useEffect(() => {
        // Fetch portfolio data
        fetch('/api/DataAll.json')
            .then((response) => response.json())
            .then((fetchedData) => {
                if (fetchedData && fetchedData.Portfolio) {
                    setPortfolioData(fetchedData.Portfolio);
                } else {
                    console.error("Portfolio data not found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const itemsToShow = showAll ? portfolioData : portfolioData.slice(0, 6);

    const handleViewDetails = (item) => {
        setPopupData(item); // Set the clicked item data, which includes 'popup_info'
        setIsPopupOpen(true); // Open the popup
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false); // Close the popup
    };

    useEffect(() => {
        const items = gsap.utils.toArray(".portfolio-item");

        items.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            const overlay = item.querySelector(".overlay");
            const buttons = item.querySelector(".action-buttons");

            item.addEventListener("mouseenter", () => {
                gsap.to(overlay, { opacity: 0.8, duration: 0.3, ease: "power2.out" });
                gsap.to(buttons, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(item, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            });

            item.addEventListener("mouseleave", () => {
                gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(buttons, { opacity: 0, y: 20, duration: 0.3, ease: "power2.out" });
                gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });

        return () => {
            items.forEach((item) => {
                const overlay = item.querySelector(".overlay");
                const buttons = item.querySelector(".action-buttons");

                item.removeEventListener("mouseenter", () => {
                    gsap.to(overlay, { opacity: 0.8, duration: 0.3 });
                    gsap.to(buttons, { opacity: 1, y: 0, duration: 0.3 });
                    gsap.to(item, { scale: 1.05, duration: 0.3 });
                });

                item.removeEventListener("mouseleave", () => {
                    gsap.to(overlay, { opacity: 0, duration: 0.3 });
                    gsap.to(buttons, { opacity: 0, y: 20, duration: 0.3 });
                    gsap.to(item, { scale: 1, duration: 0.3 });
                });
            });
        };
    }, [itemsToShow]);

    return (
        <div id="projects" className="dark:bg-transparent transition-all duration-300 border-t-[3px] dark:border-none">
            <div className="w-[90%] m-auto py-8">
                <div className="text-center">
                    <h2 className="font-semibold font-Vast_shadow text-2xl text-gray-800 dark:text-gray-100 pt-8">
                        My Recent <span className="text-indigo-600">Portfolio</span>
                    </h2>
                    <img
                        className="w-[20%] dark:opacity-0 m-auto mt-2"
                        src="/Images/line_design.png"
                        alt="decorative"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-12 mt-6">
                    {itemsToShow.map((item) => (
                        <div
                            key={item.id}
                            className="portfolio-item relative bg-gradient-to-r from-[#ffffff] via-[#e8e8ff] shadow-lg rounded-lg p-4 overflow-hidden dark:bg-gradient-to-r dark:from-[#01054D] dark:to-[#010021] transform transition-transform dark:border-[1.3px] dark:border-[#F9CB15] dark:rounded-3xl dark:pb-6 dark:hover:shadow-md dark:hover:shadow-[#F6B724]"
                        >
                            <div className="overlay absolute inset-0 bg-gradient-to-t from-[#2b2a2a92] to-transparent opacity-0 transition-opacity duration-300"></div>

                            <img
                                src={item.image}
                                alt={item.Title}
                                className="w-full h-48 object-cover rounded-md dark:rounded-2xl pb-2 z-10"
                            />
                            <h3 className="font-inter font-bold mt-4 text-gray-800 dark:text-[#e6c854] z-10 relative">
                                {item.Title}
                            </h3>
                            <p className="text-sm font-Dm_font dark:font-inter text-gray-600 dark:text-white mt-2 z-10 relative">
                                {item.desc}
                            </p>

                            {/* View Details button */}
                            <div className="action-buttons absolute inset-0 flex items-center justify-center gap-4 opacity-0 translate-y-20 z-10">
                                <button
                                    onClick={() => handleViewDetails(item)}
                                    className="relative bg-[#5820FF] text-white font-inter text-sm py-2 px-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105 overflow-hidden group "
                                >
                                    <span className="absolute inset-0 bg-[#764AF1] w-0 transition-all duration-500 group-hover:w-full"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <FaEye /> View Details
                                    </span>
                                </button>
                                {/* Live Preview link */}
                                <a
                                    href={item.livePreviewLink}
                                    className="relative border-[1.3px] border-[#ffffff] text-white hover:text-black font-Dm_font text-sm py-2 px-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105 overflow-hidden group"
                                >
                                    <span className="absolute inset-0 bg-white w-0 transition-all duration-500 group-hover:w-full"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <FaExternalLinkAlt /> Live Preview
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Popup */}
                {isPopupOpen && popupData && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg sm:w-2/3 w-full h-full shadow-lg relative">
                            <button
                                onClick={handleClosePopup}
                                className="absolute top-2 right-4 z-50 text-3xl text-gray-500 hover:text-gray-800"
                            >
                                ×
                            </button>
                            {/* Popup header with sticky */}
                            <div className="sticky top-0 bg-white py-4 z-10">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg">{popupData.Title}</h3>
                                    <a href={popupData.livePreviewLink} className="relative bg-[#5820FF] text-white font-inter text-sm py-2 px-4 rounded-md cursor-pointer transition-transform transform hover:scale-105 overflow-hidden group">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <FaEye /> Live
                                    </span>
                                        
                                        </a>
                                </div>
                            </div>
                            {/* Popup image and content */}
                            <div className="overflow-auto max-h-[calc(100vh-20vh)]">
                                <img src={popupData.image} alt={popupData.Title} className="w-full h-48 object-cover mt-4 rounded-md" />
                                
                                <div className="mt-6">
                                    {/* Key Features: */}
                                    <h3 className="font-inter font-medium">Key Features:</h3>
                                    <ul className="list-disc pl-8 mt-1 mb-3 font-Dm_font text-sm leading-6">
                                        {popupData.popup_info.keyFeatures.map((feature, index) =>  (
                                            <li key={index}>{feature}</li>
                                        ))
                                        }
                                    </ul>
                                    {/* challengeFaced: */}
                                    <h3 className="font-inter font-medium">Challenges Faced:</h3>
                                    <ul className="list-disc pl-8 mt-1 mb-3 font-Dm_font text-sm leading-6">
                                        {popupData.popup_info.challengeFaced.map((challenge, index) =>  (
                                            <li key={index}>{challenge}</li>
                                        ))
                                        }
                                    </ul>
                                    {/* solutionApplied: */}
                                    <h3 className="font-inter font-medium">Challenges Faced:</h3>
                                    <ul className="list-disc pl-8 mt-1 mb-3 font-Dm_font text-sm leading-6">
                                        {popupData.popup_info.solutionApplied.map((solution, index) =>  (
                                            <li key={index}>{solution}</li>
                                        ))
                                        }
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )}

                {/* Toggle More/Less button */}
                <div className="flex justify-center pt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex items-center gap-2 justify-center border-[1.3px] border-gray-400 font-Dm_font text-sm cursor-pointer py-2 rounded-md px-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg dark:border-[#e7b913] dark:hover:bg-[#e7b913] dark:hover:text-black"
                    >
                        {showAll ? (
                            <>
                                Show Less<FaArrowUpLong className="group-hover:-translate-y-1 transition-transform duration-300" />
                            </>
                        ) : (
                            <>
                                Show More<FaArrowDownLong className="group-hover:translate-y-1 transition-transform duration-300" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
