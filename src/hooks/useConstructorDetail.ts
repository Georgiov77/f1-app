import { useState, useEffect } from 'react';
import { getConstructorResults } from '@services/ergastApi';
import type { DriverRace } from '@f1types/f1';

export function useConstructorDetail(constructorId: string) {
    const [races, setRaces] = useState<DriverRace[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getConstructorResults(constructorId)
            .then(setRaces)
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [constructorId]);

    return {races, isLoading, error};
}
