import "./styles/index.scss";

const elvenShieldReciepe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGuantletRecipe = {
  ...elvenShieldReciepe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldReciepe);
console.log(elvenGuantletRecipe);
