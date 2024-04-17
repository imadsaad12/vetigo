import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Header, Option, SelectionContainer } from "./styles";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default function Farmer({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <ImageBackground
          source={require("./pine-tree.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        >
          <Header>welcome to vetigo</Header>
          <SelectionContainer>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                width: "80%",
                height: "35%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              onPress={() => navigation.navigate("ChooseVet")}
            >
              <Text
                style={{
                  position: "absolute",
                  zIndex: 100,
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Choose {"\n"} Vet
              </Text>
              <Image
                source={require("./Vets1.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  position: "absolute",
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                borderRadius: 20,
                width: "80%",
                height: "35%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  zIndex: 100,
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Choose {"\n"} Market
              </Text>
              <Image
                source={require("./tor.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  position: "absolute",
                }}
              />
            </View>
            <View
              style={{
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                width: "100%",
                height: "12%",
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
                onPress={() => navigation.navigate("Account")}
              >
                <AntDesign name="home" size={24} color="black" />
                <Text style={{ color: "#c6dbca", fontFamily: "Cochin" }}>
                  Home
                </Text>
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
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="black"
                />
                <Text style={{ color: "#c6dbca", fontFamily: "Cochin" }}>
                  Informative
                </Text>
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
                <Text style={{ color: "#c6dbca", fontFamily: "Cochin" }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </SelectionContainer>
        </ImageBackground>
      </Container>
    </SafeAreaView>
  );
}
