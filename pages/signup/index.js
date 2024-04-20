import {
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Text as Title,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Text } from "./styles";
import { CustomizedButton, Input } from "../login/styles";
import RNPickerSelect from "react-native-picker-select";
import { ScrollView } from "react-native-gesture-handler";
import Picker from "react-native-picker-select";
import { SelectList } from "react-native-dropdown-select-list";

export default function Signup({ navigation }) {
  const fields = [
    { name: "firstName", placeholder: "First name" },
    { name: "lastName", placeholder: "Last name" },
    { name: "phoneNumber", placeholder: "Phone number" },
    { name: "numberOfChicken", placeholder: "Number of chicken" },
  ];
  const [selected, setSelected] = useState("");

  const data = [
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: "100%",
          marginTop: 50,
        }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <Container>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "flex-start",
              alignItems: "center",
              marginLeft: 50,
            }}
          >
            <Image
              source={require("../login/logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Title
              style={{
                fontSize: 20,
                marginLeft: 30,
              }}
            >
              Create your account
            </Title>
          </View>
          <View style={{ width: "80%" }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              maxHeight={100}
            />
          </View>
          {fields.map(() => (
            <Input
              // onChangeText={(value) => setInput(value)}
              placeholder="Username"
            />
          ))}

          <View style={{ width: "80%", borderRadius: 20 }}>
            <Button
              title="sign up"
              onPress={() => navigation.navigate("AddVet")}
              color="#5b9a72"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Text>already have account?</Text>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
