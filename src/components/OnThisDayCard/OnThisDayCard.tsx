import { View, Text, ScrollView } from 'react-native';
import { createStyles } from './OnThisDayCard.styles';
import { useTheme } from '../../context/ThemeContext';
import { formatRaceDate } from '@utils/formatDate';
import type { Race } from '@f1types/f1';

interface Props {
    races: Race[];
}

export function OnThisDayCard({ races }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    if (races.length === 0) return null;

    const race = races[0];

    return (
        <View style={styles.card}>
            <Text style={styles.label}>🏁 ΣΑΝ ΣΗΜΕΡΑ ΣΤΗΝ F1</Text>
            <Text style={styles.year}>{race.season}</Text>
            <Text style={styles.raceName}>{race.raceName}</Text>
            <Text style={styles.info}>
                📍 {race.Circuit.Location.locality}, {race.Circuit.Location.country}
            </Text>
            <Text style={styles.date}>{formatRaceDate(race.date)}</Text>
        </View>
    );
}