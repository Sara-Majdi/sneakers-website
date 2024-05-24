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
        shopFormData: FormData
    ):Promise<Shop[]> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/shop`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: shopFormData,
        });

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
        toast.success("Shop created!")
    }

    if(error) {
        toast.error("Unable to update shop");
    }

    return { createShop, isLoading };
};