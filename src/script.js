function displayPoem(response) {
  console.log(response);
  let poem = document.querySelector("#display-poem");
  let poemValue = response.data.answer;
  new Typewriter(poem, {
    strings: poemValue,
    autoStart: true,
    delay: null,
  });
  console.log(poemValue);
}

function generatePoem(event) {
  event.preventDefault();
  poemTopic = document.querySelector("#poem-topic");

  let apiKey = `abf74f3d08ac0ba0527t801bd8o47a65`;
  let prompt = `Write a short and concise poem with the topic of ${poemTopic.value}.`;
  console.log(poemTopic.value);
  let context = `You are a world renowned poet. You can create any poem based on any topic`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
  let waitingMessage = document.querySelector("#display-poem");
  waitingMessage.innerHTML = `Generating a poem...⏳`;
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

function initialPoemDisplay(topic) {
  let apiKey = `abf74f3d08ac0ba0527t801bd8o47a65`;
  let prompt = `Write a short and concise poem with the topic of ${topic}.`;
  console.log(topic);
  let context = `You are a world renowned poet. You can create any poem based on any topic`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

initialPoemDisplay("Love");
