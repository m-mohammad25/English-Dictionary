import { getDomNodes } from "./lib.js";

export let makeSourceSectionDOMNode = function (sourceUrl) {
  let sourceSection = `  <section class="source">
    <div class="container">
      <div class="content">
        <span class="source-title">Source</span>
        <a href="${sourceUrl}">
          ${sourceUrl}
          <i class="fa-solid fa-up-right-from-square"></i
        ></a>
      </div>
    </div>
    </section>`;

  return getDomNodes(sourceSection);
};
