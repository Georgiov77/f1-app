import { StyleSheet } from 'react-native';
import { colors as defaultColors, spacing, fontSize } from '@config/theme';
import type { Colors } from '@f1types/theme';

export const createStyles = (colors: Colors) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing['2xl'],
    },
    emoji: {
        fontSize: 48,
        marginBottom: spacing.lg,
    },
    title: {
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        textAlign: 'center',
    },
});