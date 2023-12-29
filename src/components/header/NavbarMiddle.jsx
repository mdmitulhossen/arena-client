import logo from '../../assets/logo/logo.png';
import { IoIosSearch } from "react-icons/io";

import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
const NavbarMiddle = () => {
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
                <div className='flex gap-4 items-center text-gray-600'>
                    <button className=''>
                        <FaRegUser size={30} />
                    </button>
                    <button className='relative'>
                        <FaRegHeart size={30} />
                        <span className='bg-[#f18787] px-[4px] rounded-full text-xs font-bold text-white absolute -top-2 -right-2'>0</span>
                    </button>
                    <button className='relative'>
                        <IoBagHandleOutline size={30} />
                        <span className='bg-[#f18787] px-[4px] rounded-full text-xs font-bold text-white absolute -top-1 -right-1'>0</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarMiddle;