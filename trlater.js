const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const translateBtn = document.getElementById("translateBtn");
const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");
const swapBtn = document.getElementById("swapBtn");

translateBtn.addEventListener("click", () => {
  const text = inputText.value;
  if (!text.trim()) return;

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang.value}|${toLang.value}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      outputText.value = data.responseData.translatedText;
    })
    .catch(err => {
      outputText.value = "Error translating text";
      console.error(err);
    });
});

swapBtn.addEventListener("click", () => {
  [fromLang.value, toLang.value] = [toLang.value, fromLang.value];
  [inputText.value, outputText.value] = [outputText.value, inputText.value];
});
