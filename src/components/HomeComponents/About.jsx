import { useEffect } from "react";
import { gsap } from "gsap";

const About = () => {
    useEffect(() => {
        // GSAP Animation for the background
        gsap.to(".animated-bg", {
            duration: 4,
            ease: "linear",
            backgroundPosition: "200% 100%", // Animate gradient movement
            repeat: -1,
        });
    }, []);

    return (
        <div className="bg-[#ebeff1] dark:bg-[#2D2D2D] dark:text-white transition-all duration-300">
            <div className="relative w-[90%] m-auto h-[80vh] grid grid-cols-5 justify-center items-center overflow-hidden">
                
                {/* User Image with Animated Background */}
                <div className="relative flex justify-center items-center col-span-2">
                    {/* Blurred Animated Background */}
                    <div
                        className="animated-bg absolute w-[230px] h-[230px] rounded-full blur-3xl bg-gradient-to-r
                        from-blue-600 via-purple-500 to-green-500 bg-[length:400%_400%] z-0"
                    ></div>

                    {/* User Image */}
                    <img
                        src="/src/assets/Images/userImage.png"
                        alt="userImage"
                        className="relative z-10 h-[350px] rounded-full border-[5px] border-white shadow-md"
                    />
                </div>

                {/* User Information */}
                <div className="relative z-10 text-black dark:text-white ml-8 col-span-3">
                    <h1 className="text-3xl font-bold">Your Name</h1>
                    <p className="text-lg">A brief introduction or tagline here.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
