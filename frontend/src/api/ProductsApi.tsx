import { Product } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetProduct = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getProductRequest = async (): Promise<Product> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/shop`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        if(!response.ok){
            throw new Error("Failed to get products from Database")
        }
        return response.json();
    };

    const { data: product, isLoading } = useQuery(
        "fetchProduct", 
        getProductRequest 
    );

    return { product, isLoading };
};

export const useCreateProduct = () => {
    const { getAccessTokenSilently } = useAuth0();
    

    //functionn is going to accept the formData
    const createProductRequest = async(
        productFormData: FormData
    ):Promise<Product[]> => {
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


        if(!response.ok){
            throw new Error("Failed to create shop");
        }

        return response.json();
    };

    const { 
        mutate: createProduct, 
        isLoading, 
        isSuccess, 
        error 
    } = useMutation(createProductRequest);

    let redirectPath = ""
    if(isSuccess) {
        toast.success("Product Added Successfully!")
        redirectPath = "/admin/manageProducts"
    }
    // Now It is sent here already but giving this error
    if(error) {
        toast.error('Unable to Add Product');
    }

    return { createProduct, isLoading, redirectPath };
};

export const useUpdateMyShop = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateShopRequest = async (
        shopFormData: FormData
    ): Promise<Product> => {
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
        toast.success("Product Updated");
    }

    if (error) {
        toast.error("Unable to update shop");
    }

    return {
        updateShop, isLoading };
};