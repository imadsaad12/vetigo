import React, { useState } from "react";
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

export default function LogIn({
  navigation,
  route: {
    params: { data },
  },
}) {
  const [input, setInput] = useState({ username: "", password: "" });
  const handleLogin = () => {
    const { farmers, govs, vets } = data;
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
