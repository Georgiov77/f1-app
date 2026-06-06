import { useState, useEffect } from 'react';
import { getDriverResults } from '@services/ergastApi';
import type { DriverRace } from '@f1types/f1';

export function useDriverDetail(driverId: string) {
    const [races, setRaces] = useState<DriverRace[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getDriverResults(driverId)
            .then(setRaces)
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [driverId]);

    return { races, isLoading, error };
}