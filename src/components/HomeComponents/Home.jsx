import About from "./About";
import Faq from "./Faq";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skill from "./Skill";
import Tetimonial from "./Tetimonial";

const Home = () => {
    return (
        <div className="pt-[4.3rem]">
            <About/>
            <Portfolio/>
            <Skill/>
            <Services/>
            <Tetimonial/>
            <Faq/>
        </div>
    );
};

export default Home;