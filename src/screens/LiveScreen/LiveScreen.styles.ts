import { StyleSheet } from 'react-native';
import { spacing, fontSize } from '@config/theme';
import type { Colors } from '@f1types/theme';

export const createStyles = (colors: Colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
    header: {
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.md,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    title: {
        fontSize: fontSize['2xl'],
        fontWeight: 'bold',
        color: colors.text,
    },
    liveBadge: {
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.sm,
        paddingVertical: 2,
        borderRadius: 4,
    },
    liveBadgeText: {
        fontSize: fontSize.xs,
        color: colors.text,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    sessionInfo: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
    emptyText: {
        color: colors.textMuted,
        fontSize: fontSize.base,
        textAlign: 'center',
        marginTop: spacing.xl,
        paddingHorizontal: spacing.lg,
    },
});