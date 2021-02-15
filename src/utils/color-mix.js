import { hex2dec, dec2hex } from "@utils";

const INVALID_COLOR_PATTER_MESSAGE = "is invalid color pattern!";

const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const sliceColorsRegex = /.{1,2}/g;

const sliceIntoColors = (colorHex) => {
  if (colorHex.length === 4) {
    return [
      `${colorHex[1]}${colorHex[1]}`,
      `${colorHex[2]}${colorHex[2]}`,
      `${colorHex[3]}${colorHex[3]}`,
    ];
  }
  return colorHex.slice(1).match(sliceColorsRegex);
};

const colorAvg = (c1, c2) =>
  dec2hex(Math.round((hex2dec(c1) + hex2dec(c2)) / 2), 2);

const colorMix = (c1, c2) => {
  if (c1 === "transparent") {
    return c2;
  }

  if (c2 === "transparent") {
    return c1;
  }

  if (!hexColorRegex.test(c1)) {
    throw new Error(`colorMix: ${c1} ${INVALID_COLOR_PATTER_MESSAGE}`);
  }

  if (!hexColorRegex.test(c2)) {
    throw new Error(`colorMix: ${c2} ${INVALID_COLOR_PATTER_MESSAGE}`);
  }

  const [r1, g1, b1] = sliceIntoColors(c1);
  const [r2, g2, b2] = sliceIntoColors(c2);

  return `#${colorAvg(r1, r2)}${colorAvg(g1, g2)}${colorAvg(b1, b2)}`;
};

export default colorMix;
