import {
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Text as Title,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Text } from "./styles";
import { CustomizedButton, Input } from "../login/styles";
import RNPickerSelect from "react-native-picker-select";
import { ScrollView } from "react-native-gesture-handler";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Menu from "../menu";
import { useState, useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddVet({ navigation }) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ username: "", password: "" });

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");

    if (res !== null) {
      return JSON.parse(res);
    }
    return {};
  };
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  const [selected, setSelected] = useState("");

  const locationData = [
    { key: "Bint Jbeil", value: "Bint Jbeil" },
    { key: "Baalback", value: "Baalback" },
    { key: "Nabatieh", value: "Nabatieh" },
    { key: "Beirut", value: "Beirut" },
    { key: "Tripoli", value: "Tripoli" },
    { key: "Tyre", value: "Tyre" },
    { key: "Sidon", value: "Sidon" },
    { key: "Jounieh", value: "Jounieh" },
    { key: "Zahle", value: "Zahle" },
    { key: "Byblos", value: "Byblos" },
    { key: "Aley", value: "Aley" },
    { key: "Batroun", value: "Batroun" },
  ];

  const fields = [
    { name: "username", placeholder: "Username" },
    { name: "password", placeholder: "Password" },
  ];
  const updateData = async (payload) =>
    AsyncStorage.setItem("data", JSON.stringify(payload));

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
          height: "80%",
          marginTop: 100,
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
            <MaterialIcons
              name="admin-panel-settings"
              size={44}
              color="black"
            />
            <Title
              style={{
                fontSize: 20,
                marginLeft: 30,
                fontWeight: "bold",
              }}
            >
              Create Vet Account
            </Title>
          </View>
          <View style={{ width: "80%" }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={locationData}
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
              title="Add Vet"
              onPress={() => {
                if (input?.username && input?.password && selected) {
                  updateData({
                    ...data,
                    vets: [
                      ...data.vets,
                      {
                        ...input,
                        location: selected,
                        id: "v" + Number(data.vets.length + 1),
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
        </Container>
      </ScrollView>
      <Menu navigation={navigation} />
    </SafeAreaView>
  );
}
