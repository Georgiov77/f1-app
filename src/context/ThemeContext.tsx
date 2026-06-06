import { createContext, useContext, useState } from 'react';
import { darkColors, lightColors } from '@config/theme';
import type { ThemeMode, ThemeContextType } from '@f1types/theme';

const ThemeContext = createContext<ThemeContextType>({
    mode: 'dark',
    colors: darkColors,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>('dark');

    const toggleTheme = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const colors = mode === 'dark' ? darkColors : lightColors;

    return (
        <ThemeContext.Provider value={{ mode, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}