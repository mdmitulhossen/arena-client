import logo from '../../assets/logo/logo.png';
import userAvater from '../../assets/user.png';
import { IoIosSearch } from "react-icons/io";

// import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
const NavbarMiddle = () => {
    const user = false
    return (
        <div className='border-b'>
            <div className='flex justify-between items-center containerArena py-1 gap-3'>
                <div>
                    <img src={logo} className='md:w-[120px] w-20' alt="logo" />
                </div>
                <div className='w-3/5 hidden md:block'>
                    <div className="pt-2 relative mx-auto text-gray-600 ">
                        <input className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-2 text-gray-600">
                            <IoIosSearch size={20} />
                        </button>
                    </div>
                </div>
                <div className='flex gap-4 items-center text-gray-600 '>
                    {/* login user */}
                    {
                        user ?
                            <button className='group relative'>
                                <img src={userAvater} className='w-10 h-10 rounded-full' alt="" />

                                {/* Open login user */}
                                <div className="z-50 hidden group-hover:block absolute top-6 right-0  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </button>
                            :
                            <button className='bg-arena-color px-4 py-2 rounded text-sm font-semibold text-white hover:bg-arena-color-hover duration-200'>Login</button>
                    }
                    <button className='relative'>
                        <FaRegHeart size={30} />
                        <span className='bg-arena-color px-[4px] rounded-full text-xs font-bold text-white absolute -top-2 -right-2'>0</span>
                    </button>
                    <button className='relative'>
                        <IoBagHandleOutline size={30} />
                        <span className='bg-arena-color px-[4px] rounded-full text-xs font-bold text-white absolute -top-1 -right-1'>0</span>
                    </button>


                </div>
            </div>
        </div>
    );
};

export default NavbarMiddle;