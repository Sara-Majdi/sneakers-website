import { useGetProduct } from '@/api/ProductsApi';
import { Product } from '@/types';
import Counter from '@/components/Counter';
import { useState } from 'react';
import FilteringDropdown from '@/components/FilteringDropdown';
import { Link } from 'react-router-dom';


type FilterTerm = string | undefined;

const WomenProductPage: React.FC = () => {
  const { product } = useGetProduct(); //Retrieving All products from the DB 
  //console.log(product)
  

  // State to track the hover state for each product
  const [hoveredProduct, setHoveredProduct] = useState<{ [key: string]: boolean }>({});
  const [filterTerm, setFilterTerm] = useState<FilterTerm>(undefined);

  
  const transformTag = (tag:string) => {
    switch (tag) {
      case 'newArrivals':
        return 'New Arrivals';
      case 'bestSelling':
        return 'Best Selling';
      case 'noTags':
        return false; // Hide "No Tags"
      default:
        return `${tag}% OFF`;
    }
  };
  
  // Filter products to only include those with productCategory "women"
  const filteredProducts = Array.isArray(product) ? product.filter(shoe => shoe.productCategory === 'women') : [];
  
  // Function to filter products by product tag
  const filterProductsByTag = (products: Product[], tag: string): Product[] => {
    if (!products) return [];

    return products.filter(product => product.productTags === tag);
  };
  //
  
  //
}

export default WomenProductPage