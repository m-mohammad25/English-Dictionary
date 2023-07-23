import { makePhoneticsSectionDomNode } from "./phonetics_section.js";

import { makeMeaningsSectionDomNodes } from "./meanings_section.js";

import { makeSourceSectionDOMNode } from "./source_section.js";
import { clearErrStyle, displayErr } from "./error_display.js";

let darkToggleBtn = document.getElementById("dark-toggle-btn");

let searchBoxInp = document.querySelector("section.header .search-box input");
let searchBoxBtn = document.querySelector("section.header .search-box button");

darkToggleBtn.onchange = () => {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-light");
};

const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
searchBoxBtn.onclick = async function (e) {
  clearErrStyle();
  let word = searchBoxInp.value.trim();
  let response = await fetch(api + word);
  if (!response.ok) {
    displayErr(word);
    return;
  }
  let meaningObj = JSON.parse(await response.text());

  console.log(meaningObj);
  let firstMeaningResult = meaningObj[0];

  let phoneticsSectionDomNode = makePhoneticsSectionDomNode(
    firstMeaningResult.word,
    firstMeaningResult.phonetics[0]
  );

  let meaningsSectionDomNodes = makeMeaningsSectionDomNodes(
    firstMeaningResult.meanings
  );

  let sourceSectionDOMNode = makeSourceSectionDOMNode(
    firstMeaningResult.sourceUrls.shift()
  );

  displayResult(
    phoneticsSectionDomNode,
    meaningsSectionDomNodes,
    sourceSectionDOMNode
  );
};

function displayResult(...sections) {
  let resultSection = document.querySelector("section.result");
  resultSection.textContent = "";
  for (const sect of sections) {
    resultSection.appendChild(sect);
  }
}
