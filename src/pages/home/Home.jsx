import CategorySection from "./CategorySection";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="containerArena">
            <div>
                <Hero/>
            </div>
            <div className="py-4">
                <CategorySection/>
            </div>
        </div>
    );
};

export default Home;