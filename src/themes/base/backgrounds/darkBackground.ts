import { HexColor } from "../../../types/HexColor";
import { defaultLayers } from "../layers/defaultLayers";

export const darkBackground = {
  text: "#ffffff" as HexColor,
  backgroundColor: "#121212" as HexColor,
  backgroundColor2: "#ffffff" as HexColor,
  subduedText: "#ffffff80" as HexColor,
  ...defaultLayers,
  layerBgSolid: "#222222" as HexColor,
  backdrop: "#000000d0" as HexColor,
};
