import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StandingsStackParams } from '@f1types/navigation';
import { useDriverDetail } from '@hooks/useDriverDetail';
import { useStandings } from '@hooks/useStandings';
import { TeamBadge } from '@components/TeamBadge/TeamBadge';
import { createStyles } from './DriverDetailScreen.styles';
import { useTheme } from '../../context/ThemeContext';

type Props = NativeStackScreenProps<StandingsStackParams, 'DriverDetail'>;

export function DriverDetailScreen({ route, navigation }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { driverId, driverName } = route.params;
    const { races, isLoading, error } = useDriverDetail(driverId);
    const { drivers } = useStandings();

    const standing = drivers.find((d) => d.Driver.driverId === driverId);
    const constructor = standing?.Constructors[0];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backText}>← Standings</Text>
                </TouchableOpacity>
                <Text style={styles.name}>{driverName}</Text>
                {constructor && (
                    <Text style={styles.team}>{constructor.name}</Text>
                )}
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
            {error && <Text>Σφάλμα φόρτωσης</Text>}

            {races.map((race) => {
                const result = race.Results[0];
                const isTop3 = Number(result?.position) <= 3;
                return (
                    <View key={race.round} style={styles.raceRow}>
                        <TeamBadge
                            constructorId={result?.Constructor.constructorId ?? ''}
                            name={result?.Constructor.name ?? ''}
                        />
                        <Text style={styles.raceName}> {race.raceName}</Text>
                        <Text style={[styles.racePosition, isTop3 && styles.racePositionTop]}>
                            P{result?.position ?? '-'}
                        </Text>
                        <Text style={styles.racePoints}>
                            {result?.points} pts
                        </Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}