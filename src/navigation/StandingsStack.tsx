import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StandingsScreen } from '@screens/StandingsScreen/StandingsScreen';
import type { StandingsStackParams } from '@f1types/navigation';
import {DriverDetailScreen} from "@screens/DriverDetailScreen/DriverDetailScreen";
import {ConstructorDetailScreen} from "@screens/ConstructorDetailScreen/ConstructorDetailScreen";

const Stack = createNativeStackNavigator<StandingsStackParams>();

export function StandingsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StandingsList" component={StandingsScreen} />
            <Stack.Screen name="DriverDetail" component={DriverDetailScreen} />
            <Stack.Screen name="ConstructorDetail" component={ConstructorDetailScreen} />
        </Stack.Navigator>
    );
}