import {View, Text, TouchableOpacity} from 'react-native';
import { createStyles } from './LiveDriverRow.styles';
import { useTheme } from '../../context/ThemeContext';
import type { LivePosition, SessionDriver } from '@f1types/f1';

interface Props {
    position: LivePosition;
    driver?: SessionDriver;
    onPress?: () => void;
}

export function LiveDriverRow({ position, driver, onPress }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const teamColor = driver?.team_colour
        ? `#${driver.team_colour}`
        : colors.textMuted;
    const isTop3 = position.position <= 3;

    return (
        <TouchableOpacity onPress={onPress} style={styles.row}>
            <Text style={[styles.position, isTop3 && styles.positionTop]}>
                {position.position}
            </Text>
            <View style={[styles.teamBar, { backgroundColor: teamColor }]} />
            <View style={styles.driverInfo}>
                <Text style={styles.acronym}>
                    {driver?.name_acronym ?? `#${position.driver_number}`}
                </Text>
                <Text style={styles.teamName}>
                    {driver?.team_name ?? '—'}
                </Text>
            </View>
        </TouchableOpacity>
    );
}