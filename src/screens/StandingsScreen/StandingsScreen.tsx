import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StandingsStackParams } from '@f1types/navigation';
import { useStandings } from '@hooks/useStandings';
import { DriverRow } from '@components/DriverRow/DriverRow';
import { ConstructorRow } from '@components/ConstructorRow/ConstructorRow';
import { createStyles } from './StandingsScreen.styles';
import { useTheme } from '../../context/ThemeContext';

type Props = NativeStackScreenProps<StandingsStackParams, 'StandingsList'>;

export function StandingsScreen({ navigation }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { drivers, constructors, isLoading, error, refresh } = useStandings();
    const [activeTab, setActiveTab] = useState<'drivers' | 'constructors'>('drivers');
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refresh();
        setRefreshing(false);
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={colors.primary}
                />
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
            </View>

            {isLoading && <ActivityIndicator color={colors.primary} />}
            {error && <Text>Σφάλμα φόρτωσης</Text>}

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