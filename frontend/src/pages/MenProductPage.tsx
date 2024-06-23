import { useGetProduct } from '@/api/ProductsApi';
import { Product } from '@/types';
import Counter from '@/components/Counter';
import { useState } from 'react';




const MenProductPage: React.FC = () => {
  const { product } = useGetProduct(); //Retrieving All products from the DB 
  //console.log(product)

  // State to track the hover state for each product
  const [hoveredProduct, setHoveredProduct] = useState<{ [key: string]: boolean }>({});

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

  // Filter products to only include those with productCategory "men"
  const filteredProducts = Array.isArray(product) ? product.filter(shoe => shoe.productCategory === 'men') : [];

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-6'>
        {filteredProducts.map((shoe: Product) => {
            const newTag = transformTag(shoe.productTags)
            const offer  = typeof newTag === "string" ? parseInt(newTag, 10) : 0;
            console.log(offer)

            return (
                <div>
                    <div key={shoe.productCode} className=' flex flex-col items-center rounded-lg border h-full border-gray-400 shadow-lg transition-all hover:shadow-2xl hover:scale-105'>
                        <div  className='border-b w-full items-center justify-center flex rounded-sm border-gray-300 relative' 
                        onMouseEnter={() => setHoveredProduct(prevState => ({ ...prevState, [shoe.productCode]: true }))} 
                        onMouseLeave={() => setHoveredProduct(prevState => ({ ...prevState, [shoe.productCode]: false }))}>
                            <img 
                            src={`http://localhost:7000/uploads/${hoveredProduct[shoe.productCode] ? shoe.productImages[1] : shoe.productImages[0]}`}
                            height={20} width={320} alt="" className='' />

                            <p className={`absolute italic top-4 right-4 text-nowrap h-fit font-semibold text-[18px] rounded-full text-white px-6 py-2 text-green-60 ${newTag ? "bg-[#836FFF]" : ""} `}>{newTag}</p>
                        </div>

                        <div className='flex flex-col h-full  w-full px-4 font-inter gap-10 pt-4 pb-5 '>
                          <h1 className='text-[18px] font-bold min-h-[50px]'>{shoe.productName}</h1>

                          <div className='flex justify-between h-full items-end'>
                            {offer > 0 ? (
                              <div className=''>
                                <p className='text-nowrap h-fit font-extrabold text-[20px] rounded-full  px-6 py- text-center line-through'>RM {shoe.productPrice}</p>
                                <p className='text-nowrap h-fit font-extrabold text-[20px] rounded-full bg-green-100 px-6 py-2 text-green-60'>RM {(Number(shoe.productPrice) * offer/100 ).toFixed(2)}</p>
                                  
                              </div>
                            )
                            : (
                              <p className='text-nowrap h-fit font-extrabold text-[20px] rounded-full bg-green-100 px-6 py-2 text-green-60'>RM {shoe.productPrice}</p>
                            )
                          }


                            <Counter />
                          </div>
                        </div>
                    </div>
                </div>
            
        )})}

            
    </div>
  )
}

export default MenProductPage