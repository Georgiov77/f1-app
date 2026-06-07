import { View, StyleSheet } from 'react-native';
import { Skeleton } from './Skeleton';
import { useTheme } from '../../context/ThemeContext';
import { spacing } from '@config/theme';

export function RaceCardSkeleton() {
    const { colors } = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: colors.bgCard, borderColor: colors.border }]}>
            <Skeleton width="90%" height={24} borderRadius={4} />
            <View style={{ marginTop: spacing.sm }} />
            <Skeleton width="80%" height={24} borderRadius={4} />
            <View style={{ marginTop: spacing.sm }} />
            <Skeleton width="60%" height={14} borderRadius={4} />
            <View style={{ marginTop: spacing.xs }} />
            <Skeleton width="40%" height={14} borderRadius={4} />
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <Skeleton width="50%" height={16} borderRadius={4} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: spacing.lg,
        padding: spacing.lg,
        borderRadius: 12,
        borderWidth: 1,
    },
    divider: {
        height: 1,
        marginVertical: spacing.md,
    },
});