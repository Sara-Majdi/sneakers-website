import { useGetShop } from "@/api/ShopApi";
import ShopInfo from "@/components/ShopInfo";
import SizeStock from "@/components/SizeStock";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const { shopId } = useParams();
    const { shop, isLoading } = useGetShop(shopId);

    if (isLoading || !shop) {
        return "Loading...";
    }

    return (
        <div className="flex flex-col gap-10">
            <AspectRatio ratio={16 / 5}>
                <img src={shop.imageUrl} 
                className="rounded-md object-cover h-full w-full" 
                />
            </AspectRatio>
            <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                <div className="flex flex-col gap-4">
                    <ShopInfo shop={shop} />
                    <span className="text-2xl font-bold tracking-tight">Menu</span>
                    {shop.sizeStock.map((sizeStock) => (
                        <SizeStock sizeStock={sizeStock} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailPage;