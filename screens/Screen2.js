import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function Screen2(props) {
  const {count}  = props;
  const DATA = [
    {
      id: 1,
      img1: "giacchuyen1.png",
      img2: "daynguon1.png",
    },
    {
      id: 2,
      img1: "dauchuyendoipsps21.png",
      img2: "dauchuyendoi1.png",
    },
    {
      id: 3,
      img1: "carbusbtops21.png",
      img2: "daucam1.png",
    },
  ];

  const Item = ({ obj }) => (
    <View style={styles.items}>
      <View style={styles.item}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require(`../assets/${obj.img1}`)}
        ></Image>
        <Text>Cáp chuyển từ Cổng{"\n"} USB sang PS2...</Text>
        <Image
          style={{ width: 106, height: 13 }}
          resizeMode="contain"
          source={require("../assets/Group4.png")}
        ></Image>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 12, fontWeight: 700 }}>69.900 đ</Text>
          <Text
            style={{
              color: "rgba(150, 157, 170, 1)",
              fontSize: 12,
              paddingLeft: 35,
            }}
          >
            -39%
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require(`../assets/${obj.img2}`)}
        ></Image>
        <Text>Cáp chuyển từ Cổng{"\n"} USB sang PS2...</Text>
        <Image
          style={{ width: 106, height: 13 }}
          resizeMode="contain"
          source={require("../assets/Group4.png")}
        ></Image>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 12, fontWeight: 700 }}>69.900 đ</Text>
          <Text
            style={{
              color: "rgba(150, 157, 170, 1)",
              fontSize: 12,
              paddingLeft: 35,
            }}
          >
            -39%
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={{ width: 24, height: 24, float: "left" }}
          source={require("../assets/left.png")}
        ></Image>

        <View
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            width: 192,
            height: 30,
            flexDirection: "row",
            padding: 5,
          }}
        >
          <Image
            style={{ width: 24, height: 24, marginLeft: 5 }}
            source={require("../assets/search.png")}
          ></Image>
          <Text style={{ paddingLeft: 10 }}>Dây cáp usb</Text>
        </View>
        <View style={styles.shopping}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/bi_cart-check.png")}
          ></Image>
          <Text style={styles.textShopping}>0</Text>
        </View>
        <AntDesign name="ellipsis1" size={24} color="white" />
      </View>

      <View style={styles.content}>
        {/* Item 1 */}
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item obj={item}></Item>}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "rgba(27, 169, 255, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  content: {
    backgroundColor: "#E5E5E5",
    paddingTop: 20,
    flex: 1,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  item: {
    marginTop: 5,
    marginLeft: 10,
  },
  img: {
    width: 155,
    height: 90,
  },
  shopping: {
    flexDirection: "row",
    position: "relative",
    textAlign: "right",
  },
  textShopping: {
    width: "17px",
    height: "17px",
    backgroundColor: "red",
    borderRadius: "50%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-5px",
    left: "80%",
    padding: "5px 10px",
  },
});
