/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { FaDev, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ toggleDarkMode, darkMode }) => {
    const navItem = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/portfolio", link: "Projects" },
        { path: "/skills", link: "Skills" },
        { path: "/services", link: "Services" },
        { path: "/contact", link: "Contact" }
    ];

    return (
        <header className="bg-[#fffefe] dark:bg-gray-900 opacity-95 fixed top-0 left-0 right-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
            <nav className="w-[90%] m-auto flex flex-row justify-between items-center py-5">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="flex flex-row items-center justify-center gap-1 text-black dark:text-white"
                >
                    <FaDev/>
                    <h2 className="font-Vast_shadow font-medium text-lg">bickrom99</h2>
                </NavLink>

                {/* Nav menu item */}
                <ul className="flex flex-row gap-5">
                    {navItem.map((data, index) => (
                        <li key={index} className="font-poppins text-sm">
                            <NavLink
                                to={data.path}
                                className={({ isActive }) =>
                                    `hover:text-blue-400 dark:hover:text-blue-300 ${
                                        isActive
                                            ? "text-blue-500 dark:text-blue-400 font-bold"
                                            : "text-black dark:text-white"
                                    }`
                                }
                            >
                                {data.link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Dark light & Social icons */}
                <div className="flex items-center gap-4 font-roboto">
                    {/* Dark light feature */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-[#252525] dark:text-white hover:text-blue-500 dark:hover:text-yellow-400"
                    >
                        {darkMode ? <FaMoon/> : <FaSun />}
                    </button>

                    {/* LinkedIn, GitHub links */}
                    <div className="flex gap-4">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#252525] dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com"
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
