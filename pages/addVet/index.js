import {
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Text as Title,
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
        </Container>
        <Pressable
          style={{
            backgroundColor: "white",
            width: "40%",
            height: "50%",
            border: "2px solid gray",
            borderRadius: 14,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 11, color: "#5b9a72" }}>APPROVE</Text>
        </Pressable>
      </ScrollView>
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
          onPress={() => navigation.navigate("Account")}
        >
          <AntDesign name="home" size={24} color="black" />
          <Text style={{ color: "#c6dbca" }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("Account")}
        >
          <Ionicons name="information-circle-outline" size={24} color="black" />
          <Text style={{ color: "#c6dbca" }}>Informative</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Account")}
        >
          <SimpleLineIcons name="logout" size={20} color="black" />
          <Text style={{ color: "#c6dbca" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
