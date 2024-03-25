

const CartCard = () => {
    return (
        <div>
            <div className="md:flex items-center py-8 border-t border-gray-200">
                <div className="w-1/4">
                    <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png" alt className="w-full aspect-square object-center object-fill" />
                </div>
                <div className="md:pl-3 md:w-3/4 w-full">
                    <p className="text-sm leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-2xl leading-none text-gray-800 font-semibold">Luxe Signature Ring</p>
                        <input type="number" className="mr-6 border border-gray-400 py-1 px-3 max-w-[100px] rounded-md" placeholder="Quantity" defaultValue={1} min={1} />
                    </div>
                    <p className="leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                    <p className="leading-3 text-gray-600 py-4">Color: Black</p>
                    <p className="w-96 leading-3 text-gray-600">Composition: 100% calf leather</p>
                    <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                            <p className="text-sm leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                            <p className="text-sm leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-lg font-black leading-none text-gray-800">$9,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;