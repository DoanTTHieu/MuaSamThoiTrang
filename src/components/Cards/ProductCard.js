import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Proptype from 'prop-types';

const deviceWidth = Math.round(Dimensions.get("window").width);

const ProductCard = ({ type, data, onSelect }) => {
  const { name, image, description, price } = data.item;

  const mediumCard = () => {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={(data) => onSelect(data)}>
          <Image style={styles.productImage} source={image} />
            <View>
              <Text style={styles.title}>{name}</Text>
            </View>
            <View>
              <Text style={styles.price}>{price}</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  };

  const bigCard = () => {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.smallCard}
          onPress={(data) => onSelect(data)}
        >
          <Image style={styles.productImageSmall} source={image} />
          <View>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View>
            <Text style={styles.price}>{price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  switch (type) {
    case "promo": 
      return mediumCard();
    case "trend":
      return mediumCard();
    case "normal":
      return bigCard();
    default:
      return mediumCard();
  }

};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    //alignItems: "center",
    //margin: 10,
    marginLeft: 10,
    marginVertical: 10
  },
  productImage: {
    borderRadius: 5,
    height: deviceWidth / 2 - 20,
    width: deviceWidth / 2.5 - 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    //alignItems: "center",
    //textAlign: "center",
    marginTop: 5,
    color: "#636363",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    //alignItems: "center",
    //textAlign: "center",
    marginTop: 5,
    color: "red",
  },
  smallCard: {
    flex: 1,
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    //alignItems: "center",
    margin: 10,
  },

  productImageSmall: {
    borderRadius: 10,
    height: deviceWidth / 2,
    width: deviceWidth / 2 - 20,
    backgroundColor: "red",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#581845",
  },
});

ProductCard.propTypes = {
  type: Proptype.string,
  data: Proptype.object,
  onSelect: Proptype.func
}

ProductCard.defaultProp = {
  type: "promo",

}

export default ProductCard;
