let errSpan = document.querySelector("span.err-span");
let searchBoxInp = document.querySelector("section.header .search-box input");

export let displayErr = function (word) {
  const errMsg = 'No Definitions Found for "' + word + '"';
  errSpan.textContent = errMsg;
  searchBoxInp.classList.add("err");
};

export let clearErrStyle = function () {
  errSpan.textContent = "";
  searchBoxInp.classList.remove("err");
};
