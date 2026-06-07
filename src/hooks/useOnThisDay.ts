import { useState, useEffect } from 'react';
import { getOnThisDay } from '@services/ergastApi';
import type { Race } from '@f1types/f1';

export function useOnThisDay() {
    const [races, setRaces] = useState<Race[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getOnThisDay()
            .then(setRaces)
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, []);

    return { races, isLoading, error };
}