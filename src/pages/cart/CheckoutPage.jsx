import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import cashOnDImg from '../../assets/cashOnD.png'
import cardPImg from '../../assets/cardP.png'


const CheckoutPage = () => {
    const [cashOnD, setCashOnD] = useState(false)
    // scroll to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    const navigate = useNavigate()


    return (
        <div className="containerArena py-10">
            <Breadcrumb />
            <div className="overflow-y-hidden pt-6">
                <div className="flex justify-center items-center  ">
                    <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                        <div className="flex w-full  flex-col justify-start items-start">
                            <div className>
                                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                            </div>

                            <div className="mt-12">
                                <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                            </div>
                            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address (line 02)" />
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="City" />
                                    <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Country" />
                                </div>

                                <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" />
                            </div>

                            <div className="py-6 space-y-6">
                                <div className="flex gap-3">
                                    <input onChange={() => setCashOnD(true)} className="mr-3 w-5" id='paymentMethod' value='cashOnD'
                                        name='paymentMethod'
                                        type="radio" />
                                    <label htmlFor="paymentMethod">

                                        <img className="w-[150px] " src={cashOnDImg} alt="" />

                                    </label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={() => setCashOnD(false)} className="mr-3 w-5" id='paymentMethod'
                                        name='paymentMethod'
                                        value='cardP' type="radio" />
                                    <label htmlFor="paymentMethod">

                                        <img className="w-[60px] " src={cardPImg} alt="" />

                                    </label>
                                </div>
                            </div>
                            {
                                cashOnD ? <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Confirm Order</button>
                                    :
                                    <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
                            }

                            <div className="mt-4 flex justify-start items-center w-full">
                                <a href="javascript:void(0)" onClick={() => navigate('/cart')} className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                                    Back to my bag
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Total items</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">20</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">$2790</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">$90</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Sub total </p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">$3520</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center mt-32">
                                <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">$2900</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;