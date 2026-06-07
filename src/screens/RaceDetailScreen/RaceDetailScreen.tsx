import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ScheduleStackParams } from '@f1types/navigation';
import { useRaceResults } from '@hooks/useRaceResults';
import { TeamBadge } from '@components/TeamBadge/TeamBadge';
import {EmptyState} from "@components/EmptyState/EmptyState";
import { createStyles } from './RaceDetailScreen.styles';
import { useTheme } from '../../context/ThemeContext';

type Props = NativeStackScreenProps<ScheduleStackParams, 'RaceDetail'>;

export function RaceDetailScreen({ route, navigation }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { round, raceName } = route.params;
    const { results, isLoading, error } = useRaceResults(round);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backText}>← Schedule</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{raceName}</Text>
            </View>

            <Text style={styles.sectionTitle}>ΑΠΟΤΕΛΕΣΜΑΤΑ</Text>

            {isLoading && <ActivityIndicator color={colors.primary} />}
            {error && (
                <EmptyState
                    emoji="⚠️"
                    title="Σφάλμα φόρτωσης"
                    subtitle="Κάνε pull to refresh για να δοκιμάσεις ξανά"
                />
            )}

            {results.map((result) => {
                const isTop3 = Number(result.position) <= 3;
                return (
                    <View key={result.Driver.driverId} style={styles.row}>
                        <Text style={[styles.position, isTop3 && styles.positionTop]}>
                            {result.position}
                        </Text>
                        <TeamBadge
                            constructorId={result.Constructor.constructorId}
                            name={result.Constructor.name}
                        />
                        <View style={styles.driverInfo}>
                            <Text style={styles.driverName}>
                                {result.Driver.givenName} {result.Driver.familyName}
                            </Text>
                            <Text style={styles.constructorName}>
                                {result.Constructor.name}
                            </Text>
                        </View>
                        <Text style={styles.time}>
                            {result.Time?.time ?? result.status}
                        </Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}