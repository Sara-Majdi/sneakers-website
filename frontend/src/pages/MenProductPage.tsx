import { useGetProduct } from '@/api/ProductsApi';
import { Product } from '@/types';
import shoe1 from "../assets/shoe2.webp";



const MenProductPage: React.FC = () => {
  const { product } = useGetProduct(); //Retrieving All products from the DB 
  console.log(product)



  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-6'>
         {Array.isArray(product) && product.map((shoe: Product) => (
            <div key={shoe.productCode} className=' flex flex-col items-center rounded-lg'>
                <div  className='border w-full items-center justify-center flex rounded-sm border-gray-300'>
                    <img src={`http://localhost:7000/uploads/${shoe.productImages[0]}`} height={20} width={320} alt="" className='' />
                </div>
                <div className='flex justify-between w-full px-2 font-inter gap-10 py-2'>
                    <h1 className='text-[16px] font-medium'>{shoe.productName}</h1>

                    <div>

                        <p className='text-nowrap font-bold text-[20px]'>RM {shoe.productPrice}</p>
                    </div>
                </div>
            </div>
        ))}

            
    </div>
  )
}

export default MenProductPage