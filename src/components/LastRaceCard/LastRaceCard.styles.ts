import { StyleSheet } from 'react-native';
import { spacing, fontSize } from '@config/theme';
import type { Colors } from '@f1types/theme';

export const createStyles = (colors: Colors) => StyleSheet.create({
    card: {
        margin: spacing.lg,
        padding: spacing.lg,
        backgroundColor: colors.bgCard,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
    },
    label: {
        fontSize: fontSize.xs,
        color: colors.textMuted,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        marginBottom: spacing.sm,
    },
    raceName: {
        fontSize: fontSize.lg,
        color: colors.text,
        fontWeight: 'bold',
        marginBottom: spacing.md,
    },
    podium: {
        gap: spacing.sm,
    },
    podiumRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    position: {
        fontSize: fontSize.sm,
        fontWeight: 'bold',
        color: colors.textMuted,
        width: 28,
    },
    winner: {
        color: colors.primary,
    },
    driverName: {
        flex: 1,
        fontSize: fontSize.sm,
        color: colors.text,
    },
    points: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
    },
});