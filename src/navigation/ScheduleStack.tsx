import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScheduleScreen } from '@screens/ScheduleScreen/ScheduleScreen';
import type { ScheduleStackParams } from '@f1types/navigation';
import {RaceDetailScreen} from "@screens/RaceDetailScreen/RaceDetailScreen";

const Stack = createNativeStackNavigator<ScheduleStackParams>();

export function ScheduleStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ScheduleList" component={ScheduleScreen} />
            <Stack.Screen name="RaceDetail" component={RaceDetailScreen} />
        </Stack.Navigator>
    );
}