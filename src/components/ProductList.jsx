import React from 'react';
import Card from './Card';
import { Box } from '@chakra-ui/react';
import { useProduct } from './../context/productContext';
import { useFilter } from '../context/filterContext';
function ProductList({ range }) {
  const { product } = useProduct();
  const { filterState } = useFilter();
  console.log(product);
  function getRange() {
    const rangeProducts = product.filter(({ price }) => {
      console.log(price, range);
      return Number(price) > range[0] && price < range[1];
    });
    return rangeProducts;
  }
  function getSortedList({ sortBy }, product) {
    if (sortBy === 'HIGH_TO_LOW')
      return [...product].sort((a, b) => {
        console.log(a, b);
        return Number(b.price) - Number(a.price);
      });
    if (sortBy === 'LOW_TO_HIGH')
      return [...product].sort((a, b) => {
        console.log(a, b);
        return Number(a.price) - Number(b.price);
      });
    return product;
  }
  function getCategory({ medicine, babyCare, protein }, products) {
    let filteredList = [];
    if (medicine)
      filteredList = [
        ...filteredList,
        ...products.filter(product => product.categoryName === 'medicine'),
      ];
    if (protein)
      filteredList = [
        ...filteredList,
        ...products.filter(product => product.categoryName === 'protein'),
      ];
    if (babyCare)
      filteredList = [
        ...filteredList,
        ...products.filter(product => product.categoryName === 'babyCare'),
      ];
    if (!medicine && !babyCare && !protein) return products;
    return filteredList;
  }
  function getRating({ rating }, product) {
    return product.filter(product => product.rating >= rating);
  }

  const rangeFilter = getRange();
  const sortedList = getSortedList(filterState, rangeFilter);
  const categorizedList = getCategory(filterState, sortedList);
  const ratedList = getRating(filterState, categorizedList);
  console.log(ratedList);
  return (
    <Box flexGrow="1" display="flex" flexWrap="wrap">
      {categorizedList.map(item => {
        return <Card {...item} />;
      })}
    </Box>
  );
}

export default ProductList;
