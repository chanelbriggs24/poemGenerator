function generatePoem(event) {
  event.preventDefault();
  let poem = document.querySelector("#display-poem");
  let poemValue = (poem.innerHTML = `My dearest Jordan`);
  new Typewriter(poem, {
    strings: poemValue,
    autoStart: true,
    cursor: null,
  });
  console.log(poem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
