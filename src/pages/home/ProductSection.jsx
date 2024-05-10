import cloth from '../../assets/icons/coat.svg'
import footwear from '../../assets/icons/shoes.svg'
import perfume from '../../assets/icons/perfume.svg'
import glasses from '../../assets/icons/glasses.svg'
import bags from '../../assets/icons/bag.svg'

import { FaPlus } from "react-icons/fa6";
import BestSellerCard from '../../components/cards/BestSellerCard'
import demo from '../../assets/bestSellers/sports-5.jpg'
import TrendingProductCard from '../../components/cards/TrendingProductCard'
import DealOfDayCard from '../../components/cards/DealOfDayCard'
import ProductCard from '../../components/cards/ProductCard'
const bestSellerData = [
    { name: 'Fabric Shoes', oldPrice: 15.00, newPrice: 7.00, rating: 3, img: demo },
    { name: "Men's T-Shirt", oldPrice: 8.00, newPrice: 4.00, rating: 4, img: demo },
    { name: 'Fabric Shoes', oldPrice: 9.00, newPrice: 4.00, rating: 3, img: demo },
    { name: 'Fabric Shoes', oldPrice: 10.00, newPrice: 5.00, rating: 5, img: demo },
]

const newArrivalData = [
    { name: 'Winter wear Jacket leather', category: 'sports', oldPrice: 15.00, newPrice: 7.00, img: demo },
    { name: 'Fabric Shoes', category: 'sports', oldPrice: 15.00, newPrice: 7.00, img: demo },
    { name: 'Fabric Shoes', category: 'sports', oldPrice: 15.00, newPrice: 7.00, img: demo },
    { name: 'Fabric Shoes', category: 'sports', oldPrice: 15.00, newPrice: 7.00, img: demo },
]
const ProductSection = () => {
    return (
        <div className="grid gap-5 grid-cols-12 w-full relative">
            <div className="lg:col-span-3 md:col-span-5 col-span-full md:sticky top-0  w-full md:h-screen md:overflow-y-auto homeSideBar pt-10">
                {/* category */}
                <div className="border shadow rounded-md p-5">
                    <p className='font-medium text-lg'>CATEGORY</p>
                    <div className='mt-3 space-y-2'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src={cloth} className="w-4" alt="" />
                                <p className='text-gray-500'>Clothes</p>
                            </div>
                            <span className='text-gray-500'>
                                <FaPlus size={18} />
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src={footwear} className="w-4" alt="" />
                                <p className='text-gray-500'>Footwear</p>
                            </div>
                            <span className='text-gray-500'>
                                <FaPlus size={18} />
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src={perfume} className="w-4" alt="" />
                                <p className='text-gray-500'>Perfume</p>
                            </div>
                            <span className='text-gray-500'>
                                <FaPlus size={18} />
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src={glasses} className="w-4" alt="" />
                                <p className='text-gray-500'>Glasses</p>
                            </div>
                            <span className='text-gray-500'>
                                <FaPlus size={18} />
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src={bags} className="w-4" alt="" />
                                <p className='text-gray-500'>Bags</p>
                            </div>
                            <span className='text-gray-500'>
                                <FaPlus size={18} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* best sellers */}
                <div className='py-5'>
                    <p className='font-medium text-lg'>BEST SELLERS</p>
                    <div className='pt-2 space-y-4'>
                        {
                            bestSellerData.map((item, index) => (
                                <BestSellerCard key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="lg:col-span-9 md:col-span-7 col-span-full w-full pt-10">
                {/* new,trending,top rated */}
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                    {/* new arrivals */}
                    <div>
                        <p className='font-semibold text-xl pb-2 border-b'>New Arrivals</p>
                        <div className='pt-5 space-y-3'>
                            {
                                newArrivalData.map((item, index) => (
                                    <TrendingProductCard key={index} data={item} />
                                ))
                            }
                        </div>
                    </div>
                    {/* trendings */}
                    <div>
                        <p className='font-semibold text-xl pb-2 border-b'>Trending</p>
                        <div className='pt-5 space-y-3'>
                            {
                                newArrivalData.map((item, index) => (
                                    <TrendingProductCard key={index} data={item} />
                                ))
                            }
                        </div>
                    </div>
                    {/* top rated */}
                    {/* <div>
                        <p className='font-semibold text-xl pb-2 border-b'>Top Rated</p>
                        <div className='pt-5 space-y-3'>
                            {
                                newArrivalData.map((item, index) => (
                                    <TrendingProductCard key={index} data={item} />
                                ))
                            }
                        </div>
                    </div> */}
                </div>

                {/* deal of the day */}
                <div className='pt-10'>
                    <p className='font-semibold text-xl pb-2 border-b mb-6'>DEAL OF THE DAY</p>
                    <DealOfDayCard />
                </div>

                {/* New Product */}
                <div className='pt-12'>
                    <p className='font-semibold text-xl pb-2 border-b mb-6'>NEW PRODUCTS</p>

                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-4'>
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
                </div>
            </div>
        </div>
    );
};

export default ProductSection;