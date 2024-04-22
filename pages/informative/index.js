import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { Container, Header, Row } from "./styles";
import {
  AntDesign,
  Entypo,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

export default function Informative({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <View style={{ height: "90%" }}>
          <FlatList
            data={[1, 1, 1]}
            renderItem={() => (
              <Row style={{ borderRadius: 4 }}>
                <Image
                  source={require("../farmer/market.jpg")}
                  style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 10,
                  }}
                />
                <Text style={{ alignSelf: "flex-start", fontWeight: "bold" }}>
                  A Very Big Title
                </Text>
                <Text style={{ color: "gray" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </Text>
              </Row>
            )}
          />
        </View>

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
            position: "relative",
            backgroundColor: "#5b9a72",
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            // onPress={() => navigation.navigate("Account")}
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
            // onPress={() => navigation.navigate("Account")}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text style={{ color: "#c6dbca" }}>Informative</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("LogIn")}
          >
            <SimpleLineIcons name="logout" size={20} color="black" />
            <Text style={{ color: "#c6dbca" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
}
