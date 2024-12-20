import About from "./About";
import Portfolio from "./Portfolio";
import Skill from "./Skill";

const Home = () => {
    return (
        <div className="pt-[4.3rem]">
            <About/>
            <Portfolio/>
            <Skill/>
        </div>
    );
};

export default Home;