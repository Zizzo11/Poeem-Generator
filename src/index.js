function generatepoem(event) {
    event.preventDefault();
    new Typewriter('#poem', {
  strings: "roses are red, violets are blue, AI generates poems, just for you.",
  autoStart: true,
  delay: 1,
  cursor: "|",
});

}


let poemFormElement = document.querySelector("#Poeem-Generator-form");
poemFormElement.addEventListener("submit", generatepoem);