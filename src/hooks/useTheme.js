import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark'; // Keep dark mode as default
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme, setTheme, isDark: theme === 'dark' };
}
