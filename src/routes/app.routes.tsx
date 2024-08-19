import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Teams } from '@screens/Teams';
import { Players } from '@screens/Players';
import { NewTeam } from '@screens/NewTeam';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="teams" component={Teams} />
      <Screen name="players" component={Players} />
      <Screen name="newTeam" component={NewTeam} />
    </Navigator>
  );
}
