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
import { useState, useEffect, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GovAdministrator from "./pages/govListOfFarmers";

export default function Navigation() {
  const Stack = createStackNavigator();
  const screenoption = {
    headerShown: false,
  };

  const [data, setData] = useState({
    farmers: [
      {
        id: "f1",
        username: "MohammadYassine",
        password: "test123",
        location: "Bint Jbeil",
        approvedByVetId: null,
        pendingVetApproval: false,
        pendingGovApproval: false,
        date: "15/08/2005",
      },
      {
        id: "f2",
        username: "AliMokdad",
        password: "123",
        location: "Baalback",
        approvedByVetId: null,
        pendingVetApproval: false,
        pendingGovApproval: false,
        date: "01/03/2015",
      },
      {
        id: "f3",
        username: "HusseinManour",
        password: "123",
        location: "Nabatieh",
        approvedByVetId: null,
        pendingVetApproval: false,
        pendingGovApproval: false,
        date: "05/11/2008",
      },
      {
        id: "f4",
        username: "AhmadMawla",
        password: "123",
        location: "Baalback",
        approvedByVetId: null,
        pendingVetApproval: false,
        pendingGovApproval: false,
        date: "13/08/2022",
      },
      {
        id: "f5",
        username: "MortadaBaydoun",
        password: "123",
        location: "Bint Jbeil",
        approvedByVetId: null,
        pendingVetApproval: false,
        pendingGovApproval: false,
        date: "11/10/2007",
      },
    ],
    vets: [
      {
        id: "v1",
        username: "FoaudMelhem",
        password: "123",
        location: "Bint Jbeil",
        date: "11/10/2007",
      },
      {
        id: "v2",
        username: "HusseinBarbar",
        password: "123",
        location: "Nabatieh",
        date: "13/08/2022",
      },
      {
        id: "v3",
        username: "KassemHatoum",
        password: "123",
        location: "Baalback",
        date: "05/11/2008",
      },
      {
        id: "v4",
        username: "KhaledWehbi",
        password: "123",
        location: "Nabatieh",
        date: "15/08/2005",
      },
    ],
    govs: [
      {
        id: "g1",
        username: "government",
        password: "123",
        location: "A1",
        date: "11/10/2010",
        arrayOfFarmersId: [],
      },
    ],
  });

  useLayoutEffect(() => {
    AsyncStorage.setItem("data", JSON.stringify(data));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={screenoption}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Farmer" component={Farmer} />
        <Stack.Screen name="ChooseVet" component={ChooseVet} />
        <Stack.Screen name="VetAdministrator" component={VetAdministrator} />
        <Stack.Screen name="GovAdministrator" component={GovAdministrator} />
        <Stack.Screen name="ChooseMarket" component={ChooseMarket} />
        <Stack.Screen name="Informative" component={Informative} />
        <Stack.Screen name="AddVet" component={AddVet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
