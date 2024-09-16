import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import malls from "../data/malls";

const MovieScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [mall, setMall] = useState([]);
  const [showTimes, setShowTimes] = useState([]);
  const [seatsData, setSeatsData] = useState([]);
  const mallsData = malls;
  console.log(mall, "selected");
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 5 }}
            name="arrowleft"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 17, fontWeight: 600, marginLeft: 5 }}>
            {route.params.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
          <Ionicons
            style={{ marginHorizontal: 10 }}
            name="filter"
            size={24}
            color="black"
          />
          <Ionicons name="share-social-outline" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginLeft: 5,
        }}
      >
        <AntDesign name="Safety" size={24} color="orange" />
        <Text style={{ paddingTop: 4, paddingLeft: 4 }}>
          Your safety is our priority
        </Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2024-09-11")}
        endDate={new Date("2024-09-20")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      {mallsData.map((item, index) => (
        <Pressable
          onPress={() => {
            setMall(item.name);
            setSeatsData(item.tableData);
          }}
          style={{ margin: 10 }}
          key={index}
        >
          <Text style={{ fontSize: 18, fontWeight: 500 }}>{item.name}</Text>
          {mall.includes(item.name) ? (
            <FlatList
              numColumns={3}
              data={item.showtimes}
              renderItem={({ item }) => (
                <Pressable
                onPress={() => navigation.navigate("Theater",{
                    mall:mall,
                    name:route.params.name,
                    timeSelected:item,
                    tableSeats:seatsData,
                })}
                
                  style={{
                    borderColor: "green",
                    borderWidth: 1,
                    width: 80,
                    borderRadius: 5,
                    margin:10,
                    padding:5
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "green",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          ) : null}
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
