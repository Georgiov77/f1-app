import { View, Text } from 'react-native';
import { createStyles } from './SessionRow.styles';
import { formatRaceDate } from '@utils/formatDate';
import { formatLocalTime } from '@utils/formatTime';
import { useTheme } from '../../context/ThemeContext';

interface Props {
    label: string;
    date: string;
    time?: string;
}

export function SessionRow({ label, date, time }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const localTime = time ? formatLocalTime(date, time) : '';

    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.date}>{formatRaceDate(date)}</Text>
            <Text style={styles.time}>{localTime}</Text>
        </View>
    );
}