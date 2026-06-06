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
        color: colors.primary,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        marginBottom: spacing.sm,
    },
    raceName: {
        fontSize: fontSize.xl,
        color: colors.text,
        fontWeight: 'bold',
        marginBottom: spacing.xs,
    },
    info: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
    countdownContainer: {
        marginTop: spacing.md,
        paddingTop: spacing.md,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    countdown: {
        fontSize: fontSize.base,
        color: colors.primary,
        fontWeight: '600',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chevron: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
    },
    sessions: {
        marginTop: spacing.sm,
    },
    sessionsDivider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.sm,
    },
});