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
              style={{
                backgroundColor: "green",
                width: "80%",
                border: "2px solid gray",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <CustomizedButton
                color="white"
                title={"Login"}
                onPress={() => setChangeText(!changeText)}
              />
            </Pressable>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text>create account</Text>
            </TouchableOpacity>
          </InputsContainer>
          {/* <ScrollView>
          <Title>{changeText ? "Hello" : "text changed"}</Title>
          <TouchableOpacity>
            <CustomizedButton
              color="red"
              title={"click to change text"}
              onPress={() => setChangeText(!changeText)}
            />
          </TouchableOpacity>
          <Input onChangeText={(value) => setInput(value)} />
          <Title>{input}</Title>
        </ScrollView> */}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
