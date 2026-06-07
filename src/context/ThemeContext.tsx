import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkColors, lightColors } from '@config/theme';
import type { ThemeMode, ThemeContextType } from '@f1types/theme';

const ThemeContext = createContext<ThemeContextType>({
    mode: 'dark',
    colors: darkColors,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>('dark');

    // Φόρτωσε το αποθηκευμένο theme
    useEffect(() => {
        AsyncStorage.getItem('theme').then((saved) => {
            if (saved === 'light' || saved === 'dark') {
                setMode(saved);
            }
        });
    }, []);

    const toggleTheme = async () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        await AsyncStorage.setItem('theme', newMode);
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