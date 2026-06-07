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
    drivers: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: spacing.lg,
    },
    driverSlot: {
        flex: 1,
        alignItems: 'center',
        gap: spacing.sm,
    },
    driverName: {
        fontSize: fontSize.sm,
        fontWeight: '600',
        color: colors.text,
        textAlign: 'center',
    },
    placeholder: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: colors.border,
        borderStyle: 'dashed',
        borderRadius: 8,
        padding: spacing.md,
        width: '100%',
    },
    vs: {
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: colors.textMuted,
        paddingHorizontal: spacing.md,
    },
    stats: {
        gap: spacing.md,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: spacing.md,
    },
    statRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statValue: {
        fontSize: fontSize.xl,
        fontWeight: 'bold',
        color: colors.textMuted,
        width: 80,
        textAlign: 'center',
    },
    winner: {
        color: colors.primary,
    },
    statLabel: {
        fontSize: fontSize.xs,
        color: colors.textMuted,
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
});