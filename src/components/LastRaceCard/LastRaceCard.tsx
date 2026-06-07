import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './LastRaceCard.styles';
import { TeamBadge } from '@components/TeamBadge/TeamBadge';
import { useTheme } from '../../context/ThemeContext';
import type { Race, RaceResult } from '@f1types/f1';

interface Props {
    race: Race;
    results: RaceResult[];
}

export function LastRaceCard({ race, results }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const top3 = results.slice(0, 3);

    return (
        <View style={styles.card}>
            <Text style={styles.label}>LAST RACE</Text>
            <Text style={styles.raceName}>{race.raceName}</Text>

            <View style={styles.podium}>
                {top3.map((result) => (
                    <View key={result.Driver.driverId} style={styles.podiumRow}>
                        <Text style={[styles.position, Number(result.position) === 1 && styles.winner]}>
                            P{result.position}
                        </Text>
                        <TeamBadge
                            constructorId={result.Constructor.constructorId}
                            name={result.Constructor.name}
                        />
                        <Text style={styles.driverName}>
                            {result.Driver.givenName} {result.Driver.familyName}
                        </Text>
                        <Text style={styles.points}>{result.points}pts</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}