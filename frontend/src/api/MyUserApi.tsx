import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/* describe all the properties that are needed in the body req */
type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

/* hook 1: components use to call the endpoint*/
export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    /* fetch request, that accepts 'CreateUserRequest' */
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch (`${API_BASE_URL}/api/my/user`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                /* tells backend server, what type of file to expect from the body req */
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        /* error message to be displayed if things go unaccordingly  */
        if(!response.ok){
            throw new Error("Failed to create user");
        }
    };

    /* passing 'createMyUserRequest' through useMutation hook to manage things like loading,error and etc*/
    const { 
        mutateAsync: createUser, 
        isLoading, 
        isError, 
        isSuccess,
    } = useMutation(createMyUserRequest);

    return {
        createUser, 
        isLoading,
        isError,
        isSuccess,
    };
};