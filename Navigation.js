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
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GovAdministrator from "./pages/govListOfFarmers";
import Upload from "./pages/upload";
import Guest from "./pages/guest";

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
        phoneNumber: "70699343",
        product: "Organic wine and grapes from our vineyard.",
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
        phoneNumber: "70699343",
        product:
          "some description about any product you can sell on this platform or call any vet that can hel you and any for buying",
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
        phoneNumber: "70699343",
        product: "Fresh cow's milk and tender veal cuts.",
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
        phoneNumber: "70699343",
        product: "Organic wine and grapes from our vineyard.",
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
        phoneNumber: "70699343",
        product: "Fresh cow's milk and tender veal cuts.",
      },
      {
        id: "f6",
        username: "Ali Khalil",
        password: "milk&meat",
        location: "Nabatieh",
        approvedByVetId: null,
        pendingVetApproval: false,
        pendingGovApproval: false,
        date: "03/11/2007",
        phoneNumber: "70987654",
        product: "Fresh cow's milk and tender veal cuts.",
      },
      {
        id: "f7",
        username: "Hassan Fadi",
        password: "farm135",
        location: "Zahle",
        approvedByVetId: null,
        pendingVetApproval: false,
        pendingGovApproval: false,
        date: "14/06/2016",
        phoneNumber: "70098765",
        product: "Organic wine and grapes from our vineyard.",
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
      {
        id: "v5",
        username: "Nabil Haddad",
        password: "456",
        location: "Tripoli",
        date: "05/09/2011",
      },
      {
        id: "v6",
        username: "Fadi Hassan",
        password: "abc",
        location: "Jounieh",
        date: "22/07/2018",
      },
      {
        id: "v7",
        username: "Tarek Farhat",
        password: "789",
        location: "Tyre",
        date: "03/08/2015",
      },
      {
        id: "v8",
        username: "Nabil Haddad",
        password: "456",
        location: "Tripoli",
        date: "05/09/2011",
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

  useEffect(() => {
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
        <Stack.Screen name="Guest" component={Guest} />
        <Stack.Screen name="ChooseMarket" component={ChooseMarket} />
        <Stack.Screen name="Informative" component={Informative} />
        <Stack.Screen name="AddVet" component={AddVet} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
