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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useLayoutEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function Farmer({ navigation }) {
  const [approvedByText, setApprovedByText] = useState("");
  const isFocused = useIsFocused();

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");

    if (res !== null) {
      return JSON.parse(res);
    }
    return {};
  };

  useLayoutEffect(() => {
    getData().then((res) => {
      const farmer = res.farmers.find(({ id }) => id === res.activeId);
      if (farmer.pendingVetApproval && farmer.pendingGovApproval) {
        const vet = res.vets.find(({ id }) => id === farmer.approvedByVetId);
        const string = `Approved by Vet : ${vet.username} and Government`;
        setApprovedByText(string);
      } else if (farmer.pendingVetApproval) {
        const vet = res.vets.find(({ id }) => id === farmer.approvedByVetId);
        const string = `Approved by Vet : ${vet.username}`;
        setApprovedByText(string);
      } else if (farmer.pendingGovApproval) {
        const string = `Approved by Government`;
        setApprovedByText(string);
      }
    });
  }, [isFocused]);

  return (
    <SafeAreaView>
      <Container>
        <ImageBackground
          source={require("./pine-tree.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        >
          <View>
            <Header>welcome</Header>
            <Text style={{ fontSize: 15, color: "white", alignSelf: "center" }}>
              {approvedByText}
            </Text>
          </View>
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
              onPress={() => navigation.navigate("ChooseMarket")}
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
                source={require("./newMarket.jpeg")}
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
          </SelectionContainer>
        </ImageBackground>
      </Container>
    </SafeAreaView>
  );
}
