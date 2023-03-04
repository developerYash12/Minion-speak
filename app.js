var inpTxt = document.querySelector("#inp-txt");
var outputTxt = document.querySelector("#output");
var btnTranslate = document.querySelector("#btn");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function translationUrl(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(err) {
  console.log("Error occured", err);
  alert("Something Went Wrong! Try again after some time");
}

function clickHandler() {
  var inputTxt = inpTxt.value;

  fetch(translationUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
      var translatedTxt = json.contents.translated;
      outputTxt.innerText = translatedTxt;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);