
const category = [
    {
        id: 1,
        name: "Sports",
        value: "sports"
    },
    {
        id: 2,
        name: "T-Shirts",
        value: "T-Shirts"
    }
]

const AddProducts = () => {
    return (
        <div>

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-12">
                    <div className="md:col-span-6">
                        <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 ">Product name</label>
                        <input type="text" id="product_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="product_name" required />
                    </div>
                    <div className="md:col-span-6">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Product Category</label>
                        <div className="relative">
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option>Category</option>
                                {
                                    category.map((item) => (
                                        <option key={item.id} value={item.value}>{item.name}</option>
                                    ))

                                }
                            </select>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">Color</label>

                        <div className="flex items-center mb-4">
                            <input id="color-1" type="radio" value="" name="color" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="color-1" className="ms-2 text-sm font-medium text-gray-900 ">Red</label>
                        </div>
                        <div className="flex items-center">
                            <input checked id="color-2" type="radio" value="" name="color" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="color-2" className="ms-2 text-sm font-medium text-gray-900 ">Black</label>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="product_img">Upload Image</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="product_img" type="file" />
                    </div>

                    <div className="col-span-12">

                        <label htmlFor="discription" className="block mb-2 text-sm font-medium text-gray-900 ">Product Discription</label>
                        <textarea id="discription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Discription"></textarea>

                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Products</button>
            </form>

        </div>
    );
};

export default AddProducts;