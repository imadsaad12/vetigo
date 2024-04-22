import {
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Text as Title,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Text } from "./styles";
import { CustomizedButton, Input } from "../login/styles";
import RNPickerSelect from "react-native-picker-select";
import { ScrollView } from "react-native-gesture-handler";
import Picker from "react-native-picker-select";
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup({ navigation }) {
  const fields = [
    { name: "username", placeholder: "Username" },
    { name: "password", placeholder: "Password" },
    { name: "numberOfHerd", placeholder: "Number of herd" },
    { name: "landArea", placeholder: "Land area" },
    { name: "typeOfHerd", placeholder: "Type of herd" },
  ];

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");
    return JSON.parse(res);
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  const updateData = async (payload) =>
    AsyncStorage.setItem("data", JSON.stringify(payload));

  const [input, setInput] = useState({ username: "", password: "" });
  const [selected, setSelected] = useState("");

  const selectData = [
    { key: "Bint Jbeil", value: "Bint Jbeil" },
    { key: "Baalback", value: "Baalback" },
    { key: "Nabatieh", value: "Nabatieh" },
  ];

  function getCurrentDate() {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }
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
              data={selectData}
              save="value"
              maxHeight={100}
              placeholder="Choose Location"
            />
          </View>
          {fields.map(({ name, placeholder }) => (
            <Input
              onChangeText={(value) => setInput({ ...input, [name]: value })}
              placeholder={placeholder}
            />
          ))}

          <View style={{ width: "80%", borderRadius: 20 }}>
            <Button
              title="sign up"
              onPress={async () => {
                if (input?.username && input?.password && selected) {
                  await updateData({
                    ...data,
                    farmers: [
                      ...data.farmers,
                      {
                        ...input,
                        location: selected,
                        id: "f" + Number(data.farmers.length + 1),
                        approvedByVetId: null,
                        pendingVetApproval: false,
                        pendingGovApproval: false,
                        date: getCurrentDate(),
                      },
                    ],
                  });

                  setInput({});
                  navigation.navigate("LogIn");
                }
              }}
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
