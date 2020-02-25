"use strict";

// listen for a click on the button
function handleUserInput() {
  $(".js-button").click(function(event) {
    event.preventDefault();

    // once button is clicked, collect the text that is in `input`
    const userInput = $('input[id="dog-pics"]').val();

    // strip out spaces and capital letters
    let preppedText = prepText(userInput);

    // add that text to the dogAPI url
    let dogApiUrl = `https://dog.ceo/api/breed/${preppedText}/images/random`;

    callDogApi(dogApiUrl);
  });
}

function prepText(string) {
  const regex = /\s+/g;
  return string
    .toLowerCase()
    .trim()
    .replace(regex, "");
}

//use fetch to call the API with the userInput value in the URL and render the image from the API to the DOM
function callDogApi(url) {
  fetch(url)
    .then(response => response.json())
    .then(dogObj => runControlFlow(dogObj))
    .catch(err => $(".image-results").html(`Something went wrong! (${err})`));
}

function runControlFlow(response) {
  if (response.status !== "success") {
    $(".image-results").html(
      `<p class="error">Oh no! Something went wrong.</p>`
    );
  } else {
    $(".image-results").html(
      `<div><img class="dog-pic" src="${response.message}" alt="a dog" /></div>`
    );
  }
}

handleUserInput();
