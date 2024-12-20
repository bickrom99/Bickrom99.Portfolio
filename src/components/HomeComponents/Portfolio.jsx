import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // Fetch portfolio data
        fetch('/public/api/DataAll.json')
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

    // Limit the displayed items based on the showAll state
    const itemsToShow = showAll ? portfolioData : portfolioData.slice(0, 6);

    // GSAP animation and hover effects
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

        // Clean up event listeners when items change
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
        <div className="bg-gradient-to-b from-[#ffffff] via-[#f4eafc] to-[#e8f8ff] dark:from-[#1A1A1A] dark:via-[#2D2D2D] dark:to-[#3A3A3A] transition-all duration-300 min-h-screen">
            <div className="w-[90%] m-auto py-8">
                <div className="text-center">
                    <h2 className="font-semibold font-Vast_shadow text-2xl text-gray-800 dark:text-gray-100">
                        My Recent <span className="text-indigo-600">Portfolio</span>
                    </h2>
                    <img
                        className="w-[10%] m-auto mt-2"
                        src="/Images/line_design.png"
                        alt="decorative"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {itemsToShow.map((item) => (
                        <div
                            key={item.id}
                            className="portfolio-item relative bg-gradient-to-r from-[#ffffff] via-[#e8e8ff] shadow-lg rounded-lg p-4 overflow-hidden dark:bg-gradient-to-r dark:from-[#2D2D2D] dark:to-[#444444] transform transition-transform"
                        >
                            <div className="overlay absolute inset-0 bg-gradient-to-t from-[#2b2a2a92] to-transparent opacity-0 transition-opacity duration-300"></div>

                            <img
                                src={item.image}
                                alt={item.Title}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="text-md font-inter font-bold mt-4 text-gray-800 dark:text-gray-100 z-10 relative">
                                {item.Title}
                            </h3>
                            <p className="text-sm font-Dm_font text-gray-600 dark:text-gray-400 mt-2 z-10 relative">
                                {item.desc}
                            </p>

                            <div className="action-buttons absolute inset-0 flex items-center justify-center gap-4 opacity-0 translate-y-20 z-10">
                                <a className="relative bg-[#5820FF] text-white font-inter text-sm py-2 px-4 rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105 overflow-hidden group">
                                    <span className="absolute inset-0 bg-[#764AF1] w-0 transition-all duration-500 group-hover:w-full"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <FaEye /> View Details
                                    </span>
                                </a>
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

                {/* Toggle More/Less button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex items-center gap-2 justify-center border-[1.3px] border-gray-400 font-Dm_font text-sm cursor-pointer py-2 rounded-md px-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
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
