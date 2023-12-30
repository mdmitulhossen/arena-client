import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import logo from '../../assets/logo/logo.png';

const menu = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CATEGORIES", link: "/categories" },
    { name: "MEN'S", link: "/mens" },
    { name: "BLOG", link: "/blog" },
    { name: "HOT OFFERS", link: "/gotOffers" },
]

const NavbarBottom = () => {
    return (
        <div className="containerArena py-3">
            <div className=" md:flex justify-center items-center gap-5 hidden ">
                {
                    menu.map((item, index) => {
                        return <NavLink key={index} to={item.link}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F18787] font-medium border-b-2 border-[#F18787] md:text-sm lg:text-base" : "text-gray-700 font-medium hover:text-[#F18787] hover:border-b-2 hover:border-[#F18787] duration-200 md:text-sm lg:text-base"
                            }
                        >{item.name}</NavLink>
                    })
                }
            </div>


            <div className="flex justify-between gap-5 items-center md:hidden">
                {/* serch */}
                <div className="pt-2 relative text-gray-600 w-4/5">
                    <input className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-2 text-gray-600">
                        <IoIosSearch size={20} />
                    </button>
                </div>
                {/* mobile menu */}
                <div>
                    <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" />
                    <label htmlFor="drawer-toggle" className="inline-block p-2 transition-all duration-500 bg-gray-400 rounded-lg peer-checked:rotate-180 peer-checked:left-64 mt-2">
                        <div className="w-5 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                        <div className="w-5 h-1 rotate-45 bg-white rounded-lg"></div>

                    </label>

                    {/* drawer */}
                    <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                        <div className="px-6 py-4">
                            <div className="flex justify-center">
                                <img className="w-[120px]" src={logo} alt="logo" />
                            </div>
                            <div className="flex flex-col gap-5 mt-10">
                            {
                                menu.map((item, index) => {
                                    return <NavLink key={index} to={item.link}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#F18787] font-medium border-b-2 border-[#F18787] md:text-sm lg:text-base" : "text-gray-700 font-medium hover:text-[#F18787] hover:border-b-2 hover:border-[#F18787] duration-200 md:text-sm lg:text-base"
                                        }
                                    >{item.name}</NavLink>
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavbarBottom;