import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
      // scroll to top
      useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }, []);
    return (
        <div className="containerArena py-10">

            <Breadcrumb/>

            <div className="flex md:flex-row flex-col justify-end pt-6" >
                <div className=" w-full bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">

                    <p className="text-4xl font-black leading-10 text-gray-800">CART <span className="text-2xl">(3)</span></p>
                    <div className="mt-5">
                        <CartCard />
                        <CartCard />
                        <CartCard />
                    </div>

                </div>
                <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                        <div>
                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                            <div className="flex items-center justify-between pt-16">
                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                <p className="text-base leading-none text-gray-800">$9,000</p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                <p className="text-base leading-none text-gray-800">$30</p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-gray-800">Tax</p>
                                <p className="text-base leading-none text-gray-800">$35</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                            </div>
                            <button onClick={()=>navigate('/checkout')} className="arenaBtn w-full py-4 text-base">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cartpage;