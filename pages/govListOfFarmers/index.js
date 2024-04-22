import { Button, FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { Container, Header, Row } from "./styles";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function GovAdministrator({ navigation }) {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [approvedFarmers, setApprovedFarmers] = useState([]);

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");
    return JSON.parse(res);
  };

  useEffect(() => {
    getData().then((res) => {
      setData(res);
      const approvedFarmersList = res.farmers?.filter(
        ({ pendingGovApproval = null }) => pendingGovApproval
      );
      setApprovedFarmers(approvedFarmersList);
    });
  }, [isFocused]);

  const updateData = async (payload) =>
    AsyncStorage.setItem("data", JSON.stringify(payload));

  const handleApproveFarmer = async (item) => {
    let farmer = data.farmers.find(({ id }) => id === item.id);

    setApprovedFarmers([...approvedFarmers, item]);

    farmer = { ...farmer, pendingGovApproval: true };

    const updatedFarmers = data.farmers.map(({ id, ...rest }) => {
      if (id === item.id) {
        return farmer;
      }
      return { id, ...rest };
    });

    await updateData({ ...data, farmers: updatedFarmers });
  };

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Government Administrator
          </Text>
        </Header>
        <View style={{ width: "80%", borderRadius: 20, alignSelf: "center" }}>
          <Button
            title="Add vet"
            onPress={() => navigation.navigate("AddVet")}
            color="#5b9a72"
          />
        </View>
        <View style={{ height: "65%" }}>
          <FlatList
            data={data.farmers}
            renderItem={({ index, item }) => {
              const isApproved = approvedFarmers.some(
                ({ id }) => id === item.id
              );
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
                          textTransform: "capitalize",
                        }}
                      >
                        {item.username}
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
                  {!isApproved ? (
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
                      onPress={() => handleApproveFarmer(item)}
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
      </Container>
    </SafeAreaView>
  );
}
