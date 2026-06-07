import { useState, useEffect } from 'react';
import { getLastRaceResults } from '@services/ergastApi';
import type { Race, RaceResult } from '@f1types/f1';

export function useLastRace() {
    const [race, setRace] = useState<Race | null>(null);
    const [results, setResults] = useState<RaceResult[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getLastRaceResults()
            .then((data) => {
                setRace(data);
                setResults(data?.Results ?? []);
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, []);

    return { race, results, isLoading, error };
}