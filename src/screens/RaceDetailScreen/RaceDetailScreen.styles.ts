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
    backButton: {
        marginBottom: spacing.md,
    },
    backText: {
        fontSize: fontSize.base,
        color: colors.primary,
    },
    title: {
        fontSize: fontSize['2xl'],
        fontWeight: 'bold',
        color: colors.text,
    },
    sectionTitle: {
        fontSize: fontSize.sm,
        fontWeight: 'bold',
        color: colors.textMuted,
        letterSpacing: 1.5,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },
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
    driverInfo: {
        flex: 1,
        marginLeft: spacing.md,
    },
    driverName: {
        fontSize: fontSize.base,
        fontWeight: '600',
        color: colors.text,
    },
    constructorName: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        marginTop: 2,
    },
    time: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
    },
});