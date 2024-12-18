import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark", !darkMode); // Toggle dark class on body
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
