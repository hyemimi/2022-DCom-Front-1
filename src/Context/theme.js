import { createContext, useContext } from 'react';

const themeState = {
    darkmode: true,
    colorSet: {
        dark: {
            background: 'rgb(39, 39, 39)',
            lightBackground: '#2f2f2f',
            point: 'rgb(255, 200, 61)',
            white: 'rgb(240,240,240)',
        },
        light: {
            background: 'rgb(255, 252, 245)',
            lightBackground: 'rgb(255, 245, 222)',
            point: 'rgb(255, 191, 31)'
        }
    }
}

// @ts-ignore
export const ThemeContext = createContext(themeState);

export const ThemeProvider = ({children}) => {
    return <ThemeContext.Provider value={themeState}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);
export const useThemeColor = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.darkmode;
    const themeColorSet = darkmode ? theme.colorSet.dark : theme.colorSet.light;

    return themeColorSet;
};
