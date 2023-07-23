export let getDomNodes = (str) =>
  document.createRange().createContextualFragment(str);

export let playSound = (url) => new Audio(url).play();

export const varToString = (varObj) => Object.keys(varObj)[0];
