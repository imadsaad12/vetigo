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

export default function AddVet({ navigation }) {
  const fields = [
    { name: "firstName", placeholder: "First name" },
    { name: "lastName", placeholder: "Last name" },
    { name: "location", placeholder: "Location" },
  ];

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
            {/* <Image
              source={require("../login/logo.png")}
              style={{ width: 40, height: 40 }}
            /> */}
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
          {fields.map(() => (
            <Input
              // onChangeText={(value) => setInput(value)}
              placeholder="Username"
            />
          ))}
          <View style={{ width: "80%", borderRadius: 20 }}>
            <Button
              title="Log in"
              onPress={() => console.log("test")}
              color="#5b9a72"
            />
          </View>
        </Container>
      </ScrollView>
      <Menu navigation={navigation} />
    </SafeAreaView>
  );
}
