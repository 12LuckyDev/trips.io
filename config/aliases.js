const aliases = (prefix = "./src/") => ({
  "@components": `${prefix}components`,
  "@custom-components": `${prefix}components/custom`,
  "@fancy-components": `${prefix}components/fancy`,
  "@styled-components": `${prefix}components/styled`,
  "@components": `${prefix}components`,
  "@pages": `${prefix}pages`,
  "@consts": `${prefix}consts`,
  "@hooks": `${prefix}hooks`,
  "@styles": `${prefix}styles`,
  "@utils": `${prefix}utils`,
  "@icons": `${prefix}icons`,
  "@services": `${prefix}services`,
});

module.exports = aliases;
