import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity } from 'react-native';
import { HomeScreen } from '@screens/HomeScreen/HomeScreen';
import { LiveScreen } from '@screens/LiveScreen/LiveScreen';
import { ScheduleStack } from './ScheduleStack';
import { StandingsStack } from './StandingsStack';
import { useTheme } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    const { colors, toggleTheme, mode } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: colors.bg,
                    borderBottomColor: colors.border,
                },
                headerTintColor: colors.text,
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
                        <Text style={{ fontSize: 20 }}>{mode === 'dark' ? '☀️' : '🌙'}</Text>
                    </TouchableOpacity>
                ),
                tabBarStyle: {
                    backgroundColor: colors.bgCard,
                    borderTopColor: colors.border,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarIcon: ({ color }) => {
                    const icons: Record<string, string> = {
                        Home: '🏠',
                        Live: '🔴',
                        Schedule: '📅',
                        Standings: '🏆',
                    };
                    return <Text style={{ fontSize: 20 }}>{icons[route.name]}</Text>;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Live" component={LiveScreen} />
            <Tab.Screen name="Schedule" component={ScheduleStack} />
            <Tab.Screen name="Standings" component={StandingsStack} />
        </Tab.Navigator>
    );
}