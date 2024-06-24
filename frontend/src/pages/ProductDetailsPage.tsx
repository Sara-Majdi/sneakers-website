import { useGetProduct } from '@/api/ProductsApi';
import { Product } from '@/types';
import React from 'react'
import { useLocation } from 'react-router-dom';

const ProductDetailsPage = () => {
    const { product } = useGetProduct(); //Retrieving All products from the DB 

    const location = useLocation(); // Retrieving the path of the current page
    const path = location.pathname

    const parts = path.split("/"); //Filtering the product id from the code
    const id = parts[parts.length - 1]; 

    // Filter products to only include those with productCategory "men"
  const filteredProducts = Array.isArray(product) ? product.filter(shoe => shoe._id === id) : [];
  console.log(filteredProducts)

  return (
    <div  className="container mx-auto flex-1 py-10">
        {filteredProducts.map((shoe: Product) => (
            <div className='grid grid-cols-[10%_50%_40%]' >
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
                    <p className='font-mono mt-2 text-[18px]' >SORA: {shoe.productCode}</p>
                    
                    <p className='font-inter font-semibold mt-6 text-3xl' >RM{(parseInt((shoe.productPrice), 10)).toFixed(2)}</p>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default ProductDetailsPage