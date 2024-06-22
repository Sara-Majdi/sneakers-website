import { useCreateProduct, useGetMyShop, useUpdateMyShop } from "@/api/ProductsApi";
import AddProductsForm from "@/forms/manage-shop-form/AddProductsForm";

const ManageShopPage = () => {
    const { createProduct, isLoading: isCreateLoading, redirectPath } = useCreateProduct();
    const { shop } = useGetMyShop();
    const {  updateShop, isLoading: isUpdateLoading } = useUpdateMyShop();

    const isEditing = !!shop;

    return  (
        <AddProductsForm 
          shop={shop} 
          onSave={isEditing ? updateShop : createProduct} 
          isLoading={isCreateLoading || isUpdateLoading }
          redirectPath={redirectPath}
        />
    );
};

export default ManageShopPage;