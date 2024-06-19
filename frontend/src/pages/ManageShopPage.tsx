import Divider from '@mui/material/Divider';
import { BadgePlus, CircleDollarSign, Home, LogOut, ShoppingBag } from 'lucide-react';
import ManageShopForm from '@/forms/manage-products-form/ManageShopForm';
import { useCreateMyShop, useGetMyShop, useUpdateMyShop } from "@/api/MyShopApi";


export default function ManageShopPage() {

  const { createShop, isLoading: isCreateLoading } = useCreateMyShop();
  const { shop } = useGetMyShop();
  const {  updateShop, isLoading: isUpdateLoading } = useUpdateMyShop();

  const isEditing = !!shop;

  return (
    <div className='w-[350px] border'>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-inter text-center my-4">
          SoRa Sneakers
        </h1>

        <Divider />

        <div className=''>

          <div className='flex justify-center items-center my-4 gap-3  mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white '>
            <Home width={36} height={36} />
            <p className='text-2xl font-inter font-semibold '>Home Page Details</p>
          </div>

          <div className='flex justify-center items-center my-4 gap-3 bg-violet2 mx-6 py-4 rounded-md hover:bg-violet3 text-white'>
            <BadgePlus width={36} height={36} className='-ml-[70px]' />
            <p className='text-2xl font-inter font-semibold '>Add Product</p>
          </div>

          <div className='flex justify-center items-center my-4 gap-3  mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white '>
            <ShoppingBag width={36} height={36} className='-ml-[38px]' />
            <p className='text-2xl font-inter font-semibold '>Product Details</p>
          </div>

          <div className='flex justify-center items-center my-4 gap-3  mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white '>
            <CircleDollarSign width={36} height={36} className='-ml-[63px]' />
            <p className='text-2xl font-inter font-semibold '>Order Details</p>
          </div>

          <div className='mt-[235px] border'></div>

          <div className='flex justify-center items-center mt-4 mb-4 gap-3  mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white'>
            <LogOut width={36} height={36} className='-ml-[140px]' />
            <p className='text-2xl font-inter font-semibold '>Logout</p>
          </div>

        </div>
      
      </div>

      {/* <ManageShopForm 
        shop={shop} 
        onSave={isEditing ? updateShop : createShop} 
        isLoading={isCreateLoading || isUpdateLoading }
      /> */}

      
    </div>
    
  );
}
