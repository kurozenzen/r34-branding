import { whiteBackgrounds } from "./base/backgrounds/whiteBackgrounds";
import { solidWhiteLayers } from "./base/layers/solidWhiteLayers";
import { noShadows } from "./base/shadows/noShadows";
import { dark } from "./dark";

export const light = {
  ...dark,
  colors: {
    ...dark.colors,
    ...whiteBackgrounds,
    ...solidWhiteLayers,
  },
  shadow: {
    ...noShadows,
  },
};
