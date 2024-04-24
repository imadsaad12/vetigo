import { FlatList, Image, Linking, Text, View } from "react-native";
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
import imag1 from "./1.jpeg";
import imag2 from "./2.jpeg";
import imag3 from "./3.jpeg";
import imag4 from "./4.jpeg";

export default function Informative({ navigation }) {
  const data = [
    {
      title: "Antibiotic-Free Meat",
      imageURL: imag1,
      description:
        "The article explores the question of how antibiotic-free meat can still contain antibiotics despite efforts to produce it. It explains that antibiotic-free meat refers to meat from animals that haven't received antibiotics during their lifetime or a specific withdrawal period before slaughter. However, several factors contribute to antibiotics being present in such meat, including the use of antibiotics in animal agriculture, cross-contamination during processing and transportation, and feed contamination. Regulatory agencies like the USDA and FDA have established guidelines to ensure the safety of antibiotic-free meat, but challenges remain in enforcement. Overall, the article highlights the importance of consumer awareness regarding the complexities of antibiotic use in meat production.",
      link: "https://www.farmforward.com/issues/antibiotics-public-health/how-can-antibiotic-free-meat-contain-antibiotics/?gad_source=1&gclid=CjwKCAjwuJ2xBhA3EiwAMVjkVAadJizhhblECTHswer3uRtQQ5b32ecefENAHeEQ37YH5TcAdAC6exoCNVEQAvD_BwE",
    },
    {
      title: "Antibiotic resistance transmission",
      imageURL: imag4,
      description:
        "The text delves into the transmission of antibiotic resistance from animals to humans through foodborne pathogens such as Salmonella, Campylobacter, and Yersinia enterocolitica. It emphasizes the critical role of understanding antibiotic use in animal agriculture in contributing to the dissemination of antibiotic-resistant bacteria. The publication explores the mechanisms involved in the transfer of resistance genes between bacteria in animal and human hosts. It underscores the importance of collaborative efforts among healthcare professionals, veterinarians, and policymakers to address the global challenge of antibiotic resistance.",
      link: "https://www.ncbi.nlm.nih.gov/books/NBK114485/#:~:text=Transmission%20of%20resistance%20from%20animals,and%20Yersinia%20enterocolitica%2C%20probably%20occur",
    },
    {
      title: "Antibiotic use in agriculture",
      imageURL: imag2,
      description:
        "The linked article explores the impact of antibiotic use in agriculture on the spread of antibiotic resistance. It discusses the transmission of antibiotic-resistant bacteria from animals to humans through foodborne pathways. The text highlights the importance of surveillance and monitoring efforts to track antibiotic resistance trends in both animal and human populations.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10311110/",
    },
  ];

  const handlePress = async (url) => {
    // Check if the link is supported
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link in the default browser
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  };
  return (
    <SafeAreaView>
      <Container>
        <ScrollView>
          <View style={{ height: "90%" }}>
            {data.map(({ title, description, imageURL, link }) => {
              return (
                <Row
                  style={{ borderRadius: 4 }}
                  onPress={() => handlePress(link)}
                >
                  <Image
                    source={imageURL}
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 10,
                    }}
                  />
                  <Text style={{ alignSelf: "flex-start", fontWeight: "bold" }}>
                    {title}
                  </Text>
                  <Text style={{ color: "gray" }}>{description}</Text>
                </Row>
              );
            })}
            {/* <FlatList
            data={[1, 1, 1]}
            renderItem={() => (
              <Row style={{ borderRadius: 4 }}>
                <Image
                  source={require("../farmer/market.jpg")}
                  style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 10,
                  }}
                />
                <Text style={{ alignSelf: "flex-start", fontWeight: "bold" }}>
                  A Very Big Title
                </Text>
                <Text style={{ color: "gray" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </Text>
              </Row>
            )}
          /> */}
          </View>
        </ScrollView>

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
            // onPress={() => navigation.navigate("Account")}
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
            // onPress={() => navigation.navigate("Account")}
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
