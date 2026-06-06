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
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: colors.textMuted,
        width: 32,
    },
    positionTop: {
        color: colors.primary,
    },
    teamBar: {
        width: 4,
        height: 36,
        borderRadius: 2,
        marginRight: spacing.md,
    },
    driverInfo: {
        flex: 1,
    },
    acronym: {
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: colors.text,
    },
    teamName: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        marginTop: 2,
    },
});