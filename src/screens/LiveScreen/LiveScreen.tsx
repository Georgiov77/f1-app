import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useLiveSession } from '@hooks/useLiveSession';
import { createStyles } from './LiveScreen.styles';
import { LiveDriverRow } from '@components/LiveDriverRow/LiveDriverRow';
import { EmptyState } from '@components/EmptyState/EmptyState';
import { useTheme } from '../../context/ThemeContext';

export function LiveScreen() {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { session, positions, isLoading, error, getDriver } = useLiveSession();

    return (
        <ScrollView style={styles.container}>
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
            {error && <Text style={styles.emptyText}>Σφάλμα φόρτωσης</Text>}

            {!isLoading && positions.length === 0 && (
                <EmptyState
                    emoji="🏁"
                    title="Δεν υπάρχει live session"
                    subtitle="Επέστρεψε κατά τη διάρκεια ενός race weekend!"
                />
            )}
            {positions.map((pos) => (
                <LiveDriverRow
                    key={pos.driver_number}
                    position={pos}
                    driver={getDriver(pos.driver_number)}
                />
            ))}
        </ScrollView>
    );
}