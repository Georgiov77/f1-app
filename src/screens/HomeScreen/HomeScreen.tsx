import {View, Text, ScrollView, ActivityIndicator, RefreshControl} from 'react-native';
import { useNextRace } from '@hooks/useNextRace';
import { RaceCard } from '@components/RaceCard/RaceCard';
import { useTheme } from '../../context/ThemeContext';
import { createStyles } from './HomeScreen.styles';
import {useState} from "react";

export function HomeScreen() {
    const { colors, toggleTheme, mode } = useTheme();
    const styles = createStyles(colors);
    const { race, isLoading, error, refresh } = useNextRace();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refresh();
        setRefreshing(false);
    };

    return (
        <ScrollView style={styles.container}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor={colors.primary}
                        />
                    }
        >
            <View style={styles.header}>
                <Text style={styles.logo}>F1</Text>
                <Text style={styles.season}>{new Date().getFullYear()} Season</Text>
            </View>

            {isLoading && <ActivityIndicator color={colors.primary} />}
            {error && <Text style={styles.errorText}>Σφάλμα φόρτωσης</Text>}
            {race && <RaceCard race={race} />}
        </ScrollView>
    );
}