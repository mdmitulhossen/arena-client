import { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductCard from "../../components/cards/ProductCard";
import FilterSide from "./FilterSide";
import { IoMenuOutline } from "react-icons/io5";
import { MdFilterListAlt } from "react-icons/md";
import Sort from "./Sort";

const CategoryPage = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    // scroll to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    const sellerpage = true
    return (
        <div className="containerArena py-10">
            <Breadcrumb />
            <div className="pt-6 grid grid-cols-12 gap-8">
                {/* filter  */}
                <div className="lg:col-span-3 col-span-full shadow-inner bg-[#F9FAFB]">
                    <FilterSide mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
                </div>

                {/* right product side */}
                <div className="lg:col-span-9 col-span-full">
                    <div className="">
                        {sellerpage && <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                            <p className=" w-10/12 mx-auto md:w-fullfont-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Summer Collection Vol-1</p>
                        </div>}
                        <div className=" py-6">


                            <div className=" flex justify-between items-center">
                                <div className=" flex space-x-3 justify-center items-center">
                                    {/* <IoMenuOutline size={20} />
                                    <p className=" font-semibold text-lg leading-4 text-gray-800 font">Filter</p> */}

                                    {/* filter btn for mobile */}
                                    <button
                                        type="button"
                                        className=" text-gray-400 hover:text-gray-500 lg:hidden"
                                        onClick={() => setMobileFiltersOpen(true)}
                                    >
                                        <span className="sr-only">Filters</span>
                                        <MdFilterListAlt size={24} />
                                    </button>
                                    {/* sort */}
                                    <div>
                                        <Sort />
                                    </div>
                                </div>
                                <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">Showing 18 products</p>
                            </div>

                            <div className=" grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-8 lg:gap-x-5 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                                {/* products */}
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />

                            </div>

                            <div className=" flex justify-center items-center pt-20">
                                <button className=" arenaBtn py-3 px-8 text-sm md:text-lg">Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryPage;