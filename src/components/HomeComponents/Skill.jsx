import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

// Font Awesome & Simple Icons
import {
    FaBootstrap,
    FaCloudUploadAlt,
    FaCog,
    FaCogs,
    FaCss3Alt,
    FaCubes,
    FaElementor,
    FaEnvelope,
    FaFigma, FaFileWord, FaGitAlt, FaGithub, FaHtml5, FaJs,
    FaLeaf, FaMagic,
    FaPalette,
    FaReact,
    FaRegStar,
    FaRocket,
    FaSass,
    FaSearch,
    FaShieldAlt,
    FaShoppingCart,
    FaStar,
    FaWater,
    FaWpforms
} from "react-icons/fa";
// Si font
import {
    SiAdobexd,
    SiElementor, SiFirebase, SiFramer, SiNextdotjs,
    SiSlideshare,
    SiTailwindcss,
} from "react-icons/si";

const Skill = () => {
    const [activeTab, setActiveTab] = useState("frontend"); // Tab state
    const tabRef = useRef([]); // Refs for buttons
    const lineRef = useRef(null); // Ref for vertical line

    useEffect(() => {
        // Add border animation for active tab
        tabRef.current.forEach((tab, index) => {
            if (tab) {
                if (index === (activeTab === "frontend" ? 0 : 1)) {
                    gsap.to(tab, {
                        border: "3px solid #6d28d9", // Soft purple
                        boxShadow: "0 0 15px rgba(109, 40, 217, 0.4)", // Glowing effect
                        duration: 0.5,
                        ease: "power3.out",
                    });
                } else {
                    gsap.to(tab, {
                        border: "1.3px solid #e5e7eb", // Neutral gray
                        boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // No glow
                        duration: 0.5,
                        ease: "power3.out",
                    });
                }
            }
        });

        // GSAP animation for gradient color on the vertical line
        if (lineRef.current) {
            gsap.to(lineRef.current, {
                backgroundPosition: "0% 100%", // Start position
                backgroundSize: "100% 200%",
                backgroundImage: "linear-gradient(to top, #f7a7f7, #6d28d9)", // Gradient color
                duration: 2,
                repeat: -1, // Make it loop
                yoyo: true, // Reverse the animation
                ease: "sine.inOut", // Smooth animation
            });
        }
    }, [activeTab]);

    return (
        <div id="skills" className="bg-gradient-to-b from-[#e8f8ff] via-[#f4eafc] to-[#ffffff] dark:from-[#2d2d2d] dark:via-[#3b3b3b] dark:to-[#1A1A1A] min-h-screen py-16">
            <div className="w-[90%] mx-auto">
                <div className="text-center">
                    <h2 className="font-semibold font-Vast_shadow text-2xl text-gray-800 dark:text-gray-100">
                    Technologies<span className="text-indigo-600"> & Tools</span>
                    </h2>
                    <img
                        className="w-[70%] sm:w-[25%] m-auto mt-2"
                        src="/Images/line_design.png"
                        alt="decorative"
                    />
                </div>

                {/* Tab Buttons */}
                <div className="flex gap-5 justify-center items-center mt-5">
                    {/* Frontend Button */}
                    <button
                        ref={(el) => (tabRef.current[0] = el)} // Assign ref
                        onClick={() => setActiveTab("frontend")}
                        className={`flex items-center gap-2 justify-center font-inter text-sm cursor-pointer py-2 rounded-md px-4 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${activeTab === "frontend" ? "bg-gradient-to-r from-[#6d28d9] to-[#b794f4] text-white" : "bg-[#f0f9ff] text-gray-800"}`}
                    >
                        Frontend Dev
                    </button>

                    {/* WordPress Button */}
                    <button
                        ref={(el) => (tabRef.current[1] = el)} // Assign ref
                        onClick={() => setActiveTab("wordpress")}
                        className={`flex items-center gap-2 justify-center font-inter text-sm cursor-pointer py-2 rounded-md px-4 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${activeTab === "wordpress" ? "bg-gradient-to-r from-[#6d28d9] to-[#b794f4] text-white" : "bg-[#f0f9ff] text-gray-800"}`}
                    >
                        WordPress Dev
                    </button>
                </div>

                {/* Frontend Development Tools */}
                {activeTab === "frontend" && (
                    <div className="mt-12 text-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-7 gap-y-6">
                            <div className="group Skills-button">
                                <FaHtml5 className="text-orange-600 Skills-icon" />
                                <span className="Skills-Text">HTML5</span>
                            </div>
                            <div className="group Skills-button">
                                <FaCss3Alt className="text-blue-600 Skills-icon" />
                                <span className="Skills-Text">CSS3</span>
                            </div>
                            <div className="group Skills-button">
                                <FaSass className="text-pink-500 Skills-icon" />
                                <span className="Skills-Text">Sass</span>
                            </div>
                            <div className="group Skills-button">
                                <FaJs className="text-yellow-400 Skills-icon" />
                                <span className="Skills-Text">JavaScript</span>
                            </div>
                            <div className="group Skills-button">
                                <SiTailwindcss className="text-cyan-500 Skills-icon" />
                                <span className="Skills-Text">Tailwind CSS</span>
                            </div>
                            <div className="group Skills-button">
                                <FaBootstrap className="text-purple-600 Skills-icon" />
                                <span className="Skills-Text">Bootstrap</span>
                            </div>
                            <div className="group Skills-button">
                                <FaReact className="text-blue-500 Skills-icon" />
                                <span className="Skills-Text">React JS</span>
                            </div>
                            <div className="group Skills-button">
                                <SiNextdotjs className="text-gray-800 dark:text-white Skills-icon" />
                                <span className="Skills-Text">Next JS</span>
                            </div>
                            <div className="group Skills-button">
                                <SiFramer className="text-pink-600 Skills-icon" />
                                <span className="Skills-Text">Framer Motion</span>
                            </div>
                            <div className="group Skills-button">
                                <SiFirebase className="text-yellow-500 Skills-icon" />
                                <span className="Skills-Text">Firebase</span>
                            </div>
                            <div className="group Skills-button">
                                <FaGitAlt className="text-orange-600 Skills-icon" />
                                <span className="Skills-Text">Git</span>
                            </div>
                            <div className="group Skills-button">
                                <FaGithub className="text-gray-800 Skills-icon" />
                                <span className="Skills-Text">GitHub</span>
                            </div>
                            <div className="group Skills-button">
                                <FaFigma className="text-purple-500 Skills-icon" />
                                <span className="Skills-Text">Figma</span>
                            </div>
                            <div className="group Skills-button">
                                <SiAdobexd className="text-red-600 Skills-icon" />
                                <span className="Skills-Text">Adobe XD</span>
                            </div>
                            <div className="group Skills-button">
                                <FaFileWord className="text-blue-500 Skills-icon" />
                                <span className="Skills-Text">MS Word</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* WordPress Development Tools */}
                {activeTab === "wordpress" && (
                    <div className="mt-12 text-center">
                        <div className="flex sm:flex-row flex-col gap-10 justify-between items-stretch">
                            {/* WordPress Theme Section */}
                            <div className="sm:w-1/2 flex flex-col">
                                <h2 className="font-semibold sm:text-lg text-gray-800 dark:text-gray-100 border-b-2 border-[#5671f7] font-inter pb-2">
                                    WordPress Theme
                                </h2>
                                <div className="grid grid-cols-2 gap-5 mt-5 flex-grow">
                                    {/* Add Themes */}
                                    <div className="group Skills-button hover:scale-105">
                                        <FaRegStar className="text-[#6a1b9a] Skills-icon" /> {/* Astra - Purple */}
                                        <span className="Skills-Text">Astra</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaCubes className="text-[#1f2c6b] Skills-icon" /> {/* Divi - Blue */}
                                        <span className="Skills-Text">Divi</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaWater className="text-[#1e8e94] Skills-icon" /> {/* OceanWP - Teal */}
                                        <span className="Skills-Text">OceanWP</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaCog className="text-[#1b1b1b] Skills-icon" /> {/* GeneratePress - Dark Gray */}
                                        <span className="Skills-Text">GeneratePress</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaMagic className="text-[#f15a29] Skills-icon" /> {/* Avada - Orange */}
                                        <span className="Skills-Text">Avada</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <SiElementor className="text-[#007cba] Skills-icon" /> {/* Hello Elementor - Blue */}
                                        <span className="Skills-Text sm:text-base text-xs">Hello Elementor</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaStar className="text-[#e42b4b] Skills-icon" /> {/* Neve - Red */}
                                        <span className="Skills-Text">Neve</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaEnvelope className="text-[#f29c11] Skills-icon" /> {/* Enfold - Yellow */}
                                        <span className="Skills-Text">Enfold</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaLeaf className="text-[#53b13b] Skills-icon" /> {/* Salient - Green */}
                                        <span className="Skills-Text">Salient</span>
                                    </div>
                                    <div className="group Skills-button hover:scale-105">
                                        <FaPalette className="text-[#ff7426] Skills-icon" /> {/* BeTheme - Orange */}
                                        <span className="Skills-Text">BeTheme</span>
                                    </div>
                                </div>

                            </div>

                            {/* Vertical Line */}
                            <div
                                className="h-96 mt-6 w-2 rounded shadow bg-gradient-to-b from-[#d9d328] to-[#5f13e2] sm:flex hidden"
                                ref={lineRef}
                            ></div>

                            {/* WordPress Plugin Section */}
                            <div className="sm:w-1/2 flex flex-col">
                                <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100 border-b-2 border-[#5671f7] font-inter pb-2">
                                WordPress Plugin
                                </h2>
                                <div className="grid grid-cols-2 gap-5 mt-5 flex-grow">
                                    {/* Add Plugins */}
                                    <div className="group Skills-button hover:scale-105">
                                        <FaSearch className="text-[#7bb32e] Skills-icon" /> {/* Yoast SEO - Green */}
                                        <span className="Skills-Text">Yoast SEO</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaElementor className="text-[#007cba] Skills-icon" /> {/* Elementor - Blue */}
                                        <span className="Skills-Text">Elementor Pro</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaShoppingCart className="text-[#96588a] Skills-icon" /> {/* WooCommerce - Purple */}
                                        <span className="Skills-Text">WooCommerce</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaWpforms className="text-[#339af0] Skills-icon" /> {/* WPForms - Blue */}
                                        <span className="Skills-Text">WPForms</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaRocket className="text-[#ff7f00] Skills-icon" /> {/* WP Rocket - Orange */}
                                        <span className="Skills-Text">WP Rocket</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaShieldAlt className="text-[#00bfae] Skills-icon" /> {/* Akismet Anti-Spam - Teal */}
                                        <span className="Skills-Text">Akismet Anti-Spam</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaCloudUploadAlt className="text-[#4d8a6f] Skills-icon" /> {/* UpdraftPlus - Green */}
                                        <span className="Skills-Text">UpdraftPlus</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaShieldAlt className="text-[#d84a38] Skills-icon" /> {/* Wordfence - Red */}
                                        <span className="Skills-Text">Wordfence Security</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <FaCogs className="text-[#0063b1] Skills-icon" /> {/* ACF - Blue */}
                                        <span className="Skills-Text">ACF</span>
                                    </div>

                                    <div className="group Skills-button hover:scale-105">
                                        <SiSlideshare className="text-[#00a0b0] Skills-icon" /> {/* Revolution Slider - Blue */}
                                        <span className="Skills-Text">Revolution Slider</span>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Skill;
