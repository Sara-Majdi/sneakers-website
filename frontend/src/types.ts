export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export type SizeStock = {
    _id: string;
    size: string;
    stock: number;
};

export type Shop = {
    _id: string;
    user: string;
    shopName: string;
    color: string;
    price: number;
    category: string[];
    sizeStock: SizeStock[];
    imageUrl: string;
}