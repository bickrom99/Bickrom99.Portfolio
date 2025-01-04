import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark", !darkMode); // Toggle dark class on body
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* Background video */}
            {darkMode && (
                <div className=" w-full h-full fixed top-0 left-0 z-[-1]">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/Images/bg-vedio.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay with semi-transparent color */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[#111636] bg-opacity-85"></div>
                </div>
            )}
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
