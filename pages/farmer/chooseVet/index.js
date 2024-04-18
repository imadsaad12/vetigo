import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { Container, Header, Row } from "./styles";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

export default function ChooseVet({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Vet Selection
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
              borderWidth: 2,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
              paddingRight: 30,
              width: "80%",
              alignSelf: "center",
              marginBottom: 20,
            },
            inputAndroid: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 2,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
              paddingRight: 30,
              width: "80%",
              alignSelf: "center",
              marginBottom: 20,
            },
            placeholder: { color: "gray" },
          }}
        />
        <View style={{ height: "65%" }}>
          <FlatList
            data={[1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={() => (
              <Row style={{ borderRadius: 4 }}>
                <View
                  style={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      width: 50,
                      height: 50,
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "gray",
                      }}
                    >
                      IS
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: 15,
                      gap: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: "white",
                      }}
                    >
                      IMAD SAAD
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        color: "white",
                      }}
                    >
                      19/20/2000
                    </Text>
                  </View>
                </View>
                <AntDesign name="pluscircle" size={30} color="white" />
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
