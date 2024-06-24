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
  

  
}

export default WomenProductPage