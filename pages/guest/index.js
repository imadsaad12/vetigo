import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Header, Row } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";
import { useState, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Menu from "../menu";

export default function Guest({ navigation }) {
  const [selected, setSelected] = useState("");
  const [selectedVetId, setSelectedVetId] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const res = await AsyncStorage.getItem("data");

    if (res !== null) {
      return JSON.parse(res);
    }
    return {};
  };

  useLayoutEffect(() => {
    getData().then((res) => {
      setData(res);
      setFilteredData(res.farmers);
    });
  }, []);

  const selectData = [
    { key: "Bint Jbeil", value: "Bint Jbeil" },
    { key: "Baalback", value: "Baalback" },
    { key: "Nabatieh", value: "Nabatieh" },
    { key: "Beirut", value: "Beirut" },
    { key: "Tripoli", value: "Tripoli" },
    { key: "Tyre", value: "Tyre" },
    { key: "Sidon", value: "Sidon" },
    { key: "Jounieh", value: "Jounieh" },
    { key: "Zahle", value: "Zahle" },
    { key: "Byblos", value: "Byblos" },
    { key: "Aley", value: "Aley" },
    { key: "Batroun", value: "Batroun" },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Farmers
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
                  data.farmers.filter(({ location }) => location === selected)
                );
              }}
            />
          </View>
          <View style={{ height: "100%" }}>
            {filteredData.map((item) => {
              return (
                <Row style={{ borderRadius: 4 }}>
                  <View
                    style={{
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
                        {item.phoneNumber}
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "white",
                          width: "80%",
                        }}
                      >
                        {item.product}
                      </Text>
                    </View>
                  </View>
                </Row>
              );
            })}
          </View>
        </ScrollView>
        <Menu navigation={navigation} />
      </Container>
    </SafeAreaView>
  );
}
