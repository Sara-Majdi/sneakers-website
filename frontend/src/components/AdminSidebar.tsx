import { useAuth0 } from '@auth0/auth0-react';
import Divider from '@mui/material/Divider';
import { BadgePlus, CircleArrowOutUpRight, CircleDollarSign, Home, LogOut, ShoppingBag } from 'lucide-react';


export default function AdminSidebar() {

  const { logout } = useAuth0();

  // const { createShop, isLoading: isCreateLoading } = useCreateMyShop();
  // const { shop } = useGetMyShop();
  // const {  updateShop, isLoading: isUpdateLoading } = useUpdateMyShop();

  // const isEditing = !!shop;

  return (
    <div className='relative'>
      <div className='w-[350px] border fixed top-0 left-0 h-full flex flex-col'>
        <h1 className="text-3xl font-bold tracking-tight font-inter text-center my-4">
          SoRa Sneakers
        </h1>

        <Divider />

        <div className='flex-grow overflow-auto'>
          <div className='flex justify-center items-center my-4 gap-3 mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white '>
            <Home width={36} height={36} />
            <p className='text-2xl font-inter font-semibold '>Home Page Details</p>
          </div>

          <div className='flex justify-center items-center my-4 gap-3 bg-violet2 mx-6 py-4 rounded-md hover:bg-violet3 text-white'>
            <BadgePlus width={36} height={36} className='-ml-[70px]' />
            <p className='text-2xl font-inter font-semibold '>Add Product</p>
          </div>

          <div className='flex justify-center items-center my-4 gap-3 mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white '>
            <ShoppingBag width={36} height={36} className='-ml-[38px]' />
            <p className='text-2xl font-inter font-semibold '>Product Details</p>
          </div>

          <div className='flex justify-center items-center my-4 gap-3 mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white '>
            <CircleDollarSign width={36} height={36} className='-ml-[63px]' />
            <p className='text-2xl font-inter font-semibold '>Order Details</p>
          </div>
        </div>

        <div className='border w-full my-4'></div>

        <div onClick={() => logout()} className='flex justify-center items-center mx-6 gap-4 py-4 my-4 rounded-md hover:bg-violet2 hover:text-white'>
          <CircleArrowOutUpRight width={30} height={30} className='-ml-[82px]' />
          <p className='text-2xl font-inter font-semibold '>Exit Admin</p>
          
        </div>

        <div className='flex justify-center items-center mb-4 mx-6 gap-3 py-4 rounded-md hover:bg-violet2 hover:text-white'>
          <LogOut width={36} height={36} className='-ml-[120px]' />
          <p className='text-2xl font-inter font-semibold '>Logout</p>
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
