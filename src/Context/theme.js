import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    darkmode: true,
    colorSet: {
        dark: {
            background: 'rgb(39, 39, 39)',
            lightBackground: '#2f2f2f',
            point: 'rgb(255, 200, 61)'
        },
        light: {
            background: 'rgb(255, 252, 245)',
            lightBackground: 'rgb(255, 245, 222)',
            point: 'rgb(255, 191, 31)'
        }
    }
});

export const useTheme = () => useContext(ThemeContext);
export const useThemeColor = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.darkmode;
    const themeColorSet = darkmode ? theme.colorSet.dark : theme.colorSet.light;

    return themeColorSet;
};
