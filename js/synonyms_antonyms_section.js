import { varToString } from "./lib.js";
export let makeSynmsAntnmsSecitonDomNode = function (meaningObj, option) {
  const numOfSynmsToDisplay = 3;
  let synonymsSlice = meaningObj[option].slice(0, numOfSynmsToDisplay);
  if (!synonymsSlice.length) return "";

  let synmsNodes = synonymsSlice.reduce(reduceSynms, "");
  let synmsSection = `  
    <section class="synonyms">
    <div class="title">
      <span class="synm-title">${option}</span>
    </div>
    <div class="synms">
        ${synmsNodes}
    </div>
  </section>`;

  return synmsSection;
};

let reduceSynms = (total, synm, index, arr) => {
  if (index === arr.length - 1) total += `<span class="synm">${synm}</span>\n`;
  else total += `<span class="synm">${synm}, </span>\n`;
  return total;
};
