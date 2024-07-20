function displayPoem(response) {
  let poem = document.querySelector("#display-poem");
  let poemValue = response.data.answer;
  new Typewriter(poem, {
    strings: poemValue,
    autoStart: true,
    delay: null,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemTopic = document.querySelector("#poem-topic");

  let apiKey = `abf74f3d08ac0ba0527t801bd8o47a65`;
  let prompt = `Write a poem with the topic of ${poemTopic.value} that is 5 lines long. Provide the poem in HTML without "html", without any leading or ending whitespaces.Sign every poem with <br> <strong> SheCodes AI </strong>  at the end of the poem. `;
  console.log(poemTopic.value);
  let context = `You are a world renowned poet. You can create any poem based on any topic. You follow instructions without fail.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
  let waitingMessage = document.querySelector("#display-poem");
  waitingMessage.classList.remove("hidden");
  waitingMessage.innerHTML = `<div class="blink">Generating a poem about ${poemTopic.value}⏳... </div>`;
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

function initialPoemDisplay(topic) {
  let apiKey = `abf74f3d08ac0ba0527t801bd8o47a65`;
  let prompt = `Write a short and concise poem with the topic of ${topic} that is 5 lines long or less. Provide the poem in HTML without "html", without any leading or ending whitespaces. Sign every poem with <br> <strong> SheCodes AI </strong> at the end of the poem.  .`;
  let context = `You are a world renowned poet. You can create any poem based on any topic`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

initialPoemDisplay("Love");
