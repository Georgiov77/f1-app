import { View, Text } from 'react-native';
import { styles } from './TeamBadge.styles';
import { teamColors } from '@config/theme';

interface Props {
    constructorId: string;
    name: string;
}

export function TeamBadge({ constructorId, name }: Props) {
    const color = teamColors[constructorId] ?? '#555555';
    const initials = name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <View style={[styles.badge, { backgroundColor: color }]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    );
}