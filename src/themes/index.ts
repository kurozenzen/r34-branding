import { Theme as ThemeId } from "r34-types";
import { Theme } from "../types/Theme";

import { light } from "./light";
import { dark } from "./dark";
import { coffee } from "./coffee";
import { deepsea } from "./deepsea";

// This ensures all themes are defined and valid
export const themes: Record<ThemeId, Theme> = {
  dark,
  light,
  coffee,
  deepsea,
};
export const defaultThemeId = "dark";
