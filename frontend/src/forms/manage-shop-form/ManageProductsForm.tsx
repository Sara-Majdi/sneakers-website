import { useGetProduct } from '@/api/ProductsApi';
import AdminSidebar from '@/components/AdminSidebar'
import AlertButton from '@/components/AlertButton';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Product } from '@/types';
import { Pencil, Trash2 } from 'lucide-react';


const ManageProductsForm = () => {
  const { product } = useGetProduct(); //Retrieving All products from the DB 



  return (
    <div>
        <AdminSidebar />
        

        <div className="space-y-8 bg-gray-50 px-10 pb-10 py-4  ml-[350px] pt-24">
        <Table className='font-inter py-4 '>
          {/* <TableCaption className='text-xl '>List Of Your Added Products</TableCaption> */}
          <TableHeader className='border-y-2 '>
            <TableRow className='font-extrabold'>
              <TableHead className="min-w-[220px] font-extrabold text-[17px]">Code</TableHead>
              <TableHead className='font-extrabold text-[17px]  px-2 w-[400px]'>Name</TableHead>
              <TableHead className="w-[150px] font-extrabold text-[17px] py-4 text-center">Price</TableHead>
              <TableHead className="w-[150px] font-extrabold text-[17px] py-4 text-center">Stock</TableHead>
              <TableHead className="w-[120px] text-center font-extrabold text-[17px] py-4">Category</TableHead>
              <TableHead className="w-[120px] text-center font-extrabold text-[17px] py-4">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='border-b-2'>
            
              {Array.isArray(product) && product?.length > 0 && product?.map((shoe: Product) =>  (
                <TableRow key={shoe._id} className='text-[16px] font-inter '>
                  <TableCell className="font-medium text-violet2 py-5 pr-4">SKU: {shoe.productCode}</TableCell>
                  <TableCell className="font-medium py-5 pr-6">{shoe.productName}</TableCell>
                  <TableCell className="font-medium py-5 pr-4 text-center">RM {shoe.productPrice}</TableCell>
                  <TableCell className="font-medium py-5 pr-4 text-center">{shoe.productStock}</TableCell>
                  <TableCell className="font-medium py-5 pr-4 text-center">{shoe.productCategory}</TableCell>
                  <TableCell className="font-medium py-5 pr-4 text-center">
                    <div className='flex gap-2 items-center justify-center'>
                      <Button className='py-5 px-3'>
                        <Pencil width={21} />
                      </Button>

                      <AlertButton />
                    </div>
                  </TableCell>

                </TableRow>
              ))}
              
            
          </TableBody>
        </Table>

        </div>
    </div>
  )
}

export default ManageProductsForm