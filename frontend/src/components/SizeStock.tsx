import type { SizeStock } from "../types";
import { Card, CardHeader, CardTitle } from "./ui/card";

type Props = {
    sizeStock: SizeStock;

};

const SizeStock = ({ sizeStock }: Props) => {
    return (
        <Card className="cursor-pointer">
            <CardHeader>
                <CardTitle>{sizeStock.size}</CardTitle>
            </CardHeader>
        </Card>
    );

};

export default SizeStock;