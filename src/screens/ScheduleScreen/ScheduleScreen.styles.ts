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
        paddingBottom: spacing.lg,
    },
    title: {
        fontSize: fontSize['2xl'],
        fontWeight: 'bold',
        color: colors.text,
    },
    raceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    round: {
        fontSize: fontSize.sm,
        color: colors.primary,
        fontWeight: 'bold',
        width: 32,
    },
    raceInfo: {
        flex: 1,
        marginLeft: spacing.md,
    },
    raceName: {
        fontSize: fontSize.base,
        color: colors.text,
        fontWeight: '600',
    },
    raceLocation: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        marginTop: 2,
    },
    raceDate: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
    },
    past: {
        opacity: 0.4,
    },
});