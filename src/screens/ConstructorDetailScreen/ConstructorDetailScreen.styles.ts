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
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        marginBottom: spacing.xs,
    },
    name: {
        fontSize: fontSize['2xl'],
        fontWeight: 'bold',
        color: colors.text,
    },
    statsRow: {
        flexDirection: 'row',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.lg,
        gap: spacing.md,
    },
    statCard: {
        flex: 1,
        backgroundColor: colors.bgCard,
        borderRadius: 12,
        padding: spacing.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border,
    },
    statValue: {
        fontSize: fontSize['2xl'],
        fontWeight: 'bold',
        color: colors.text,
    },
    statLabel: {
        fontSize: fontSize.xs,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
    sectionTitle: {
        fontSize: fontSize.sm,
        fontWeight: 'bold',
        color: colors.textMuted,
        letterSpacing: 1.5,
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.md,
    },
    raceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    raceName: {
        flex: 1,
        fontSize: fontSize.sm,
        color: colors.text,
    },
    driverCode: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        width: 40,
    },
    racePosition: {
        fontSize: fontSize.base,
        fontWeight: 'bold',
        color: colors.textMuted,
        width: 28,
        textAlign: 'right',
    },
    racePositionTop: {
        color: colors.primary,
    },
    racePoints: {
        fontSize: fontSize.sm,
        color: colors.textMuted,
        width: 48,
        textAlign: 'right',
    },
});