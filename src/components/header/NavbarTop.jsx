import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const NavbarTop = () => {
    return (
        <div className="py-2 border-b">
            <div className="w-full flex justify-between text-gray-500 containerArena items-center">
                <div className="flex gap-2">
                    <button className="bg-gray-200 p-[6px] text-gray-500 rounded-md flex justify-center items-center">
                        <FaFacebook size={20} />
                    </button>
                    <button className="bg-gray-200 p-[6px] text-gray-500 rounded-md flex justify-center items-center">
                        <FaInstagram size={20} />
                    </button>
                    <button className="bg-gray-200 p-[6px] text-gray-500 rounded-md flex justify-center items-center">
                        <FaLinkedin size={20} />
                    </button>
                </div>
                <div>
                    <p className="text-center text-sm font-semibold">FREE SHIPING THIS WEEK ORDER OVER -60$</p>
                </div>
                <div className="flex gap-3 text-sm font-semibold">
                    <span>BDT</span>
                    <span>ENGLISH</span>
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;