import { createContext, useContext, useState, useEffect } from "react";

//  Theme tokens

export const DARK = {
  "--bg": "#07070e",
  "--bg2": "#0d0d1a",
  "--bg3s": "#131322",
  "--bg3": "rgba(19,19,34,0.6)",
  "--text": "#edeaf9",
  "--muted": "#6e6c8e",
  "--border": "rgba(110,84,247,0.18)",
  "--border2": "rgba(110,84,247,0.38)",
  "--accent": "#6e54f7",
  "--accent-h": "#5a42e0",
  "--cyan": "#00d9f5",
  "--pink": "#f05fa8",
  "--chip-bg": "rgba(255,255,255,0.04)",
  "--chip-br": "rgba(255,255,255,0.08)",
  "--hot-bg": "rgba(110,84,247,0.12)",
  "--hot-br": "rgba(110,84,247,0.35)",
  "--hot-cl": "#a594ff",
  "--inp-bg": "rgba(7,7,14,0.6)",
  "--form-bg": "rgba(13,13,26,0.75)",
  "--card-bg": "rgba(13,13,26,0.85)",
  "--more-bg": "rgba(19,19,34,0.5)",
  "--grid-ln": "rgba(110,84,247,0.04)",
  "--orb1": "rgba(110,84,247,0.12)",
  "--orb2": "rgba(0,217,245,0.07)",
  "--nav-bg": "rgba(7,7,14,0.92)",
  "--mob-bg": "rgba(7,7,14,0.98)",
};

export const LIGHT = {
  "--bg": "#f7f6ff",
  "--bg2": "#ede9ff",
  "--bg3s": "#ddd8ff",
  "--bg3": "rgba(221,216,255,0.7)",
  "--text": "#18152e",
  "--muted": "#7068a0",
  "--border": "rgba(110,84,247,0.14)",
  "--border2": "rgba(110,84,247,0.36)",
  "--accent": "#6e54f7",
  "--accent-h": "#5a42e0",
  "--cyan": "#0088aa",
  "--pink": "#c83070",
  "--chip-bg": "rgba(110,84,247,0.05)",
  "--chip-br": "rgba(110,84,247,0.13)",
  "--hot-bg": "rgba(110,84,247,0.09)",
  "--hot-br": "rgba(110,84,247,0.28)",
  "--hot-cl": "#4e34d7",
  "--inp-bg": "rgba(255,255,255,0.9)",
  "--form-bg": "rgba(255,255,255,0.88)",
  "--card-bg": "rgba(255,255,255,0.92)",
  "--more-bg": "rgba(237,233,255,0.7)",
  "--grid-ln": "rgba(110,84,247,0.06)",
  "--orb1": "rgba(110,84,247,0.07)",
  "--orb2": "rgba(0,136,170,0.06)",
  "--nav-bg": "rgba(247,246,255,0.93)",
  "--mob-bg": "rgba(247,246,255,0.98)",
};

//  Context

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  // Apply CSS variables
  useEffect(() => {
    const tokens = dark ? DARK : LIGHT;
    Object.entries(tokens).forEach(([k, v]) =>
      document.documentElement.style.setProperty(k, v),
    );
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark((p) => !p) }}>
      {children}
    </ThemeContext.Provider>
  );
}

//  Hook
export const useTheme = () => useContext(ThemeContext);
