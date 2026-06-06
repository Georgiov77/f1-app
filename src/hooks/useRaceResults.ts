import { useState, useEffect } from 'react';
import { getRaceResults } from '@services/ergastApi';
import type { RaceResult } from '@f1types/f1';

export function useRaceResults(round: string) {
    const [results, setResults] = useState<RaceResult[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getRaceResults(round)
            .then(setResults)
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [round]);

    return { results, isLoading, error };
}