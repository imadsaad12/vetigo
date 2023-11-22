import React, { useState } from "react";
import {
  Container,
  CustomizedButton,
  Input,
  Title,
  TouchableOpacity,
} from "./styles";
import { ScrollView } from "react-native";
export default function Home() {
  const [changeText, setChangeText] = useState("Hello");
  const [input, setInput] = useState("write in text input");

  return (
    <Container>
      <ScrollView>
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
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
        <Title>{input}</Title>
      </ScrollView>
    </Container>
  );
}
