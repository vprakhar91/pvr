import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MovieCards } from "../Context";

const ThreaterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //console.log(route.params);
  const { seats, setSeats } = useContext(MovieCards);
  const noSeatSelect = (item) => {
    const seatSelected = seats.find((seat) => seat === item);
    if (seatSelected) {
      setSeats(seats.filter((seat) => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };
  const fee = 50;
  const noOfSeats = seats.length;
  const total = seats.length > 0 ? fee + noOfSeats * 240 : 0;
  console.log(total);
  console.log(seats, "seats selected");
  const showSeats = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {seats.map((seats, index) => (
          <Text style={{ marginTop: 4, fontSize: 18, paddingHorizontal: 5 }}>
            {seats}
          </Text>
        ))}
      </View>
    );
  };
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
            name="arrowleft"
            size={24}
            color="black"
          />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>
              {route.params.name}
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: "gray",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {route.params.mall}
            </Text>
          </View>
        </View>
        <AntDesign
          style={{ marginRight: 14 }}
          name="sharealt"
          size={24}
          color="black"
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {route.params.timeSelected}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          marginTop: 10,
          color: "gray",
        }}
      >
        CLASSIC (₹240)
      </Text>
      <View style={{ marginTop: 20 }} />
      <FlatList
        numColumns={7}
        data={route.params.tableSeats}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => noSeatSelect(item)}
            style={{
              margin: 10,

              borderColor: "gray",
              borderWidth: 1,

              borderRadius: 5,
            }}
          >
            {seats.includes(item) ? (
              <Text style={{ backgroundColor: "#ffc40c", padding: 8 }}>
                {item}
              </Text>
            ) : (
              <Text style={{ padding: 8 }}>{item}</Text>
            )}
          </Pressable>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 16,
          backgroundColor: "#D8D8D8",
          padding: 10,
        }}
      >
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="#ffc40c"
          />
          <Text>Selected</Text>
        </View>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="white"
          />
          <Text>Vacant</Text>
        </View>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="#989898"
          />
          <Text>Occupied</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 5 }}>
            Show end approx 10:00PM
          </Text>
          {seats.length > 0 ? (
            showSeats()
          ) : (
            <Text style={{ fontSize: 18 }}>No seat selected</Text>
          )}
        </View>
        <View
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderBottomLeftRadius: 6,
            borderTopLeftRadius: 6,
            marginTop: 10,
          }}
        >
          <Text style={{ width: 100 }}>Now with ticket cancellation</Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "#ffc40c",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 18,
        }}
      >
        {seats.length > 0 ? (
          <Text style={{ fontSize: 15, fontWeight: 500 }}>
            {seats.length} seat's selected
          </Text>
        ) : (
          <Text></Text>
        )}
        <Text></Text>
        <Pressable>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Pay ₹{total}</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default ThreaterScreen;

const styles = StyleSheet.create({});
