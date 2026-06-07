import { View, Text } from 'react-native';
import { createStyles } from './EmptyState.styles';
import { useTheme } from '../../context/ThemeContext';

interface Props {
    emoji: string;
    title: string;
    subtitle?: string;
}

export function EmptyState({ emoji, title, subtitle }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
    );
}