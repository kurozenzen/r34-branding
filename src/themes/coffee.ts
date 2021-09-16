import { Theme } from "../types/Theme";
import { dark } from "./dark";

export const coffee: Theme = {
  ...dark,
  colors: {
    ...dark.colors,
    backgroundColor: "#161410",
    layerBgSolid: "#262420",
  },
};
