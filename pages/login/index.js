import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Container,
  Input,
  Image,
  ImageContainer,
  Logo,
  InputsContainer,
  Text,
} from "./styles";
import { Button, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

export default function LogIn({ navigation }) {
  const [input, setInput] = useState({ username: "", password: "" });
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");

    if (res !== null) {
      return JSON.parse(res);
    }
    return {};
  };
  useEffect(() => {
    getData().then((res) => setData(res));
  }, [isFocused]);

  const updateData = async (payload) =>
    AsyncStorage.setItem("data", JSON.stringify(payload));

  const handleLogin = async () => {
    const { farmers, govs, vets } = data;

    const isFarmer = farmers.find(
      ({ username }) => username === input.username
    );

    if (isFarmer) {
      await updateData({ ...data, activeId: isFarmer.id });
      navigation.navigate("Farmer");
    }
    const isGov = govs.find(({ username }) => username === input.username);

    if (isGov) {
      await updateData({ ...data, activeId: isGov.id });
      navigation.navigate("GovAdministrator");
    }
    const isVet = vets.find(({ username }) => username === input.username);

    if (isVet) {
      await updateData({ ...data, activeId: isVet.id });
      navigation.navigate("VetAdministrator");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <Container>
          <ImageContainer>
            <Logo source={require("./logo.png")} />
            <Image source={require("../informative/3.jpeg")} />
          </ImageContainer>
          <InputsContainer>
            <Input
              onChangeText={(value) => setInput({ ...input, username: value })}
              placeholder="Username"
            />
            <Input
              onChangeText={(value) => setInput({ ...input, password: value })}
              placeholder="Password"
              secureTextEntry={true}
            />

            <View style={{ width: "80%", borderRadius: 20 }}>
              {/* <Button title="Log in" onPress={handleLogin} color="#5b9a72" /> */}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text>create account</Text>
            </TouchableOpacity>
          </InputsContainer>
          <View
            style={{
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              width: "100%",
              height: "8%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "#5b9a72",
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AntDesign name="home" size={24} color="black" />
              {/* <Text style={{ color: "#c6dbca" }}>Home</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => navigation.navigate("Informative")}
            >
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="black"
              />
              {/* <Text style={{ color: "#c6dbca" }}>Informative</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Guest")}
            >
              <AntDesign name="user" size={24} color="black" />
              {/* <Text style={{ color: "#c6dbca" }}>Logout</Text> */}
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
