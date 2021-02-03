const aliases = (prefix = "./src/") => ({
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
