import { Button, FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { Container, Header, Row } from "./styles";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

export default function VetAdministrator({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Vet Administrator
          </Text>
        </Header>

        <View style={{ height: "65%" }}>
          <FlatList
            data={[
              { value: 1 },
              { value: 2 },
              { value: 3 },
              { value: 4 },
              { value: 5 },
            ]}
            renderItem={({ index }) => {
              return (
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
                  {index === 1 ? (
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
                      <Text style={{ fontSize: 11, color: "#5b9a72" }}>
                        APPROVE
                      </Text>
                    </Pressable>
                  ) : (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "40%",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <AntDesign name="checkcircle" size={30} color="white" />
                      <Text
                        style={{
                          color: "white",
                          fontSize: 15,
                        }}
                      >
                        Approved
                      </Text>
                    </View>
                  )}
                </Row>
              );
            }}
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
