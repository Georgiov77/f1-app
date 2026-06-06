import { useState, useEffect } from 'react';
import { getNextRace, getLastRace } from '@services/ergastApi';
import type { Race } from '@f1types/f1';

export function useNextRace() {
    const [race, setRace] = useState<Race | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchRace = async () => {
        try {
            const data = await getNextRace();
            if (data) {
                setRace(data);
            } else {
                const last = await getLastRace();
                setRace(last);
            }
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRace();
    }, []);

    return { race, isLoading, error, refresh: fetchRace };
}