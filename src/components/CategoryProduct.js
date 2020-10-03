import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CategoryItem = ({ data }) => {
  const { name, image } = data.item;

  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Image style={styles.foodImage} source={image} />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  foodImage: {
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 5,
    color: "#636363",
  },
});

export default CategoryItem;
