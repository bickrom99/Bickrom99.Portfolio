import { useEffect, useRef } from 'react';
import { FaTwitter, FaQuora, FaBehance, FaDribbble, FaCreativeCommons, FaEnvira } from 'react-icons/fa'; 

import gsap from 'gsap';

const Footer = () => {
    const socialIconsRef = useRef([]);
    const footerRef = useRef();

    // GSAP Animation Hook for Footer
    useEffect(() => {
        // Animate Footer
        gsap.set(footerRef.current, { opacity: 0, y: 50 });
        gsap.to(footerRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
        });

        // GSAP Animation for Social Media Icons
        if (socialIconsRef.current.length > 0) {
            gsap.set(socialIconsRef.current, { opacity: 0, y: 50 });
            gsap.to(socialIconsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        }
    }, []);

    return (
        <div ref={footerRef} className="bg-gradient-to-b from-[#1a3b64] via-[#0d2b47] to-[#283c5e] text-white h-auto w-full py-14">
            <div className="w-[90%] m-auto text-center">
                {/* Name & Tagline */}
                <div className="text-3xl font-bold font-inter mb-2">
                    Bickrom Chandro Sen
                </div>
                <div className="text-md text-gray-300 mb-6 font-inter">
                    Frontend Web Developer & WordPress Expert
                </div>

                {/* Social Media Links with GSAP Animation */}
                <div className="mt-6 flex justify-center space-x-6">
                    <a
                        href="https://twitter.com/bickrom99/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition-colors"
                        ref={(el) => socialIconsRef.current.push(el)}
                    >
                        <FaTwitter size={25} className="text-[#32c5ff]"/>
                    </a>
                    {/* Additional Social Media Icons */}
                    <a
                        href="https://www.quora.com/profile/Bickrom-Chandro-Sen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition-colors"
                        ref={(el) => socialIconsRef.current.push(el)}
                    >
                        <FaQuora size={25} className="text-[#32c5ff]"/>
                    </a>
                    <a
                        href="https://www.behance.net/bickrom99/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition-colors"
                        ref={(el) => socialIconsRef.current.push(el)}
                    >
                        <FaBehance size={25} className="text-[#32c5ff]"/>
                    </a>
                    <a
                        href="https://dribbble.com/bickrom99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition-colors"
                        ref={(el) => socialIconsRef.current.push(el)}
                    >
                        <FaDribbble size={25} className="text-[#32c5ff]"/>
                    </a>
                    <a
                        href="https://www.creativefabrica.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition-colors"
                        ref={(el) => socialIconsRef.current.push(el)}
                    >
                        <FaCreativeCommons size={25} className="text-[#32c5ff]"/>
                    </a>
                    <a
                        href="https://themeforest.net/user/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition-colors "
                        ref={(el) => socialIconsRef.current.push(el)}
                    >
                        <FaEnvira size={25} className="text-[#32c5ff]"/>
                    </a>
                </div>

                {/* Call to Action */}
                <div className="mt-6 text-lg text-gray-200">
                    <p className="mb-3 text-[16px] font-Dm_font">
                        If you are visiting my portfolio from <b>Fiverr</b> or <b>Upwork</b>, please return to the respective platform to view my work.
                    </p>
                    <p className="mb-3 text-[16px] font-Dm_font">
                        If you have come from any other place, feel free to <a href="#contact" className=" border-b-2 border-blue-600 text-blue-600 hover:text-blue-800 hover:border-blue-800"> send me a message through my contact form</a>. I will assist you as soon as possible.
                    </p>

                    {/* Platform Links */}
                    <div className="space-x-4 mt-6">
                        <a
                            href="https://www.fiverr.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-md transition duration-300 font-inter text-base"
                        >
                            View on Fiverr
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300 font-inter text-base"
                        >
                            View on Upwork
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 text-base text-gray-400 font-Dm_font">
                    &copy; {new Date().getFullYear()} Bickrom Chandro Sen. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
