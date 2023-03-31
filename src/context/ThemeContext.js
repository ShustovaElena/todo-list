import { createContext } from "react";

export const themes = {
  light: {
    color: '#ffffff',
    backgroundHeader: '#3472e7',
    background: '#ffffff',
    backgroundTask: '#ffffff',
    colorTask: '#3472e7'
  },
  dark: {
    color: '#ffffff',
    backgroundHeader: '#474a51',
    background: '#b4b6c2',
    backgroundTask: '#474a51',
    colorTask: '#ffffff'
  },
};

export const ThemeContext = createContext(themes.light);