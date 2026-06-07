import {View, Text, ScrollView, RefreshControl} from 'react-native';
import { useNextRace } from '@hooks/useNextRace';
import {useLastRace} from "@hooks/useLastRace";
import {useOnThisDay} from "@hooks/useOnThisDay";
import { RaceCard } from '@components/RaceCard/RaceCard';
import { RaceCardSkeleton } from '@components/Skeleton/RaceCardSkeleton';
import {LastRaceCard} from "@components/LastRaceCard/LastRaceCard";
import { useTheme } from '../../context/ThemeContext';
import { createStyles } from './HomeScreen.styles';
import {useState} from "react";
import {hapticSuccess} from "@utils/haptics";
import {OnThisDayCard} from "@components/OnThisDayCard/OnThisDayCard";

export function HomeScreen() {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { race, isLoading, error, refresh } = useNextRace();
    const { race: lastRace, results } = useLastRace();
    const [refreshing, setRefreshing] = useState(false);
    const { races: onThisDayRaces } = useOnThisDay();

    const onRefresh = async () => {
        setRefreshing(true);
        await refresh();
        hapticSuccess();
        setRefreshing(false);
    };

    return (
        <ScrollView style={styles.container}
                    contentContainerStyle={{ paddingBottom: 100}}
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

            {isLoading && <RaceCardSkeleton />}
            {error && <Text style={styles.errorText}>Σφάλμα φόρτωσης</Text>}
            {race && <RaceCard race={race} />}
            {lastRace && results.length > 0 && (
                <LastRaceCard race={lastRace} results={results} />
            )}
            {onThisDayRaces.length > 0 && (
                <OnThisDayCard races={onThisDayRaces} />
            )}
        </ScrollView>
    );
}