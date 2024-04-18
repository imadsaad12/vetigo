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

export default function Navigation() {
  const Stack = createStackNavigator();
  const screenoption = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={screenoption}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Farmer" component={Farmer} />
        <Stack.Screen name="ChooseVet" component={ChooseVet} />
        <Stack.Screen name="VetAdministrator" component={VetAdministrator} />
        <Stack.Screen name="ChooseMarket" component={ChooseMarket} />
        <Stack.Screen name="Informative" component={Informative} />
        <Stack.Screen name="AddVet" component={AddVet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
