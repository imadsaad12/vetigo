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

export default function ChooseMarket({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              letterSpacing: 3,
            }}
          >
            Market
          </Text>
        </Header>
        <RNPickerSelect
          placeholder={{ label: "Choose Location" }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              border: "none",
              borderRadius: 20,
              paddingLeft: 30,
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#5b9a71",
              color: "white",
            },
            inputAndroid: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              border: "none",
              borderRadius: 20,
              paddingLeft: 30,
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#5b9a71",
              color: "black",
            },
            placeholder: { color: "black" },
          }}
        />
        <View style={{ height: "65%" }}>
          <FlatList
            data={[1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={() => (
              <Row style={{ borderRadius: 4 }}>
                <Image
                  source={require("../tor.jpg")}
                  style={{
                    width: "30%",
                    height: "100%",
                    borderRadius: 10,
                  }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 15,
                    gap: 5,
                    height: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Beirut SuperMarket
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Entypo
                      name="location-pin"
                      size={20}
                      color="gray"
                      style={{ marginLeft: -5 }}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        color: "gray",
                      }}
                    >
                      Tahwita Al Ghadir
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "gray",
                      width: "55%",
                    }}
                  >
                    Lorem Ipsum is simply dummy the printing and typesetting to
                    industry. Lorem Ipsum has
                  </Text>
                </View>
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
            onPress={() => navigation.navigate("Account")}
          >
            <SimpleLineIcons name="logout" size={20} color="black" />
            <Text style={{ color: "#c6dbca" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
}
