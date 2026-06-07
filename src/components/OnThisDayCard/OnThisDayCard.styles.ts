import { StyleSheet } from 'react-native';
import { spacing, fontSize } from '@config/theme';
import type { Colors } from '@f1types/theme';

export const createStyles = (colors: Colors) => StyleSheet.create({
    card: {
        margin: spacing.lg,
        marginTop: 0,
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
    year: {
        fontSize: fontSize['3xl'],
        fontWeight: 'bold',
        color: colors.primary,
    },
    raceName: {
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    info: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
    date: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
});