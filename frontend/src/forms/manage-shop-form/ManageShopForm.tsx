import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@radix-ui/react-separator";
import CategorySection from "./CategorySection";
import SizeSection from "./SizeSection";

const formSchema = z.object({
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
    imageFile: z.instanceof(File, { message: "image is required" }),
});

type shopFormData = z.infer<typeof formSchema>

type Props = {
    onSave: (shopFormData: FormData) => void;
    isLoading: boolean;
}

const ManageShopForm = ({ onSave, isLoading }: Props) => {
    const form = useForm<shopFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: [],
            sizeStock: [{size:"", stock: 0 }],
        },
    });

    const onSubmit = (formDataJson: shopFormData) => {
        // TODO - convert formDataJson to a new FormData object
    }

    return(
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-8 bg-gray-50 p-10 rounded-lg"
            >
                <DetailsSection/>
                <Separator/>
                <CategorySection/>
                <Separator/>
                <SizeSection/>
                <Separator/>
            </form>
        </Form>
    )
};

export default ManageShopForm;