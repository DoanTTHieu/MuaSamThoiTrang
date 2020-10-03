import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import red_dress from "../../../assets/products/red_dress.jpg";
import len from "../../../assets/products/len.jpg";
import none from "../../../assets/products/none.jpg";
import vest from "../../../assets/products/vest.jpg";
import t_shirt from "../../../assets/products/t_shirt.jpg";
import jacket from "../../../assets/products/jacket.jpg";

import ProductCard from '../Cards/ProductCard';

const categories = [
  { id: 1, name: "red dress", image: red_dress, price: 100},
  { id: 2, name: "len", image: len, price: 200},
  { id: 3, name: "none", image: none, price: 300 },
  { id: 4, name: "vest", image: vest, price: 400 },
  { id: 5, name: "t_shirt", image: t_shirt, price: 500 },
  { id: 6, name: "jacket", image: jacket, price: 600 },
  
];

const ProductListView = ({ type, horizontal, didSelectItem, numColumns }) => {
  return (
    <FlatList 
      horizontal={horizontal ? true : false}
      showsHorizontalScrollIndicator={false}
      data={categories}
      numColumns={numColumns}
      renderItem={(item) => (
        <ProductCard
          type={type}
          data={item}
          onSelect={(item) => didSelectItem(item)}
        />
      )}
      keyExtractor={(item) => item.id}
      style={{backgroundColor: '#fff'}}
      
    />
  );
};

export default ProductListView;
