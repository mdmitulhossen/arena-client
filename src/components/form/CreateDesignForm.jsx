import { useForm } from "react-hook-form";
import SizeWithQuantity from "./SizeWithQuantity";
import { useState } from "react";
import { fabricData } from "../../utilitis/demoData";

const CreateDesignForm = () => {
    const [size, setSize] = useState([1])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleSize = () => {
        const sizLength = size?.length
        const newSize = [...size, sizLength + 1]
        setSize(newSize)

    }

    const onSubmit = (data) => {

        // size and item number
        // onject to array
        const size = Object.keys(data).filter(key => key.includes('size')).map(key => data[key])
        const itemsNumber = Object.keys(data).filter(key => key.includes('itemsNumber')).map(key => data[key])

        const sizeAndItems = size.map((s, i) => {
            return {
                size: s,
                itemsNumber: itemsNumber[i]
            }
        })

        const newdata = {
            quantity: data.quantity,
            size: sizeAndItems,
            fabric: data.fabric
        }

        console.log(newdata)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-8">
                <div className="space-y-2">
                    <p className="text-2xl font-semibold">
                        Shop Name
                    </p>
                    <p className="text-lg text-[#000]/60 font-medium">
                        Classic t-shirt
                    </p>
                </div>
                {/* Quantity */}
                <div className="space-y-2">
                    <p className="text-2xl font-semibold">
                        Quantity
                    </p>

                    <input min={1} className="px-3 md:w-1/2 w-full py-1 bg-transparent border-b-2 border-[#216d53] rounded-xl" type="number" placeholder="Quantity" {...register('quantity')} />
                </div>

                {/* size */}
                <div className="space-y-2">
                    <p className="text-2xl font-semibold">
                        Size
                    </p>

                    <div className="space-y-3">
                        {
                            size?.map((s, i) => (
                                <SizeWithQuantity key={i} register={register} size={`size${i + 1}`} itemsNumber={`itemsNumber${i + 1}`} />
                            ))
                        }

                        <p onClick={handleSize} className="px-5 py-1 border inline-block cursor-pointer arenaBtn">ADD MORE SIZE</p>
                    </div>

                </div>

                {/* Fabric */}
                <div className="space-y-2">
                    <p className="text-2xl font-semibold">
                        Fabric
                    </p>
                    <select className="flex-1 px-2 py-1  w-full bg-transparent border-b-2 border-[#6A9485] rounded-xl" {...register('fabric')}>
                        {
                            fabricData?.map((item, index) => (
                                <option key={index} value={item.fabric}>{item.fabric}</option>
                            ))
                        }
                    </select>
                </div>
                {/* Price */}
                <div>
                    <p className="text-2xl font-semibold">
                        Price <span className="text-sm font-bold text-[#366454]">(Per Piece)</span>
                    </p>
                    <p className="text-2xl text-[#6A9485] font-medium">
                        200 TK
                    </p>
                </div>
            </div>
            {/* btn */}
            <div className="flex gap-6 mt-8">
                <input className=" px-5 py-3 w-full cursor-pointer arenaBtn" type="submit" value='Order Now' />
                <p className="px-5 py-3 border inline-block cursor-pointer arenaBtn w-full text-center flex items-center justify-center">ADD TO CART</p>
            </div>
        </form>
    );
};

export default CreateDesignForm;