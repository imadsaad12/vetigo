import React, { useState, useEffect } from "react";
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

export default function LogIn({ navigation }) {
  const [input, setInput] = useState({ username: "", password: "" });

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");
    return JSON.parse(res);
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  const handleLogin = () => {
    const { farmers, govs, vets } = data;
    console.log(data);
    const isFarmer = farmers.find(
      ({ username }) => username === input.username
    );
    if (isFarmer) {
      navigation.navigate("Farmer");
    }
    const isGov = govs.find(({ username }) => username === input.username);

    if (isGov) {
      navigation.navigate("Farmer");
    }
    const isVet = vets.find(({ username }) => username === input.username);

    if (isVet) {
      navigation.navigate("Farmer");
    }
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <Container>
          <ImageContainer>
            <Logo source={require("./logo.png")} />
            <Image source={require("./trees.jpg")} />
          </ImageContainer>
          <InputsContainer>
            <Input
              onChangeText={(value) => setInput({ ...input, username: value })}
              placeholder="Username"
            />
            <Input
              onChangeText={(value) => setInput({ ...input, password: value })}
              placeholder="Password"
            />

            <View style={{ width: "80%", borderRadius: 20 }}>
              <Button title="Log in" onPress={handleLogin} color="#5b9a72" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text>create account</Text>
            </TouchableOpacity>
          </InputsContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
