const THEME_GRID_STEP = 16;

export const theme = {
  name: "theme",
  palette: {
    background: {
      primary: "#f5f5f5",
      secondary: "#fefefe",
      tertiary: "#ff6b6b",
    },
    text: {
      primary: "#878787",
      secondary: "#e9d9d8",
      tertiary: "#FFFFFF",
    },
    accent: {
      primary: "#ff6b6b",
      secondary: "#e9d9d8",
      tertiary: "#e4e4e4",
    },
    importance: {
      important: "#FF3B2D",
      secondary: "#FEF2B4",
      unimportant: "#EFFDD3",
    },
  },
  typography: {
    title: {
      size: "20px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    title50: {
      size: "50px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    body10: {
      size: "10px",
      fontFamily: "Roboto",
      letterSpacing: "1.5px",
    },
    body12: {
      size: "10px",
      fontFamily: "Roboto",
      letterSpacing: "0.4px",
    },
    body16: {
      size: "16px",
      fontFamily: "Roboto",
      letterSpacing: "0.15px",
    },
    body14: {
      size: "14px",
      fontFamily: "Roboto",
      letterSpacing: "0.1px",
    },
    button: {
      size: "14px",
      fontFamily: "Roboto",
      letterSpacing: "1.25px",
    },
    body24: {
      size: "24px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
