import axios from 'axios';
import type { LivePosition, SessionDriver, Session } from '@f1types/f1';


const client = axios.create({
    baseURL: 'https://api.openf1.org/v1',
});

export async function getLivePositions(): Promise<LivePosition[]> {
    const res = await client.get('/position', {
        params: { session_key: 'latest' },
    });

    // Κρατάμε μόνο την τελευταία θέση ανά οδηγό
    const latest = new Map<number, any>();
    for (const entry of res.data) {
        latest.set(entry.driver_number, entry);
    }

    return Array.from(latest.values()).sort((a, b) => a.position - b.position);
}

export async function getSessionDrivers(): Promise<SessionDriver[]> {
    const res = await client.get('/drivers', {
        params: { session_key: 'latest' },
    });
    return res.data;
}

export async function getLatestSession(): Promise<Session> {
    const res = await client.get('/sessions', {
        params: { session_key: 'latest' },
    });
    return res.data[0];
}

export async function getLapTimes(driverNumber: number) {
    const res = await client.get('/laps', {
        params: {
            session_key: 'latest',
            driver_number: driverNumber,
        },
    });
    return res.data;
}