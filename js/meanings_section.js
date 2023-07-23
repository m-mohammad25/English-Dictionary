import { makeSynmsAntnmsSecitonDomNode } from "./synonyms_antonyms_section.js";
import { getDomNodes } from "./lib.js";
export let makeMeaningsSectionDomNodes = function (meanings) {
  let totalMeaningsSection = "";
  meanings.forEach((meaning) => {
    let totalDefinitions = meaning.definitions.reduce(reduceMeanings, "");

    let synmsSection = makeSynmsAntnmsSecitonDomNode(meaning, "synonyms");
    let antnmsSection = makeSynmsAntnmsSecitonDomNode(meaning, "antonyms");

    let meaningSection = `
      <section class="meaning">
      <div class="container">
        <div class="content">
          <h3 class="section-title">
            <span>${meaning.partOfSpeech}</span>
          </h3>
          <h5 class="meaning-title">Meaning</h5>
          <ul>${totalDefinitions}</ul>
          ${synmsSection}
          ${antnmsSection}
        </div>
      </div>
    </section>`;

    totalMeaningsSection += meaningSection;
  });
  return getDomNodes(totalMeaningsSection);
};

let reduceMeanings = (total, definitionObj) => {
  total += `<li>${definitionObj.definition}</li>\n`;
  if (definitionObj.example)
    total += `<span class="example">"${definitionObj.example}"</span>\n`;
  return total;
};
