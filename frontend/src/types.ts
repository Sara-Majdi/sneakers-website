export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
    isAdmin: false;
};

export type SizeStock = {
    _id: string;
    size: string;
    stock: number;
};

export type Product = {
    _id: string;
    productName: string;
    productCode: string;
    productPrice: string;
    productStock: string;
    productCategory: string;
    productSizes: string[];
    productDescription: string;
    productTags: string;
    productImages: string[];
}

export type ShopSearchResponse = {
    data: Product[];
    pagination: {
        total: number;
        page: number;
        pages: number;
    };
};