import { useAuth0 } from '@auth0/auth0-react';
import Divider from '@mui/material/Divider';
import { BadgePlus, CircleArrowOutUpRight, CircleDollarSign, Home, LogOut, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


export default function AdminSidebar() {

  const { logout } = useAuth0();
  const location = useLocation();
  const path = location.pathname


  return (
    <div className='relative'>
      <div className='w-[350px] border fixed top-0 left-0 h-full flex flex-col'>
        <h1 className="text-3xl font-bold tracking-tight font-inter text-center my-4">
          SoRa Sneakers
        </h1>

        <Divider />

        <div className='flex-grow overflow-auto'>
          <Link to="/admin/manageHomePage" 
          className={`flex justify-center items-center my-4 gap-3 mx-6 py-4 
          rounded-md hover:bg-violet2 hover:text-white ${path == "/admin/manageHomePage" ? "bg-violet2 hover:bg-violet3 text-white" : ""}`}>
            <Home width={36} height={36} />
            <p className='text-2xl font-inter font-semibold '>Home Page Details</p>
          </Link>

          <Link to="/admin/addProducts" 
          className={`flex justify-center items-center my-4 gap-3 
          mx-6 py-4 rounded-md hover:bg-violet2 hover:text-white ${path == "/admin/addProducts" ? "bg-violet2 hover:bg-violet3 text-white" : ""}`}>
            <BadgePlus width={36} height={36} className='-ml-[70px]' />
            <p className='text-2xl font-inter font-semibold '>Add Product</p>
          </Link>

          <Link to="/admin/manageProducts"  className={`flex justify-center items-center my-4 gap-3 mx-6 py-4 
          rounded-md hover:bg-violet2 hover:text-white ${path == "/admin/manageProducts" ? "bg-violet2 hover:bg-violet3 text-white" : ""}`}>
            <ShoppingBag width={36} height={36} className='-ml-[38px]' />
            <p className='text-2xl font-inter font-semibold '>Product Details</p>
          </Link>

          <Link to="/admin/orderDetails"  className={`flex justify-center items-center my-4 gap-3 mx-6 py-4 
          rounded-md hover:bg-violet2 hover:text-white ${path == "/admin/orderDetails" ? "bg-violet2 hover:bg-violet3 text-white" : ""}`}>
            <CircleDollarSign width={36} height={36} className='-ml-[63px]' />
            <p className='text-2xl font-inter font-semibold '>Order Details</p>
          </Link>
        </div>

        <div className='border w-full my-4'></div>

        <Link to="/" className='flex justify-center items-center mx-6 gap-4 py-4 my-4 rounded-md hover:bg-violet2 hover:text-white'>
          <CircleArrowOutUpRight width={30} height={30} className='-ml-[82px]' />
          <p className='text-2xl font-inter font-semibold '>Exit Admin</p>
          
        </Link>

        <Link to="" onClick={() => logout()} className='flex justify-center items-center mb-4 mx-6 gap-3 py-4 rounded-md hover:bg-violet2 hover:text-white'>
          <LogOut width={36} height={36} className='-ml-[120px]' />
          <p className='text-2xl font-inter font-semibold '>Logout</p>
        </Link>
      </div>

      

      {/* <ManageShopForm 
        shop={shop} 
        onSave={isEditing ? updateShop : createShop} 
        isLoading={isCreateLoading || isUpdateLoading }
      /> */}

      
    </div>
    
  );
}
