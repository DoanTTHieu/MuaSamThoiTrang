import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

import SearchBar from "../../components/InputFields/SearchBar";
import { navigate } from "../../utils/NavigationRef";

import MenuIcon from "../../../assets/icons/menu.png";

const HomeScreen = ({ navigation }) => {
  const didTapOptions = () => {
    console.log("Show Options");
  };

  const goToSearchPage = () => {
    navigate("Search", null);
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <View style={styles.searchOptions}>
          <SearchBar didTouch={() => goToSearchPage()} isHome={true} />
          <TouchableOpacity onPress={() => didTapOptions()}>
            <Image style={styles.imgIcon} source={MenuIcon} />
          </TouchableOpacity>
        </View>
        {/* scroll  */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    width: 50,
    height: 30,
  },
  searchOptions: {
    display: "flex",
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});

HomeScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default HomeScreen;
