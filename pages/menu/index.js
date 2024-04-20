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

export default function Menu({ navigation }) {
  return (
    <View
      style={{
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
        backgroundColor: "#5b9a72",
        paddingTop: 5,
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
        onPress={() => navigation.navigate("Informative")}
      >
        <Ionicons name="information-circle-outline" size={24} color="black" />
        <Text style={{ color: "#c6dbca" }}>Informative</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 3,
        }}
        onPress={() => navigation.navigate("LogIn")}
      >
        <SimpleLineIcons name="logout" size={20} color="black" />
        <Text style={{ color: "#c6dbca" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
