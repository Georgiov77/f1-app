import { useState, useEffect } from 'react';
import { getDriverStandings, getConstructorStandings } from '@services/ergastApi';
import type { DriverStanding, ConstructorStanding } from '@f1types/f1';

export function useStandings() {
    const [drivers, setDrivers] = useState<DriverStanding[]>([]);
    const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchStandings = async () => {
        try {
            const [driversData, constructorsData] = await Promise.all([
                getDriverStandings(),
                getConstructorStandings(),
            ]);
            setDrivers(driversData);
            setConstructors(constructorsData);
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStandings();
    }, []);

    return { drivers, constructors, isLoading, error, refresh: fetchStandings };
}