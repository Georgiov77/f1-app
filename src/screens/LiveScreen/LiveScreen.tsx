import { View, Text, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { useState } from 'react';
import { useLiveSession } from '@hooks/useLiveSession';
import { useLapTimes } from '@hooks/useLapTimes';
import { LiveDriverRow } from '@components/LiveDriverRow/LiveDriverRow';
import { EmptyState } from '@components/EmptyState/EmptyState';
import { createStyles } from './LiveScreen.styles';
import { useTheme } from '../../context/ThemeContext';
import {formatLapTime} from "@utils/formatLapTime";

export function LiveScreen() {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { session, positions, isLoading, error, getDriver, refresh } = useLiveSession();
    const [selectedDriver, setSelectedDriver] = useState<number | null>(null);
    const { lastLap, bestLap } = useLapTimes(selectedDriver);
    const [refreshing, setRefreshing] = useState(false);

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
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Live</Text>
                    {session?.status === 'Started' && (
                        <View style={styles.liveBadge}>
                            <Text style={styles.liveBadgeText}>● LIVE</Text>
                        </View>
                    )}
                </View>
                {session && (
                    <Text style={styles.sessionInfo}>
                        {session.session_name} — {session.circuit_short_name}, {session.country_name}
                        {session.status !== 'Started' ? '  ✓ Finished' : ''}
                    </Text>
                )}
            </View>

            {isLoading && <ActivityIndicator color={colors.primary} />}
            {error && <EmptyState emoji="⚠️" title="Σφάλμα φόρτωσης" subtitle="Κάνε pull to refresh" />}

            {!isLoading && positions.length === 0 && (
                <EmptyState
                    emoji="🏁"
                    title="Δεν υπάρχει live session"
                    subtitle="Επέστρεψε κατά τη διάρκεια ενός race weekend!"
                />
            )}

            {selectedDriver && (lastLap || bestLap) && (
                <View style={styles.lapInfo}>
                    <Text style={styles.lapTitle}>
                        {getDriver(selectedDriver)?.name_acronym} — Lap Info
                    </Text>
                    {lastLap?.lap_duration && (
                        <Text style={styles.lapText}>
                            Last: {formatLapTime(lastLap.lap_duration)} — Lap {lastLap.lap_number}
                        </Text>
                    )}
                    {bestLap?.lap_duration && (
                        <Text style={styles.lapText}>
                            Best: {formatLapTime(bestLap.lap_duration)}
                        </Text>
                    )}
                </View>
            )}

            {positions.map((pos) => (
                <LiveDriverRow
                    key={pos.driver_number}
                    position={pos}
                    driver={getDriver(pos.driver_number)}
                    onPress={() => setSelectedDriver(
                        selectedDriver === pos.driver_number ? null : pos.driver_number
                    )}
                />
            ))}
        </ScrollView>
    );
}