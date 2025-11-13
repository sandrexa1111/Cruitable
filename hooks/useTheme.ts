import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const root = window.document.documentElement;
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        
        if (storedTheme) {
            setTheme(storedTheme);
            root.classList.add(storedTheme);
        } else {
            root.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        root.classList.remove(theme);
        root.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    // FIX: Replaced JSX with React.createElement as this file has a .ts extension and does not support JSX syntax.
    return React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
