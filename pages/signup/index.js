import {
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Text as Title,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Text } from "./styles";
import { CustomizedButton, Input } from "../login/styles";
import RNPickerSelect from "react-native-picker-select";
import { ScrollView } from "react-native-gesture-handler";

export default function Signup({ navigation }) {
  const fields = [
    { name: "firstName", placeholder: "First name" },
    { name: "lastName", placeholder: "Last name" },
    { name: "phoneNumber", placeholder: "Phone number" },
    { name: "numberOfChicken", placeholder: "Number of chicken" },
  ];

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          marginTop: 50,
        }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <Container>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "flex-start",
              alignItems: "center",
              marginLeft: 50,
            }}
          >
            <Image
              source={require("../login/logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Title
              style={{
                fontSize: 20,
                marginLeft: 30,
              }}
            >
              Create your account
            </Title>
          </View>
          {fields.map(() => (
            <Input
              // onChangeText={(value) => setInput(value)}
              placeholder="Username"
            />
          ))}
          <RNPickerSelect
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
              },
              // placeholderColor: Constants.colour.grey_90,
            }}
          />
        </Container>
        <Pressable
          style={{
            backgroundColor: "green",
            width: "80%",
            border: "2px solid gray",
            borderRadius: "10px",
            color: "white",
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <CustomizedButton
            color="white"
            title={"Sign up"}
            onPress={() => setChangeText(!changeText)}
          />
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Text>already have account?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
