import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import movies from "../data/movies";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const MovieCards = () => {
  const data = movies;
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        numColumns={2}
        ListHeaderComponent={Header}
        data={data}
        renderItem={({ item }) => (
          <Pressable style={{ margin: 10, marginHorizontal: 10 }}>
            <Image
              style={{
                aspectRatio: 2 / 3,
                height: 240,
                borderRadius: 8,
              }}
              source={{ uri: item.image }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", width: 170, marginTop:10 }}>
              {item.name.substr(0.16) + "...."}
            </Text>
            <Text style={{fontSize:15,color:"gray",marginTop:4}}>U/A . {item.language}</Text>
            <Text style={{fontSize:15,fontWeight:500,marginTop:4}}>{item.genre}</Text>
            <Pressable
            onPress={() => navigation.navigate("Movie", {
                name:item.name
            })}
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 8,
                marginRight: 10,
                width:100,
                marginTop:10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                BOOK
              </Text>
            </Pressable>
          </Pressable>
        )}
      />
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({});
