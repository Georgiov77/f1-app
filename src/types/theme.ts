import { darkColors } from '@config/theme';
export type Colors = typeof darkColors;
export type ThemeMode = 'dark' | 'light';

export interface ThemeContextType {
    mode: ThemeMode;
    colors: Colors;
    toggleTheme: () => void;
}