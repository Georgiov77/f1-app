import { StyleSheet } from 'react-native';
import { spacing, fontSize } from '@config/theme';
import type { Colors } from '@f1types/theme';

export const createStyles = (colors: Colors) => StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.xs,
    },
    label: {
        fontSize: fontSize.sm,
        color: colors.primary,
        fontWeight: '600',
        width: 80,
    },
    date: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        flex: 1,
    },
    time: {
        fontSize: fontSize.sm,
        color: colors.text,
        fontWeight: '600',
    },
});