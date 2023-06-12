import { TTodoImportance } from "@entities/to-do/types";
import { useTheme } from "styled-components";

export const useTitleColor = (importance: TTodoImportance) => {
  const theme = useTheme()!;
  const red = theme.palette.importance.important;
  const yellow = theme.palette.importance.secondary;
  const green = theme.palette.importance.unimportant;
  const defaultColor = theme.palette.background.secondary;
  const titleColor = () => {
    switch (importance) {
      case "IMPORTANT": {
        return red;
      }
      case "SECONDARY": {
        return yellow;
      }
      case "UNIMPORTANT": {
        return green;
      }
      default: {
        return defaultColor;
      }
    }
  };
  return { color: titleColor };
};
