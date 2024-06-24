import { useGetProduct } from '@/api/ProductsApi';
import Counter from '@/components/Counter';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import React from 'react'
import { useLocation } from 'react-router-dom';
import MenProductPage from './MenProductPage';
import WomenProductPage from './WomenProductPage';
import KidsProductPage from './KidsProductPage';

const ProductDetailsPage = () => {
    const { product } = useGetProduct(); //Retrieving All products from the DB 

    const location = useLocation(); // Retrieving the path of the current page
    const path = location.pathname

    const parts = path.split("/"); //Filtering the product id from the code
    const id = parts[parts.length - 1]; 

  // Filter products to only include those with this specific productID
  const filteredProduct = Array.isArray(product) ? product.filter(shoe => shoe._id === id) : [];
  const productCategory = filteredProduct.length > 0 ? filteredProduct[0].productCategory : null; //Getting Product Category



  return (
    <div  className="">
        {filteredProduct.map((shoe: Product) => (
            <div className=''>
                <div className='grid grid-cols-[10%_50%_40%] container mx-auto flex-1 py-10' >
                    {/* Small Images Rows */}
                    <div className='flex flex-col'>
                        <div className=''>
                            {shoe.productImages.map((img) => (
                                <img 
                                src={`http://localhost:7000/uploads/${img}`}
                                height={20} width={320} alt="" className='border border-gray-400' /> 
                            ))}

                        </div>
                    
                    </div>

                    {/* Large Images Box */}
                    <div className='px' >
                        <img 
                        src={`http://localhost:7000/uploads/${shoe.productImages[0]}`}
                        height={60} width={670} alt="" className='object-cover' />

                    </div>
                    

                    {/* Product Details */}
                    <div className='ml-4'>
                        <h1 className='text-[32px] font-[600] italic min-h-[50px] font-inter'>{(shoe.productName).toUpperCase()}</h1>
                        <p className='font-mono mt-1 text-[18px]' >SKU: {shoe.productCode}</p>
                        
                        <p className='font-inter font-semibold my-8 text-3xl' >RM {(parseInt((shoe.productPrice), 10)).toFixed(2)}</p>
                        
                        <h1 className='font-mono font-medium text-[18px] mb-2'>CHOOSE YOUR SIZE:</h1>
                        <div className='grid grid-cols-3 gap-2' >
                            {shoe.productSizes.map((size) => (
                                <Button className='border-[4px] border-black py-5 text-center rounded-none font-bold text-[16px] hover:bg-violet2 transition-all'>
                                    <h1 className='text-[16px]'>{size}</h1>
                                </Button>
                            ))}
                        </div>

                        <h1 className='min-h-[50px] font-inter my-12 leading-7'>{shoe.productDescription}</h1>


                        <div className='flex justify-between items-end' >
                            <div>
                                <h1 className='font-mono font-medium text-[18px] mb-2'>QUANTITY:</h1>
                                <Counter />
                            </div>

                            <Button className='border-[4px] border-black bg-violet2 py-7 px-24 text-center rounded-full font-inter font-bold text-[16px] hover:bg-black transition-all'>
                                <h1 className='text-[22px]'>Add To Cart</h1>
                            </Button>
                        </div>
                    </div>
                </div>

                <h1 className='mt-16 text-center text-[40px] font-extrabold 
                italic min-h-[50px] font-inter bg-violet2 py-4 text-white hover:text-black'>
                    YOU MAY ALSO LIKE
                </h1>


                    
                {productCategory === "men" && <MenProductPage />}
                {productCategory === "women" && <WomenProductPage />}
                {productCategory === "kids" && <KidsProductPage />}
                    

            </div>
        ))}
        
    </div>
  )
}

export default ProductDetailsPage