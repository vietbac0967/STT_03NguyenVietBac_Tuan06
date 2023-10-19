import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";

export default function Screen1() {
  const DATA = [
    {
      id: 1,
      img: "ca_nau_lau.png",
      title: "Ca nấu lẩu,nấu mì mini",
      shop: "Devang",
    },
    {
      id: 2,
      img: "ga_bo_toi.png",
      title: "1KG KHÔ GÀ BƠ Tỏi ...",
      shop: "LTD Food",
    },
    {
      id: 3,
      img: "xa_can_cau.png",
      title: "Xe cần cẩu đa năng",
      shop: "Thế giới đồ chơi",
    },
    {
      id: 4,
      img: "do_choi_dang_mo_hinh.png",
      title: "Đồ chơi dang mô hình",
      shop: "Thế giới đồ chơi",
    },
    {
      id: 5,
      img: "lanh_dao_gian_don.png",
      title: "Lãnh đạo giản đơn",
      shop: "Minh long Book",
    },
    {
      id: 6,
      img: "hieu_long_con_tre.png",
      title: "Hiểu lòng con trẻ",
      shop: "Minh Long Book",
    },
    {
      id: 7,
      img: "trump_1.png",
      title: "Donald Trump Thiên \n tài lãnh đạo",
      shop: "Minh Long Book",
    },
  ];

  const Item = ({ obj }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 74, height: 74 }}
            resizeMode="contain"
            source={require(`../assets/${obj.img}`)}
          />
          <View style={{ paddingLeft: 8 }}>
            <Text>{obj.title}</Text>
            <Text style={{ color: "#E83030" }}>Shop: {obj.shop}</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", marginRight: 10 }}>
          <Pressable
            onPress={() => {
              setCount(count + 1);
            }}
            style={{
              backgroundColor: "#F31111",
              width: 88,
              height: 38,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                paddingTop: 5,
                color: "white",
              }}
            >
              Chat
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/left.png")}
        />
        <Text style={{ color: "white" }}>Chat</Text>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/cart.png")}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ textAlign: "center", padding: 5 }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item obj={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
