import { useState, useEffect, useRef } from 'react';
import { getLivePositions, getSessionDrivers, getLatestSession } from '@services/openF1Api';
import type { LivePosition, SessionDriver, Session } from '@f1types/f1';

export function useLiveSession() {
    const [session, setSession] = useState<Session | null>(null);
    const [positions, setPositions] = useState<LivePosition[]>([]);
    const [drivers, setDrivers] = useState<SessionDriver[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const fetchData = async () => {
        try {
            const [sessionData, positionsData, driversData] = await Promise.all([
                getLatestSession(),
                getLivePositions(),
                getSessionDrivers(),
            ]);
            setSession(sessionData);
            // Κρατάμε παλιά δεδομένα αν τα νέα είναι κενά
            if (positionsData.length > 0) setPositions(positionsData);
            if (driversData.length > 0) setDrivers(driversData);
        } catch (err) {
            // Δεν αλλάζουμε το error state, απλά αγνοούμε το failure
            console.warn('Fetch failed, keeping previous data');
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();

        intervalRef.current = setInterval(() => {
            // Σταματάμε τα calls αν το session έχει τελειώσει
            if (session?.status !== 'Started') {
                if (intervalRef.current) clearInterval(intervalRef.current);
                return;
            }
            fetchData();
        }, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [session?.status]);

    // Helper: βρες τον οδηγό από το driver_number
    const getDriver = (driverNumber: number): SessionDriver | undefined => {
        return drivers.find((d) => d.driver_number === driverNumber);
    };

    return { session, positions, isLoading, error, getDriver };
}