
import demo from '../../assets/bestSellers/sports-5.jpg'
const TrendingProductCard = ({data}) => {
    return (
        <div className="border rounded-md shadow p-4 flex gap-5 items-center">
            <div className="w-16 h-16">
                <img src={data.img} className="w-full h-full" alt="" />
            </div>
            <div>
                <p className='font-semibold text-lg line-clamp-1 text-gray-500'>{data.name}</p>
                <p className="text-gray-500">Winter wear</p>
                <div className='text-gray-500 space-x-2'>
                    <span className='font-semibold text-arena-color'>${data.newPrice?.toFixed(2)}</span>
                    <span className='text-sm'><del>${data.oldPrice?.toFixed(2)}</del></span>
                </div>
            </div>
        </div>
    );
};

export default TrendingProductCard;