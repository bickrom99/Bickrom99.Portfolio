/* eslint-disable react/prop-types */
import { HashLink as Link } from 'react-router-hash-link'; // react-router-hash-link 
import { FaDev, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useState } from 'react'; // For managing active state

const Navbar = ({ toggleDarkMode, darkMode }) => {
    const [activeLink, setActiveLink] = useState("#home"); 

    const navItem = [
        { path: "#home", link: "Home" }, 
        { path: "#projects", link: "Projects" },
        { path: "#skills", link: "Skills" },
        { path: "#service", link: "Services" },
        { path: "#contact", link: "Contact" }
    ];

    // Handle link click to update active link
    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <header className="bg-[#fffefe] dark:bg-gray-900 opacity-95 z-10 fixed top-0 left-0 right-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
            <nav className="w-[90%] m-auto flex flex-row justify-between items-center py-5">

                {/* Logo */}
                <a
                    href="/" 
                    className="flex flex-row items-center justify-center gap-1 text-black dark:text-white"
                >
                    <FaDev />
                    <h2 className="font-Vast_shadow font-medium text-lg">bickrom99</h2>
                </a>

                {/* Nav menu items */}
                <ul className="flex flex-row gap-5">
                    {navItem.map((data, index) => (
                        <li key={index} className="font-inter text-[.9rem]">
                            <Link
                                to={data.path}
                                smooth={true}
                                duration={500}
                                onClick={() => handleLinkClick(data.path)} // Update active link on click
                                className={`relative group hover:text-blue-400 dark:hover:text-blue-300 ${
                                    activeLink === data.path // Check if the link is active
                                        ? "text-blue-500 dark:text-blue-400 font-bold"
                                        : "text-black dark:text-white"
                                }`}
                            >
                                {data.link}

                                {/* Animation: Underline effect on hover */}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Dark light & Social icons */}
                <div className="flex items-center gap-4 font-roboto">
                    {/* Dark mode toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-[#252525] dark:text-white hover:text-blue-500 dark:hover:text-yellow-400"
                    >
                        {darkMode ? <FaMoon /> : <FaSun />}
                    </button>

                    {/* LinkedIn, GitHub links */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/bickrom99/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#252525] dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/bickrom99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#252525] dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
