import { Theme } from "../types/Theme";
import { blueAccents } from "./base/accents/blueAccents";
import { dark } from "./dark";

export const deepsea: Theme = {
  ...dark,
  colors: {
    ...dark.colors,
    backgroundColor: "#010917",
    backgroundColor2: "#eeeeff",
    layerBgSolid: "#111929",
    ...blueAccents,
  },
};
