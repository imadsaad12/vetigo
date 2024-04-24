import { Entypo } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Upload() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          height: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          Upload report
        </Text>
        <Entypo name="upload-to-cloud" size={60} color="black" />
      </View>
    </View>
  );
}
