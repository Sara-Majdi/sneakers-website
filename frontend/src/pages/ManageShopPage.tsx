import { useCreateMyShop, useGetMyShop, useUpdateMyShop } from "@/api/MyShopApi";
import ManageShopForm from "@/forms/manage-shop-form/ManageShopForm";

const ManageShopPage = () => {
    const { createShop, isLoading: isCreateLoading } = useCreateMyShop();
    const { shop } = useGetMyShop();
    const {  updateShop, isLoading: isUpdateLoading } = useUpdateMyShop();

    const isEditing = !!shop;

    return  (
        <ManageShopForm 
        shop={shop} 
        onSave={isEditing ? updateShop : createShop} 
        isLoading={isCreateLoading || isUpdateLoading }
        />
    );
};

export default ManageShopPage;