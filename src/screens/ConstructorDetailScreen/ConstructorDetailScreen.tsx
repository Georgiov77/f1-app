import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StandingsStackParams } from '@f1types/navigation';
import { useConstructorDetail } from '@hooks/useConstructorDetail';
import { useStandings } from '@hooks/useStandings';
import { TeamBadge } from '@components/TeamBadge/TeamBadge';
import {EmptyState} from "@components/EmptyState/EmptyState";
import { createStyles } from './ConstructorDetailScreen.styles';
import { useTheme } from '../../context/ThemeContext';

type Props = NativeStackScreenProps<StandingsStackParams, 'ConstructorDetail'>;

export function ConstructorDetailScreen({ route, navigation }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { constructorId, constructorName } = route.params;
    const { races, isLoading, error } = useConstructorDetail(constructorId);
    const { constructors } = useStandings();

    const standing = constructors.find(
        (c) => c.Constructor.constructorId === constructorId
    );

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 100 }}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backText}>← Standings</Text>
                </TouchableOpacity>
                <View style={styles.badgeRow}>
                    <TeamBadge constructorId={constructorId} name={constructorName} />
                    <Text style={styles.name}>{constructorName}</Text>
                </View>
            </View>

            {standing && (
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>{standing.position}</Text>
                        <Text style={styles.statLabel}>ΘΕΣΗ</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>{standing.points}</Text>
                        <Text style={styles.statLabel}>ΒΑΘΜΟΙ</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>{standing.wins}</Text>
                        <Text style={styles.statLabel}>ΝΙΚΕΣ</Text>
                    </View>
                </View>
            )}

            <Text style={styles.sectionTitle}>ΑΠΟΤΕΛΕΣΜΑΤΑ 2026</Text>

            {isLoading && <ActivityIndicator color={colors.primary} />}
            {error && (
                <EmptyState
                    emoji="⚠️"
                    title="Σφάλμα φόρτωσης"
                    subtitle="Κάνε pull to refresh για να δοκιμάσεις ξανά"
                />
            )}

            {races.map((race) =>
                race.Results.map((result) => {
                    const isTop3 = Number(result.position) <= 3;
                    return (
                        <View key={`${race.round}-${result.Driver.driverId}`} style={styles.raceRow}>
                            <Text style={styles.raceName}>{race.raceName}</Text>
                            <Text style={styles.driverCode}>{result.Driver.code}</Text>
                            <Text style={[styles.racePosition, isTop3 && styles.racePositionTop]}>
                                P{result.position}
                            </Text>
                            <Text style={styles.racePoints}>{result.points} pts</Text>
                        </View>
                    );
                })
            )}
        </ScrollView>
    );
}