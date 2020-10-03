import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

import SearchBar from "../../components/InputFields/SearchBar";
import { navigate } from "../../utils/NavigationRef";

import MenuIcon from "../../../assets/icons/menu.png";

import TopCategory from "../../components/TopCategoryList";
import ProductList from "../../components/ListView/ProductListView";

const HomeScreen = ({ navigation }) => {
  const didTapOptions = () => {
    console.log("Show Options");
  };

  const goToSearchPage = () => {
    navigate("Search", null);
  };

  const didSelectItem = (item) => {
    console.log(`Selected ${item}`);
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.searchOptions}>
          <SearchBar didTouch={() => goToSearchPage()} isHome={true} />
          <TouchableOpacity onPress={() => didTapOptions()}>
            <Image style={styles.imgIcon} source={MenuIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <TopCategory style={styles.topCategory} />
          <View style={{height: 5}}></View>
          <ProductList
            type={"promo"}
            horizontal={true}
            didSelectItem={didSelectItem}
            
          />
          <View style={{height: 5}}></View>
          <ProductList
            type={"trend"}
            horizontal={true}
            didSelectItem={didSelectItem}
          />
          <View style={{height: 5}}></View>
          <ProductList
            type={"normal"}
            horizontal={false}
            numColumns={2}
            didSelectItem={didSelectItem}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  searchOptions: {
    display: "flex",
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: '#0099FF',
    alignItems: "center",
  },
});

HomeScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default HomeScreen;
