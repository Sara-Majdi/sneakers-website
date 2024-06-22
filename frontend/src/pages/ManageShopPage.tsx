import { useCreateMyShop, useGetMyShop, useUpdateMyShop } from "@/api/MyShopApi";
import AddProductsForm from "@/forms/manage-shop-form/AddProductsForm";

const ManageShopPage = () => {
    const { createShop, isLoading: isCreateLoading } = useCreateMyShop();
    const { shop } = useGetMyShop();
    const {  updateShop, isLoading: isUpdateLoading } = useUpdateMyShop();

    const isEditing = !!shop;

    return  (
        <AddProductsForm 
          shop={shop} 
          onSave={isEditing ? updateShop : createShop} 
          isLoading={isCreateLoading || isUpdateLoading }
        />
    );
};

export default ManageShopPage;