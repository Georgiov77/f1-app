import { useState, useEffect } from 'react';
import { getCurrentSchedule } from '@services/ergastApi';
import type { Race } from '@f1types/f1';

export function useSchedule() {
    const [races, setRaces] = useState<Race[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchSchedule = async () => {
        try {
            const data = await getCurrentSchedule();
            setRaces(data);
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSchedule();
    }, []);

    return { races, isLoading, error, refresh: fetchSchedule };
}