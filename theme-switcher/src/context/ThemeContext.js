// production code style

import React, { useContext, createContext } from "react";

// we can pass variable on this step also
// export const ThemeContext = createContext({
//   themeMode: "light",
//   lightTheme: () => {},
//   darkTheme: () => {},
// });

export const ThemeContext = createContext();

export const ThemeProvider = ThemeContext.Provider;

// not easy to understand but usefull
// previously hum log useContext, UserContext dono import kar rhe the to use the Context but hum log ek custom hook bana sakte hain jo return karega ThemeContext
// fayeda ye hai ki ab hame do imports statements nahi likhni padegi
// sirf ye hook import krna padega

export default function useTheme() {
  return useContext(ThemeContext);
}
