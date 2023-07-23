import { playSound, getDomNodes } from "./lib.js";

export let makePhoneticsSectionDomNode = function (word, phoneticsObj) {
  let phoneticsSection = `
    <section class="phonatics">
    <div class="container">
      <div class="content">
        <h1 class="word">${word}</h1>
        <span class="phonatics">${phoneticsObj.text}</span>
        <button class="spelling">
          <i class="fa-sharp fa-solid fa-play"></i>
        </button>
      </div>
    </div>
  </section>`;
  let phoneticsSectionDomNode = getDomNodes(phoneticsSection);
  let spellingBtn = phoneticsSectionDomNode.querySelector("button.spelling");
  spellingBtn.addEventListener("click", () => {
    playSound(phoneticsObj.audio);
  });

  return phoneticsSectionDomNode;
};
