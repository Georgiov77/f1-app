import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StandingsStackParams } from '@f1types/navigation';
import { useStandings } from '@hooks/useStandings';
import { DriverRow } from '@components/DriverRow/DriverRow';
import { ConstructorRow } from '@components/ConstructorRow/ConstructorRow';
import {EmptyState} from "@components/EmptyState/EmptyState";
import { createStyles } from './StandingsScreen.styles';
import { useTheme } from '../../context/ThemeContext';
import { H2HCard } from '@components/H2HCard/H2HCard';
import type { DriverStanding } from '@f1types/f1';

type Props = NativeStackScreenProps<StandingsStackParams, 'StandingsList'>;

export function StandingsScreen({ navigation }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { drivers, constructors, isLoading, error, refresh } = useStandings();
    const [activeTab, setActiveTab] = useState<'drivers' | 'constructors' | 'h2h'>('drivers');
    const [driver1, setDriver1] = useState<DriverStanding | null>(null);
    const [driver2, setDriver2] = useState<DriverStanding | null>(null);
    const [selectingSlot, setSelectingSlot] = useState<1 | 2 | null>(null);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refresh();
        setRefreshing(false);
    };

    const handleDriverSelect = (driver: DriverStanding) => {
        if (selectingSlot === 1) setDriver1(driver);
        if (selectingSlot === 2) setDriver2(driver);
        setSelectingSlot(null);
        setActiveTab('h2h');
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
            }
        >
            <View style={styles.header}>
                <Text style={styles.title}>Standings</Text>
            </View>

            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'drivers' && styles.tabActive]}
                    onPress={() => setActiveTab('drivers')}
                >
                    <Text style={[styles.tabText, activeTab === 'drivers' && styles.tabTextActive]}>
                        Drivers
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'constructors' && styles.tabActive]}
                    onPress={() => setActiveTab('constructors')}
                >
                    <Text style={[styles.tabText, activeTab === 'constructors' && styles.tabTextActive]}>
                        Constructors
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'h2h' && styles.tabActive]}
                    onPress={() => setActiveTab('h2h')}
                >
                    <Text style={[styles.tabText, activeTab === 'h2h' && styles.tabTextActive]}>
                        H2H
                    </Text>
                </TouchableOpacity>
            </View>

            {isLoading && <ActivityIndicator color={colors.primary} />}
            {error && <EmptyState emoji="⚠️" title="Σφάλμα φόρτωσης" subtitle="Κάνε pull to refresh" />}

            {activeTab === 'h2h' && (
                <>
                    <H2HCard
                        driver1={driver1}
                        driver2={driver2}
                        onSelectDriver1={() => setSelectingSlot(1)}
                        onSelectDriver2={() => setSelectingSlot(2)}
                    />
                    {selectingSlot && (
                        <Text style={styles.selectHint}>
                            Επίλεξε οδηγό για τη θέση {selectingSlot}
                        </Text>
                    )}
                    {selectingSlot && drivers.map((item) => (
                        <DriverRow
                            key={item.Driver.driverId}
                            item={item}
                            onPress={() => handleDriverSelect(item)}
                        />
                    ))}
                </>
            )}

            {activeTab === 'drivers' && drivers.map((item) => (
                <DriverRow
                    key={item.Driver.driverId}
                    item={item}
                    onPress={() => navigation.navigate('DriverDetail', {
                        driverId: item.Driver.driverId,
                        driverName: `${item.Driver.givenName} ${item.Driver.familyName}`,
                    })}
                />
            ))}

            {activeTab === 'constructors' && constructors.map((item) => (
                <ConstructorRow
                    key={item.Constructor.constructorId}
                    item={item}
                    onPress={() => navigation.navigate('ConstructorDetail', {
                        constructorId: item.Constructor.constructorId,
                        constructorName: item.Constructor.name,
                    })}
                />
            ))}
        </ScrollView>
    );

}