import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './ConstructorRow.styles';
import { TeamBadge } from '@components/TeamBadge/TeamBadge';
import { useTheme } from '../../context/ThemeContext';
import type { ConstructorStanding } from '@f1types/f1';

interface Props {
    item: ConstructorStanding;
    onPress: () => void;
}

export function ConstructorRow({ item, onPress }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const isTop3 = Number(item.position) <= 3;

    return (
        <TouchableOpacity onPress={onPress} style={styles.row}>
            <Text style={[styles.position, isTop3 && styles.positionTop]}>
                {item.position}
            </Text>
            <TeamBadge
                constructorId={item.Constructor.constructorId}
                name={item.Constructor.name}
            />
            <Text style={styles.name}>{item.Constructor.name}</Text>
            <View style={styles.pointsContainer}>
                <Text style={styles.points}>{item.points}</Text>
                <Text style={styles.pointsLabel}>pts</Text>
            </View>
        </TouchableOpacity>
    );
}