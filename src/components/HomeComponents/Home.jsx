import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skill from "./Skill";

const Home = () => {
    return (
        <div className="pt-[4.3rem]">
            <About/>
            <Portfolio/>
            <Skill/>
            <Services/>
        </div>
    );
};

export default Home;