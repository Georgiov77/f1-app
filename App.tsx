import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import { TabNavigator } from './src/navigation/TabNavigator';

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}