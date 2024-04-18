import React, { useState } from "react";
import {
  Container,
  CustomizedButton,
  Input,
  Image,
  ImageContainer,
  Logo,
  InputsContainer,
  Text,
} from "./styles";
import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogIn({ navigation }) {
  const [changeText, setChangeText] = useState("Hello");
  const [input, setInput] = useState("write in text input");

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
              onChangeText={(value) => setInput(value)}
              placeholder="Username"
            />
            <Input
              onChangeText={(value) => setInput(value)}
              placeholder="Password"
            />
            <Pressable
              // onPress={() => navigation.navigate("Farmer")}
              // onPress={() => navigation.navigate("VetAdministrator")}
              // onPress={() => navigation.navigate("ChooseMarket")}
              onPress={() => navigation.navigate("AddVet")}
              // onPress={() => navigation.navigate("Informative")}
              style={{
                backgroundColor: "#5b9a72",
                width: "80%",
                height: 40,
                border: "2px solid gray",
                borderRadius: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
            </Pressable>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text>create account</Text>
            </TouchableOpacity>
          </InputsContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
