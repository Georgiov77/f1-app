import { format, parseISO } from 'date-fns';
import { el } from 'date-fns/locale';

export function formatRaceDate(dateStr: string): string {
    return format(parseISO(dateStr), 'd MMMM yyyy', { locale: el });
}