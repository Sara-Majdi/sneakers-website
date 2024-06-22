import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Shop } from "@/types";
import { useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";


// Using Zod to validate all the form inputs 
const formSchema = z.object({
    productName: z.string({
        required_error: "Product Name is required",
    }),
    productCode: z.string({
        required_error: "Product Code is required",
    }),
    productPrice: z.coerce.number({
        required_error: "Product Price is required",
        invalid_type_error: "Must be a valid number",
    }).min(10, { message: "Product Price should be at least RM10" }),

    productStock: z.coerce.number({
        required_error: "Product Stock is required",
        invalid_type_error: "Must be a valid integer",
    }).int().min(10, { message: "Product Stock should be at least 10" }),

    productCategory: z.array(z.string()).optional(),

    productSizes: z.string({required_error: "Please select at least one Size"}).array().min( 1 , {
        message: "Please select at least one Size"
    }),

    productDescription: z.string({
        required_error: "Product Description is required",
    }).min(100, { message: "Product Description should be at least 100 characters long" }),

    productTags: z.array(z.string()).optional(),

    productImages: z.instanceof(File, { message: "Product Image is required" }),

    shopName: z.string({
        required_error: "shop name is required",
    }),
    color: z.string({
        required_error: "color name is required",
    }),
    price: z.coerce.number({
        required_error: "price name is required",
        invalid_type_error: "must be a valid number",
    }),
    category: z.array(z.string()).nonempty({
        message: "please select atleast one item"
    }),
    sizeStock: z.array(
        z.object({
            size: z.string().min(1, "size is required"),
            stock: z.coerce.number().min(1, "stock is required"),
        })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
})
.refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
});

type ProductFormData = z.infer<typeof formSchema>

type Props = {
    shop?: Shop;
    onSave: (shopFormData: FormData) => void;
    isLoading: boolean;
}

const AddProductsForm = ({ onSave, isLoading, shop }: Props) => {
    const form = useForm<ProductFormData>({
        resolver: zodResolver(formSchema),

    });

    // Used for updating Products
    useEffect(() =>{
        if(!shop){
            return;
        }

        const priceFormatted = parseInt(
            (shop.price / 100).toFixed(2)//delete: dont need to 2dc decimal point
        );

        const sizeStockFormatted = shop.sizeStock.map((item)=> ({
            ...item,
            stock: parseInt((item.stock / 100).toFixed(2)),
        }));

        const updatedShop = {
            ...shop,
            price: priceFormatted,
            sizeStock: sizeStockFormatted,
        };

        form.reset(updatedShop);
    }, [form, shop]);

    const onSubmit = (formDataJson: ProductFormData) => {
        // TODO - convert formDataJson to a new FormData object
        const formData= new FormData();

        formData.append("productName", formDataJson.productName);
        formData.append("productCode", formDataJson.productCode);
        formData.append(
            "productPrice", 
            (formDataJson.productPrice * 100).toString()
        );
        formData.append("productStock", (formDataJson.productStock * 100).toString());

        // formDataJson.category.forEach((category, index) => {
        //     formData.append(`category[${index}]`, category);
        // });

        // formDataJson.sizeStock.forEach((sizeStock, index) => {
        //     formData.append(`sizeStock[${index}][size]`, sizeStock.size)
        //     formData.append(
        //         `sizeStock[${index}][stock]`, 
        //         (sizeStock.stock * 100).toString()
        //     );
        // });

        // if (formDataJson.imageFile) {
        //     formData.append(`imageFile`, formDataJson.imageFile);
        // }
        
        onSave(formData);
    };

    return(
        <div className="flex">
            <AdminSidebar />
            <Form {...form}>
                
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)} 
                        className="space-y-8 bg-gray-50 px-10 pb-10 py-4 rounded-lg w-full ml-[350px]"
                    >
                        
                        <DetailsSection/>
                        {isLoading ? <LoadingButton/> : 
                            <Button type="submit" className="bg-violet2 text-2xl p-8 hover:bg-black hover:text-violet2 font-bold w-full font-inter ">
                                Add Product
                            </Button> 
                        }
                    </form>
                
            </Form>
        </div>
    )
};

export default AddProductsForm;