const baseColors = {
    // Brand — ίδιο και στα δύο themes
    primary: '#E10600',
    primaryDark: '#A30000',

    // Status — ίδιο και στα δύο themes
    success: '#00D358',
    warning: '#FFD700',
    safetycar: '#FF8700',
};

export const darkColors = {
    ...baseColors,
    bg: '#0F0F0F',
    bgCard: '#1A1A1A',
    bgSubtle: '#242424',
    text: '#FFFFFF',
    textMuted: '#8A8A8A',
    border: '#2E2E2E',
};

export const lightColors = {
    ...baseColors,
    bg: '#F5F5F5',
    bgCard: '#FFFFFF',
    bgSubtle: '#EBEBEB',
    text: '#0F0F0F',
    textMuted: '#6B6B6B',
    border: '#E0E0E0',
};

// Default
export const colors = darkColors;

export const teamColors: Record<string, string> = {
    mercedes: '#27F4D2',
    ferrari: '#E8002D',
    red_bull: '#3671C6',
    mclaren: '#FF8000',
    alpine: '#FF87BC',
    aston_martin: '#229971',
    williams: '#64C4FF',
    haas: '#B6BABD',
    rb: '#6692FF',
    kick_sauber: '#52E252',
    cadillac: '#C8A84B',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

export const radius = {
    sm: 4,
    md: 8,
    lg: 12,
};

export const fontSize = {
    xs: 11,
    sm: 13,
    base: 15,
    lg: 17,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
};