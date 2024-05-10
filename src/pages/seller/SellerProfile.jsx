import { useForm } from 'react-hook-form';
import profileImage from '../../assets/logo/logo.png'

const SellerProfile = () => {
    const seller = true
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <img className='w-[150px] h-[160px]' src={profileImage} alt="userPhoto" />
                </div>
                <form className='mt-10 grid grid-cols-2 gap-10'>
                    {
                        seller && <div className=''>
                            <label htmlFor="sellerName" className='block text-sm mb-2'>Seller Name</label>
                            <input
                                {...register("sellerName")}
                                className='p-2 w-full focus:outline-[#366454]' type="text" name="sellerName" id="sellerName" placeholder='Enter sellerName' />

                        </div>
                    }
                    <div className=''>
                        <label htmlFor="sellerName" className='block text-sm mb-2'>Seller Name</label>
                        <input
                            {...register("sellerName")}
                            className='p-2 w-full focus:outline-[#366454]' type="text" name="sellerName" id="sellerName" placeholder='Enter sellerName' />

                    </div>
                    <div className=''>
                        <label htmlFor="email" className='block text-sm mb-2'>Email</label>
                        <input
                            {...register("email")}
                            className='p-2 w-full focus:outline-[#366454]' type="email" name="email" id="email" placeholder='Enter email' />
                    </div>
                    <div className=''>
                        <label htmlFor="phone" className='block text-sm mb-2'>Phone Number</label>
                        <input
                            {...register("phone")}
                            className='p-2 w-full focus:outline-[#366454]' type="number" name="phone" id="phone" placeholder='Enter number' />
                    </div>
                    <div className=''>
                        <label htmlFor="address" className='block text-sm mb-2'>Address</label>
                        <input
                            {...register("address")}
                            className='p-2 w-full focus:outline-[#366454]' type="text" name="address" id="address" placeholder='Enter address' />
                    </div>
                    <div className=''>
                        <input type="submit" className='bg-green-400 font-semibold py-2 w-full text-black cursor-pointer rounded' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellerProfile;