export function getCountdown(dateStr: string, timeStr?: string): string {
    const dateTime = timeStr
        ? new Date(`${dateStr}T${timeStr}`)
        : new Date(dateStr);

    const now = new Date();
    const diff = dateTime.getTime() - now.getTime();

    if (diff <= 0) return 'Ολοκληρώθηκε';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
        const dayStr = days === 1 ? 'μέρα' : 'μέρες';
        if (hours === 0) return `σε ${days} ${dayStr}`;
        const hourStr = hours === 1 ? 'ώρα' : 'ώρες';
        return `σε ${days} ${dayStr}, ${hours} ${hourStr}`;
    }
    if (hours > 0) {
        const hourStr = hours === 1 ? 'ώρα' : 'ώρες';
        const minStr = minutes === 1 ? 'λεπτό' : 'λεπτά';
        return `σε ${hours} ${hourStr}, ${minutes} ${minStr}`;
    }
    const minStr = minutes === 1 ? 'λεπτό' : 'λεπτά';
    return `σε ${minutes} ${minStr}`;
}