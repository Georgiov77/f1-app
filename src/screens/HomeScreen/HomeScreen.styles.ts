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
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
        letterSpacing: 2,
    },
    season: {
        fontSize: fontSize.lg,
        color: colors.textMuted,
    },
    errorText: {
        fontSize: fontSize.base,
        color: colors.primary,
        paddingHorizontal: spacing.lg,
    },
});