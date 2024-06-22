import { Shop } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyShop = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyShopRequest = async (): Promise<Shop> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/shop`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        if(!response.ok){
            throw new Error("Failed to get shop")
        }
        return response.json();
    };

    const { data: shop, isLoading } = useQuery(
        "fetchMyShop", 
        getMyShopRequest 
    );

    return { shop, isLoading };
};

export const useCreateMyShop = () => {
    const { getAccessTokenSilently } = useAuth0();
    

    //functionn is going to accept the formData
    const createMyShopRequest = async(
        productFormData: FormData
    ):Promise<Shop[]> => {
        const accessToken = await getAccessTokenSilently();
        console.log('Form Data successfully reach here, fix the below response function')
        //console.log(productFormData)
        console.log('Form data:', Array.from(productFormData.entries()));
        const response = await fetch(`${API_BASE_URL}/api/my/shop`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                // 'Content-Type': 'multipart/form-data',
            },
            body: productFormData,
        });

        const statusCode = response.status
        const serverResponse = await response.json()
        const responseMessage = serverResponse.message
        console.log(statusCode)

        if (statusCode === 409){
            toast.error(responseMessage);
        }

        if(!response.ok){
            throw new Error("Failed to create shop");
        }

        return response.json();
    };

    const { 
        mutate: createShop, 
        isLoading, 
        isSuccess, 
        error 
    } = useMutation(createMyShopRequest);

    if(isSuccess) {
        toast.success("Product Added Successfully!")
    }
    // Now It is sent here already but giving this error
    if(error) {
        toast.error('Unable to Add Product. Product with this Product Code Already Exist.');
    }

    return { createShop, isLoading };
};

export const useUpdateMyShop = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateShopRequest = async (
        shopFormData: FormData
    ): Promise<Shop> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/shop`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: shopFormData,
        });

        if(!response){
            throw new Error("Failed to update shop");
        }

        return response.json();
    };

    const {
        mutate: updateShop,
        isLoading,
        error,
        isSuccess,
    } = useMutation(updateShopRequest);

    if(isSuccess) {
        toast.success("Shop Updated");
    }

    if (error) {
        toast.error("Unable to update shop");
    }

    return {
        updateShop, isLoading };
};