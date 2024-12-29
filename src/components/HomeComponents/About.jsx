import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import { FaArrowRightFromBracket, FaDownload } from "react-icons/fa6";

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const About = () => {
    const textRef = useRef(null);

    // Text animation feature here
    useEffect(() => {
        const textArray = ["FRONTEND WEB DEVELOPER", "WORDPRESS EXPERT"];
        let index = 0;

        const typeEffect = () => {
            if (!textRef.current) return;

            const timeline = gsap.timeline();
            timeline
                // Type the current text
                .to(textRef.current, {
                    text: textArray[index],
                    duration: 2,
                    ease: "power2.inOut",
                })
                // Pause for a while
                .to({}, { duration: 1 }) // Empty object for delay
                // Clear the text
                .to(textRef.current, {
                    text: "",
                    duration: 1,
                    ease: "power2.inOut",
                    onComplete: () => {
                        // Move to the next text
                        index = (index + 1) % textArray.length;
                        typeEffect(); // Call the function again for the next text
                    },
                });
        };

        typeEffect(); // Start the typing effect
    }, []);

    useEffect(() => {
        // GSAP Background Animation
        gsap.to(".animated-bg", {
            duration: 4,
            ease: "linear",
            backgroundPosition: "200% 100%",
            repeat: -1,
        });
    }, []);

    return (
        <div className="bg-[#ebeff1] dark:bg-[#2D2D2D] dark:text-white transition-all duration-300">
            <div className="relative w-[90%] m-auto h-[90vh] grid md:grid-cols-5 grid-cols-1 justify-center items-center overflow-hidden">
                {/* User Image with Animated Background */}
                <div className="relative flex justify-center items-center col-span-2 sm:pt-0 pt-8 pb-2">
                    <div
                        className="animated-bg absolute sm:w-[230px] sm:h-[230px] w-[100px] h-[100px] rounded-full blur-2xl bg-gradient-to-r
                        from-blue-600 via-purple-500 to-green-500 bg-[length:400%_400%] z-0"
                    ></div>
                    <img
                        src="/Images/userImage.jpeg"
                        alt="userImage"
                        className="relative z-0 sm:h-[350px] h-[200px]  rounded-full border-[5px] border-white shadow-md"
                        loading="lazy"
                    />
                </div>

                {/* Admin Information */}
                <div className="relative text-black dark:text-white sm:ml-8 col-span-3 sm:px-0 px-4">
                    <h4 className="text-sm font-Dm_font font-medium text-[#263143]">👋 Hello there, I am Bickrom Chandro Sen</h4>
                    {/* Animation text */}
                    <h2 className="font-Dm_font font-semibold sm:text-3xl text-xl pt-3">
                        <span
                            ref={textRef}
                            id="dynamic-text"
                            className="inline-block min-h-[24px]"
                        ></span>
                    </h2>
                    {/* Personal Information */}
                    <p className="text-[1rem] font-Dm_font font-normal leading-6 pt-2 text-[#151b25] sm:text-start text-justify">
                        As a skilled web developer, I specialize in building tailored websites that are visually appealing, responsive, and optimized for performance. 
                        My mission is to help you establish a strong digital presence by crafting solutions that align with your brand identity and business objectives. 
                        Whether it’s enhancing user experience or achieving better engagement, I’m here to turn your ideas into reality.
                    </p>

                            {/* CTA button here */}
                    <div className="flex gap-5 mt-5 sm:mb-0 mb-5">
                        <a  
                            href="#contact"
                            className="group flex items-center gap-2 justify-center bg-[#5820FF] text-white font-Dm_font text-sm py-3 cursor-pointer rounded-md px-4 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                        >
                            <span>Get Started</span>
                            <FaArrowRightFromBracket className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        
                        {/* View Resume Button */}
                        <a
                            className="group flex items-center gap-2 justify-center border-[1.3px] border-gray-400 font-Dm_font text-sm cursor-pointer py-2 rounded-md px-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                        >
                            <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                            <span>View Resume</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
