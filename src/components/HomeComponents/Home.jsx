import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skill from "./Skill";
import Tetimonial from "./Tetimonial";

const Home = () => {
    return (
        <div id="home" className="pt-[4.3rem]">
            <About />
            <Portfolio/>
            <Skill/>
            <Services/>
            <Tetimonial/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default Home;