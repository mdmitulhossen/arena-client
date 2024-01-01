import CategorySection from "./CategorySection";
import Hero from "./Hero";
import ProductSection from "./ProductSection";

const Home = () => {
    return (
        <div className="containerArena">
            <div>
                <Hero/>
            </div>
            <div className="py-4">
                <CategorySection/>
            </div>
            <div className="pb-4">
                <ProductSection/>
            </div>
        </div>
    );
};

export default Home;