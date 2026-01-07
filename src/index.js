function displayPoem(response) {
    new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "|",
});
}



function generatepoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "4bd7a33cfa794e02bob9f9a9tf20b54c";

let context = " You are a talented persian poet known for your creativity and vivid imagery. your mission is generate 4 line poem in basic HTML. the persian poem is from right to left. write the poet who the poem belongs to at the end of the poem. make sure to follow the user instructions." ;
let prompt = `user instructions: Generate a persian poem about ${instructionsInput.value}.`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="blink"> ⌛Generating your poem about ${instructionsInput.value}...</div>`;


axios.get(apiUrl).then(displayPoem);




    

}


let poemFormElement = document.querySelector("#Poeem-Generator-form");
poemFormElement.addEventListener("submit", generatepoem);