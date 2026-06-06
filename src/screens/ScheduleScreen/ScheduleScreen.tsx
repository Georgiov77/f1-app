import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ScheduleStackParams } from '@f1types/navigation';
import { useSchedule } from '@hooks/useSchedule';
import { formatRaceDate } from '@utils/formatDate';
import { createStyles } from './ScheduleScreen.styles';
import { useTheme } from '../../context/ThemeContext';

type Props = NativeStackScreenProps<ScheduleStackParams, 'ScheduleList'>;

export function ScheduleScreen({ navigation }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { races, isLoading, error, refresh } = useSchedule();
    const [refreshing, setRefreshing] = useState(false);
    const today = new Date();

    const onRefresh = async () => {
        setRefreshing(true);
        await refresh();
        setRefreshing(false);
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={colors.primary}
                />
            }
        >
            <View style={styles.header}>
                <Text style={styles.title}>2026 Schedule</Text>
            </View>

            {isLoading && <ActivityIndicator color={colors.primary} />}
            {error && <Text>Σφάλμα φόρτωσης</Text>}

            {races.map((race) => {
                const isPast = new Date(race.date) < today;
                return (
                    <TouchableOpacity
                        key={race.round}
                        style={[styles.raceItem, isPast && styles.past]}
                        onPress={() => navigation.navigate('RaceDetail', {
                            round: race.round,
                            raceName: race.raceName,
                        })}
                    >
                        <Text style={styles.round}>R{race.round}</Text>
                        <View style={styles.raceInfo}>
                            <Text style={styles.raceName}>{race.raceName}</Text>
                            <Text style={styles.raceLocation}>
                                📍 {race.Circuit.Location.locality}, {race.Circuit.Location.country}
                            </Text>
                        </View>
                        <Text style={styles.raceDate}>{formatRaceDate(race.date)}</Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}