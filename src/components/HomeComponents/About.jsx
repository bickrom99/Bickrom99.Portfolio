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

    return (
        <div className="dark:bg-transparent transition-all duration-300">
            <div className="relative w-[90%] m-auto h-[90vh] grid md:grid-cols-5 grid-cols-1 justify-center items-center overflow-hidden">
                {/* User Image Border show when dark mode gsap border animation */}
                <div className="relative flex justify-center items-center col-span-2 sm:pt-0 pt-8 pb-2">
                    <img
                        src="/public/Images/Owner.jpg"
                        alt="userImage"
                        className="relative sm:h-[350px] h-[200px] rounded-full border-[5px] border-white dark:border-[#1a1d42] dark:bg-[#1a1d42] dark:bg-opacity-40 hover:transform hover:scale-110 transition duration-300"
                        loading="lazy"
                    />
                </div>

                {/* Admin Information */}
                <div className="relative text-black dark:text-white sm:ml-8 col-span-3 sm:px-0 px-4">
                    <h4 className="text-sm font-Dm_font font-medium text-[#263143] dark:text-white dark:text-base">👋 Hello there, I am Bickrom Chandro Sen</h4>
                    {/* Animation text */}
                    <h2 className="font-Dm_font font-semibold sm:text-3xl text-xl pt-3 dark:text-[#F6B724] dark:text-4xl">
                        <span
                            ref={textRef}
                            id="dynamic-text"
                            className="inline-block min-h-[24px]"
                        ></span>
                    </h2>
                    {/* Personal Information */}
                    <p className="text-[1rem] font-Dm_font font-normal leading-6 pt-2 text-[#151b25] sm:text-start text-justify dark:text-white">
                        As a skilled web developer, I specialize in building tailored websites that are visually appealing, responsive, and optimized for performance. 
                        My mission is to help you establish a strong digital presence by crafting solutions that align with your brand identity and business objectives. 
                        Whether it’s enhancing user experience or achieving better engagement, I’m here to turn your ideas into reality.
                    </p>

                    {/* CTA button here */}
                    <div className="flex gap-5 mt-5 sm:mb-0 mb-5">
                        <a  
                            href="#contact"
                            className="group flex items-center gap-2 justify-center bg-[#5820FF] text-white font-Dm_font text-sm py-3 cursor-pointer rounded-md px-4 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg dark:bg-transparent dark:border-[1.4px] dark:border-[#F5C816] dark:py-1 dark:rounded-xl dark:hover:bg-[#F5C816] "
                        >
                            <span>Get Started</span>
                            <FaArrowRightFromBracket className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        
                        {/* View Resume Button */}
                        <a
                            href="/Images/Bickrom Chandro Sen- bickrom99.pdf"
                            className="group flex items-center gap-2 justify-center border-[1.3px] border-gray-400 font-Dm_font text-sm cursor-pointer py-2 rounded-md px-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg dark:bg-transparent dark:border-[1.4px] dark:border-[#F6B724] dark:py-1 dark:rounded-xl dark:hover:bg-[#F6B724] "
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
