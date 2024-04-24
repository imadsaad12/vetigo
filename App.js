import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";
import { registerRootComponent } from "expo";

function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
