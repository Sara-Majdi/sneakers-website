import { useGetProduct } from '@/api/ProductsApi';
import { Product } from '@/types';
import { HoverEffect } from "../components/ui/card-hover-effect";
import { ShoppingCart } from 'lucide-react';



const MenProductPage: React.FC = () => {
  const { product } = useGetProduct(); //Retrieving All products from the DB 
  console.log(product)

  const transformTag = (tag:string) => {
    switch (tag) {
      case 'newArrivals':
        return 'New Arrivals';
      case 'bestSelling':
        return 'Best Selling';
      case 'noTags':
        return false; // Hide "No Tags"
      default:
        return `${tag}% OFF`;
    }
  };


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-6'>
         {Array.isArray(product) && product.map((shoe: Product) => {
            const newTag = transformTag(shoe.productTags)
            return (
                <div>
                    <div key={shoe.productCode} className=' flex flex-col items-center rounded-lg border h-full'>
                        <div  className='border-b w-full items-center justify-center flex rounded-sm border-gray-300 relative'>
                            <img src={`http://localhost:7000/uploads/${shoe.productImages[0]}`} height={20} width={320} alt="" className='' />
                            <div className='absolute top-1 right-6  rounded-full p-3 hover:bg-black hover:text-violet2' >
                                <ShoppingCart width={32} height={32} />
                            </div>
                        </div>
                        <div className='grid grid-cols- h-full  w-full px-4 font-inter gap-10 py-4 '>
                            <h1 className='text-[18px] font-bold'>{shoe.productName}</h1>

                            <div className='flex justify-between h-full items-end'>
                                <p className={`text-nowrap h-fit font-bold text-[18px] rounded-full text-white px-6 py-2 text-green-60 ${newTag ? "bg-violet2" : ""} `}>{newTag}</p>
                                <p className='text-nowrap h-fit font-extrabold text-[18px] rounded-full bg-green-100 px-6 py-2 text-green-60'>RM {shoe.productPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        )})}

            
    </div>
  )
}

export default MenProductPage