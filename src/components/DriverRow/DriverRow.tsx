import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './DriverRow.styles';
import { TeamBadge } from '@components/TeamBadge/TeamBadge';
import { useTheme } from '../../context/ThemeContext';
import type { DriverStanding } from '@f1types/f1';

interface Props {
    item: DriverStanding;
    onPress: () => void;
}

export function DriverRow({ item, onPress }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const isTop3 = Number(item.position) <= 3;
    const constructor = item.Constructors[0];

    return (
        <TouchableOpacity onPress={onPress} style={styles.row}>
            <Text style={[styles.position, isTop3 && styles.positionTop]}>
                {item.position}
            </Text>
            <TeamBadge
                constructorId={constructor.constructorId}
                name={constructor.name}
            />
            <View style={styles.info}>
                <Text style={styles.name}>
                    {item.Driver.givenName} {item.Driver.familyName}
                </Text>
                <Text style={styles.team}>{constructor.name}</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Text style={styles.points}>{item.points}</Text>
                <Text style={styles.pointsLabel}>pts</Text>
            </View>
        </TouchableOpacity>
    );
}