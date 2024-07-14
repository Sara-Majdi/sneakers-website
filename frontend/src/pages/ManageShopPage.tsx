import { useCreateProduct, useGetProduct, useUpdateMyShop } from "@/api/ProductsApi";
import AddProductsForm from "@/forms/manage-shop-form/AddProductsForm";

const ManageShopPage = () => {
    const { createProduct, isLoading: isCreateLoading, redirectPath } = useCreateProduct();
    const { product } = useGetProduct();
    const {  updateShop, isLoading: isUpdateLoading } = useUpdateMyShop();

    const isEditing = !!product;

    

    return  (
        <AddProductsForm 
          product={product} 
          onSave={isEditing ? updateShop : createProduct} 
          isLoading={isCreateLoading || isUpdateLoading }
          redirectPath={redirectPath}
        />
    );
};

export default ManageShopPage;