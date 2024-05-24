import { useCreateMyShop, useGetMyShop } from "@/api/MyShopApi";
import ManageShopForm from "@/forms/manage-shop-form/ManageShopForm";

const ManageShopPage = () => {
    const { createShop, isLoading } = useCreateMyShop();
    const { shop } = useGetMyShop();

    return  (
        <ManageShopForm 
        shop={shop} 
        onSave={createShop} 
        isLoading={isLoading}
        />
    );
};

export default ManageShopPage;