import { FlatList, Image, Text, View } from "react-native";
import { useState } from "react";
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
import { SelectList } from "react-native-dropdown-select-list";

export default function ChooseMarket({ navigation }) {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([
    {
      title: "Beirut Souks",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgNnCnWnBrTJ4BU_hg5qFIyFG65zE5ydBXyjpK0VrQw&s",
      location: "Bint Jbeil",
      description:
        "Beirut Souks is a major commercial district in downtown Beirut, Lebanon.",
    },
    {
      title: "ABC Achrafieh",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-b7lbFMtycRVA5__AHWW83eB_BXHUhUiGTtLVWUWIA&s",
      location: "Nabatieh",
      description:
        "ABC Achrafieh is a popular shopping mall located in the Achrafieh district of Beirut.",
    },
    {
      title: "Le Mall",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVnyVxzGojjB3ZdmAJqskIBV7fRtfLzJnyZ_EVycRDg&s",
      location: "Sin El Fil",
      description:
        "Le Mall is a large shopping center located in Sin El Fil, Lebanon, offering a variety of retail stores, restaurants, and entertainment options.",
    },
    {
      title: "City Centre Beirut",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmxKNjSNtJ2EKJHSP0jku7CqbiL-9TFAuMTBQVQpDEQ&s",
      location: "Batroun",
      description:
        "City Centre Beirut is a modern shopping complex located in Hazmieh, Lebanon, featuring international brands, a cinema, and dining options.",
    },
    {
      title: "ABC Dbayeh",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaN8mRFPhIsV2HP2gX3qCRBDgniMr-dogWP7_gh69eTg&s",
      location: "Jounieh",
      description:
        "ABC Dbayeh is a popular shopping destination located in Dbayeh, Lebanon, offering a wide range of stores, restaurants, and entertainment facilities.",
    },
    {
      title: "City Mall",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNe5RNc3hbed8gcGwGGwsy-Ignjyh8695SjCqxdthcdQ&s",
      location: "Tripoli",
      description:
        "City Mall is a shopping and entertainment complex located in the Dora district of Beirut, Lebanon.",
    },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const selectData = [
    { key: "All", value: "All" },
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
        <View style={{ height: "80%" }}>
          <View style={{ width: "80%", alignSelf: "center", marginBottom: 30 }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={selectData}
              // save="value"
              maxHeight={100}
              onSelect={() => {
                if (selected === "All") {
                  setFilteredData(data);
                } else {
                  setFilteredData(
                    data.filter(({ location }) => location === selected)
                  );
                }
              }}
            />
          </View>
          <ScrollView>
            {filteredData.map(({ location, imageUrl, description, title }) => (
              <Row style={{ borderRadius: 4 }}>
                <Image
                  source={{ uri: imageUrl }}
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
                    {title}
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
                      {location}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "gray",
                      width: "30%",
                    }}
                  >
                    {description}
                  </Text>
                </View>
              </Row>
            ))}
          </ScrollView>

          {/* <FlatList
            data={filteredData}
            renderItem={({
              item: { location, imageUrl, description, title },
            }) => (
              <Row style={{ borderRadius: 4 }}>
                <Image
                  source={{ uri: imageUrl }}
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
                    {title}
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
                      {location}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "gray",
                      width: "30%",
                    }}
                  >
                    {description}
                  </Text>
                </View>
              </Row>
            )}
          /> */}
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
