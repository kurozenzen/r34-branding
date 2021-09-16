import { CssUnit } from "./CssUnit";
import { HexColor } from "./HexColor";
import { TimeUnit } from "./TimeUnit";

export interface Theme {
  colors: {
    accentColor: HexColor;
    accentColorActive: HexColor;
    accentColorHover: HexColor;
    backdrop: HexColor;
    backgroundColor: HexColor;
    backgroundColor2: HexColor;
    focus: HexColor;
    layerBg: HexColor;
    layerBgHighlight: HexColor;
    layerBgSolid: HexColor;
    liked: HexColor;
    negative: HexColor;
    positive: HexColor;
    subduedText: HexColor;
    text: HexColor;
    toggleOff: HexColor;
  };
  dimensions: {
    bigSpacing: CssUnit;
    blockHeight: CssUnit;
    bodyWidth: CssUnit;
    borderRadius: CssUnit;
    borderWidth: CssUnit;
    hugeSpacing: CssUnit;
    modalWidth: CssUnit;
    spacing: CssUnit;
  };
  fontSizes: {
    bigTitle: CssUnit;
    content: CssUnit;
  };
  shadow: {
    color: HexColor;
    radius: CssUnit;
  };
  timings: {
    longTransitionTime: TimeUnit;
    transitionTime: TimeUnit;
  };
}
