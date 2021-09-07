import { Theme } from "../../types/Theme";

export const baseTheme: Omit<Theme, "colors" | "shadow"> = {
  dimensions: {
    borderRadius: "3px",
    borderWidth: "2px",
    spacing: "4px",
    bigSpacing: "8px",
    hugeSpacing: "16px",
    blockHeight: "36px",
    bodyWidth: "1000px",
    modalWidth: "500px",
  },
  timings: {
    transitionTime: "0.2s",
    longTransitionTime: "0.2s",
  },
  fontSizes: {
    content: "16px",
    bigTitle: "24px",
  },
};
