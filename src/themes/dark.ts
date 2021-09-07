import { crimsonAccents } from "./base/accents/crimsonAccents";
import { baseTheme } from "./base/baseTheme";
import { darkBackground } from "./base/backgrounds/darkBackground";
import { defaultSemantics } from "./base/defaultSemantics";
import { defaultShadows } from "./base/shadows/defaultShadows";
import { Theme } from "../types/Theme";

export const dark: Theme = {
  ...baseTheme,
  colors: {
    ...darkBackground,
    ...crimsonAccents,
    ...defaultSemantics,
  },
  shadow: {
    ...defaultShadows,
  },
};
