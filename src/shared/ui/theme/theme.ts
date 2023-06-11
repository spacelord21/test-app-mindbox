const THEME_GRID_STEP = 16;

export const theme = {
  name: "theme",
  palette: {
    background: {},
    text: {},
    accent: {},
  },
  typography: {
    title: {
      size: "20px",
      fontFamily: "Roboto",
      letterSpacing: "0px",
    },
    title40: {
      size: "40px",
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
