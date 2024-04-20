import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./pages/login";
import Signup from "./pages/signup";
import Farmer from "./pages/farmer";
import ChooseVet from "./pages/farmer/chooseVet";
import VetAdministrator from "./pages/vetAdministartor";
import ChooseMarket from "./pages/farmer/chooseMarket";
import Informative from "./pages/informative";
import AddVet from "./pages/addVet";
import { useState } from "react";

export default function Navigation() {
  const Stack = createStackNavigator();
  const screenoption = {
    headerShown: false,
  };

  const [data, setData] = useState({
    farmers: [
      {
        id: "f1",
        username: "farmer",
        password: "123",
        location: "A1",
        approvedByVetId: null,
        approvedByGov: false,
        date: "12/07/205",
      },
      {
        id: "f2",
        username: "farmer2",
        password: "123",
        location: "B1",
        approvedByVetId: null,
        approvedByGov: false,
        date: "11/10/2007",
      },
    ],
    vets: [
      {
        id: "v1",
        username: "vet",
        password: "123",
        location: "A1",
        arrayOfFarmersId: [],
        date: "11/10/2007",
      },
    ],
    govs: [
      {
        id: "g1",
        username: "gov",
        password: "123",
        location: "A1",
        date: "11/10/2010",
        arrayOfFarmersId: [],
      },
    ],
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={screenoption}>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          initialParams={{ setData, data: data }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          initialParams={{ setData, data }}
        />
        <Stack.Screen
          name="Farmer"
          component={Farmer}
          initialParams={{ setData, data }}
        />
        <Stack.Screen
          name="ChooseVet"
          component={ChooseVet}
          initialParams={{ setData, data }}
        />
        <Stack.Screen
          name="VetAdministrator"
          component={VetAdministrator}
          initialParams={{ setData, data }}
        />
        <Stack.Screen
          name="ChooseMarket"
          component={ChooseMarket}
          initialParams={{ setData, data }}
        />
        <Stack.Screen
          name="Informative"
          component={Informative}
          initialParams={{ setData, data }}
        />
        <Stack.Screen
          name="AddVet"
          component={AddVet}
          initialParams={{ setData, data }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
