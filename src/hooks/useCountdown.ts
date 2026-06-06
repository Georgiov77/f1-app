import { useState, useEffect } from 'react';
import { getCountdown } from '@utils/countdown';

export function useCountdown(date: string, time?: string): string {
    const [countdown, setCountdown] = useState(() => getCountdown(date, time));

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(getCountdown(date, time));
        }, 60_000); // ανανέωση κάθε λεπτό

        return () => clearInterval(interval);
    }, [date, time]);

    return countdown;
}