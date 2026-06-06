import { StyleSheet } from 'react-native';
import { spacing, fontSize } from '@config/theme';
import type { Colors } from '@f1types/theme';

export const createStyles = (colors: Colors) => StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    position: {
        fontSize: fontSize.base,
        fontWeight: 'bold',
        color: colors.textMuted,
        width: 28,
    },
    positionTop: {
        color: colors.primary,
    },
    name: {
        flex: 1,
        fontSize: fontSize.base,
        color: colors.text,
        fontWeight: '600',
        marginLeft: spacing.md,
    },
    pointsContainer: {
        alignItems: 'flex-end',
    },
    points: {
        fontSize: fontSize.base,
        color: colors.text,
        fontWeight: 'bold',
    },
    pointsLabel: {
        fontSize: fontSize.xs,
        color: colors.textMuted,
    },
});