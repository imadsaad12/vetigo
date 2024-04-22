import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Header, Row } from "./styles";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Menu from "../../menu";
import { SelectList } from "react-native-dropdown-select-list";
import { useState, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChooseVet({ navigation }) {
  const [selected, setSelected] = useState("");
  const [selectedVetId, setSelectedVetId] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");
    return JSON.parse(res);
  };

  useLayoutEffect(() => {
    getData().then((res) => {
      setData(res);
      setFilteredData(res.vets);
      const activeId = res.activeId;
      const activeFarmer = res.farmers.find(({ id }) => activeId === id);
      setSelectedVetId(activeFarmer?.approvedByVetId || null);
    });
  }, []);

  const updateData = async (payload) =>
    AsyncStorage.setItem("data", JSON.stringify(payload));

  const selectData = [
    { key: "Bint Jbeil", value: "Bint Jbeil" },
    { key: "Baalback", value: "Baalback" },
    { key: "Nabatieh", value: "Nabatieh" },
  ];

  const handleAddVet = async (item) => {
    setSelectedVetId(item.id);

    let farmer = data.farmers.find(({ id }) => id === data.activeId);

    farmer = { ...farmer, approvedByVetId: item.id };

    const updatedFarmers = data.farmers.map(({ id, ...rest }) => {
      if (id === data.activeId) {
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
            Vet Selection
          </Text>
        </Header>
        <ScrollView>
          <View style={{ width: "80%", alignSelf: "center", marginBottom: 30 }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={selectData}
              // save="value"
              maxHeight={100}
              onSelect={(val) => {
                setFilteredData(
                  data.vets.filter(({ location }) => location === selected)
                );
              }}
            />
          </View>
          <View style={{ height: "100%" }}>
            <FlatList
              data={filteredData}
              renderItem={({ item }) => {
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
                            textTransform: "uppercase",
                          }}
                        >
                          {item.username[0]}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          marginLeft: 15,
                          gap: 5,
                          width: "100%",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            color: "white",
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
                          {item.date}
                        </Text>
                      </View>
                    </View>
                    {selectedVetId === item.id ? (
                      <Text style={{ color: "white", fontSize: 14 }}>
                        Selected
                      </Text>
                    ) : (
                      <AntDesign
                        name="pluscircle"
                        size={30}
                        color="white"
                        onPress={() => handleAddVet(item)}
                      />
                    )}
                  </Row>
                );
              }}
            />
          </View>
        </ScrollView>
        <Menu navigation={navigation} />
      </Container>
    </SafeAreaView>
  );
}
