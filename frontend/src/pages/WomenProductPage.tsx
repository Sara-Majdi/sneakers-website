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
  //
  
  //
}

export default WomenProductPage