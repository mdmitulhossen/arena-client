import { useEffect, useState } from "react";
import SellerChart from "../../components/chart/SellerChart";


const Dashboard = () => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('user'))
        console.log(localData, "localData")
        setUserData(localData)
    }, [])
    return (
        <div>
            <h1 className="px-5 text-[28px] lg:text-[36px] font-semibold">
                Welcome To
                <span className="text-green-600">{userData?.name || " Armani Zone's"}</span>
            </h1>
            <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-3 sm:px-8">
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Total Products</h3>
                        <p className="text-3xl">{
                            userData?.productSaleCount
                        }</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-blue-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Total Order</h3>
                        <p className="text-3xl">0</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Pending Order</h3>
                        <p className="text-3xl">0</p>
                    </div>
                </div>
                {/* <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Server Load</h3>
                        <p className="text-3xl">34.12%</p>
                    </div>
                </div> */}
            </div>
            <div className="w-full pt-20">
                <SellerChart />
            </div>
        </div>
    );
};

export default Dashboard;