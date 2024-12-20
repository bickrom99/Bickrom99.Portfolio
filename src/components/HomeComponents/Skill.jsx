import { gsap } from "gsap";
import { useEffect } from "react";

const Skill = () => {
    useEffect(() => {
        // GSAP animation for skill items
        const skillItems = gsap.utils.toArray(".skill-item");

        skillItems.forEach((item) => {
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
            
            item.addEventListener("mouseenter", () => {
                gsap.to(item, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            });

            item.addEventListener("mouseleave", () => {
                gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#e8f8ff] via-[#f4eafc] to-[#ffffff] dark:from-[#2d2d2d] dark:via-[#3b3b3b] dark:to-[#1A1A1A] min-h-screen py-16">
            <div className="w-[90%] mx-auto">
            <div className="text-center">
                    <h2 className="font-semibold font-Vast_shadow text-2xl text-gray-800 dark:text-gray-100">
                        My <span className="text-indigo-600">Technologies & Tools</span>
                    </h2>
                    <img
                        className="w-[20%] m-auto mt-2"
                        src="/public/Images/line_design.png"
                        alt="decorative"
                    />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div className="skill-item text-center bg-white rounded-lg shadow-lg p-6 transform transition-transform">
                        <h3 className="font-bold text-xl text-indigo-600">React</h3>
                        <p className="text-gray-600 mt-2">Building dynamic web apps with React.js.</p>
                    </div>

                    <div className="skill-item text-center bg-white rounded-lg shadow-lg p-6 transform transition-transform">
                        <h3 className="font-bold text-xl text-indigo-600">JavaScript</h3>
                        <p className="text-gray-600 mt-2">Experienced in building interactive UIs and APIs.</p>
                    </div>

                    <div className="skill-item text-center bg-white rounded-lg shadow-lg p-6 transform transition-transform">
                        <h3 className="font-bold text-xl text-indigo-600">WordPress</h3>
                        <p className="text-gray-600 mt-2">Custom theme and plugin development.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
