import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './H2HCard.styles';
import { TeamBadge } from '@components/TeamBadge/TeamBadge';
import { useTheme } from '../../context/ThemeContext';
import type { DriverStanding } from '@f1types/f1';

interface Props {
    driver1: DriverStanding | null;
    driver2: DriverStanding | null;
    onSelectDriver1: () => void;
    onSelectDriver2: () => void;
}

export function H2HCard({ driver1, driver2, onSelectDriver1, onSelectDriver2 }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    const renderDriver = (driver: DriverStanding | null, onPress: () => void) => (
        <TouchableOpacity style={styles.driverSlot} onPress={onPress}>
            {driver ? (
                <>
                    <TeamBadge
                        constructorId={driver.Constructors[0].constructorId}
                        name={driver.Constructors[0].name}
                    />
                    <Text style={styles.driverName}>
                        {driver.Driver.givenName}{'\n'}{driver.Driver.familyName}
                    </Text>
                </>
            ) : (
                <Text style={styles.placeholder}>Επίλεξε{'\n'}οδηγό</Text>
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.card}>
            <View style={styles.drivers}>
                {renderDriver(driver1, onSelectDriver1)}
                <Text style={styles.vs}>VS</Text>
                {renderDriver(driver2, onSelectDriver2)}
            </View>

            {driver1 && driver2 && (
                <View style={styles.stats}>
                    <View style={styles.statRow}>
                        <Text style={[styles.statValue, Number(driver1.points) > Number(driver2.points) && styles.winner]}>
                            {driver1.points}
                        </Text>
                        <Text style={styles.statLabel}>PTS</Text>
                        <Text style={[styles.statValue, Number(driver2.points) > Number(driver1.points) && styles.winner]}>
                            {driver2.points}
                        </Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={[styles.statValue, Number(driver1.wins) > Number(driver2.wins) && styles.winner]}>
                            {driver1.wins}
                        </Text>
                        <Text style={styles.statLabel}>ΝΙΚΕΣ</Text>
                        <Text style={[styles.statValue, Number(driver2.wins) > Number(driver1.wins) && styles.winner]}>
                            {driver2.wins}
                        </Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={[styles.statValue, Number(driver1.position) < Number(driver2.position) && styles.winner]}>
                            P{driver1.position}
                        </Text>
                        <Text style={styles.statLabel}>ΘΕΣΗ</Text>
                        <Text style={[styles.statValue, Number(driver2.position) < Number(driver1.position) && styles.winner]}>
                            P{driver2.position}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
}