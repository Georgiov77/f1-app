export function formatLocalTime(date: string, time: string): string {
    return new Date(`${date}T${time}`).toLocaleTimeString('el-GR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
}