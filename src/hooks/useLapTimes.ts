import { useState, useEffect } from 'react';
import { getLapTimes } from '@services/openF1Api';
import type { LapTime } from '@f1types/f1';

export function useLapTimes(driverNumber: number | null) {
    const [laps, setLaps] = useState<LapTime[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!driverNumber) return;

        setIsLoading(true);
        getLapTimes(driverNumber)
            .then(setLaps)
            .catch(() => setLaps([]))
            .finally(() => setIsLoading(false));
    }, [driverNumber]);

    const lastLap = laps[laps.length - 1];
    const bestLap = laps
        .filter((l) => l.lap_duration !== null)
        .sort((a, b) => (a.lap_duration ?? 0) - (b.lap_duration ?? 0))[0];

    return { laps, lastLap, bestLap, isLoading };
}