import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { Container, Header, Row } from "./styles";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Menu from "../../menu";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

export default function ChooseVet({
  navigation,
  route: {
    params: { data, setData },
  },
}) {
  const [selected, setSelected] = useState("");

  const selectData = [
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
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
              save="value"
              maxHeight={100}
            />
          </View>
          <View style={{ height: "100%" }}>
            <FlatList
              data={data.vets}
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
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            color: "white",
                            textTransform: "uppercase",
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
                    <AntDesign
                      name="pluscircle"
                      size={30}
                      color="white"
                      onPress={() => console.log("as")}
                    />
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
