import React from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";

import AccountImage from './../../../assets/icons/account.png';
import phoneIcon from "./../../../assets/icons/phone.png";
import mailIcon from "./../../../assets/icons/mail.png";
import messageIcon from "./../../../assets/icons/message.png";
import locationIcon from "./../../../assets/icons/location.png";

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>

      <View style={styles.titleView}>
        <View style={styles.profileView}>
          <Image
            source={AccountImage}
            style={styles.imageStyle}
          />
          <View style={{ marginLeft: 10 }}>
            <Text h4 style={{ color: "#383838" }}>
              MuaSamThoiTrang
            </Text>
            <Text style={{ color: "#7B7B7B" }}>MuaSamThoiTrang@gmail.com</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.rowInfoContainer}>
          <Image source={locationIcon} style={styles.iconStyle} />
          <Text style={styles.infoText}>Dai hoc cong nghe thong tin</Text>
        </View>
        <View style={styles.rowInfoContainer}>
          <Image source={phoneIcon} style={styles.iconStyle} />
          <Text style={styles.infoText}>(+84)09409409 </Text>
        </View>
        <View style={styles.rowInfoContainer}>
          <Image source={mailIcon} style={styles.iconStyle} />
          <Text style={styles.infoText}>MuaSamThoiTrang@gmail.com</Text>
        </View>
        <View style={[styles.rowInfoContainer, { borderBottomWidth: 0 }]}>
          <Image source={messageIcon} style={styles.iconStyle} />
          <Text style={styles.infoText}>(+84) 0700008909</Text>
        </View>
      </View>
      
      <View style={styles.bottomView}>
        <Button
          type="clear"
          titleStyle={styles.titleStyle}
          style={styles.signoutButton}
          title="Signout"
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    justifyContent: "space-between",
  },
  titleView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomView: {
    flex: 1,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileView: {
    margin: 10,
    padding: 10,
    flex: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  signoutButton: {
    marginTop: 7,
    width: 300,
    height: 50,
    backgroundColor: "#A3A2A2",
    alignSelf: "center",
    borderRadius: 30,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginTop: 3,
  },
  infoContainer: {
    padding: 10,
    flex: 9,
    backgroundColor: "#FFF",
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  infoText: {
    color: "#AE005E",
    fontWeight: "500",
  }
});

export default AccountScreen;
