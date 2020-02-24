// listen for a click on the button
function handleUserInput() {
  $(".js-button").click(function(event) {
    event.preventDefault();

    // once button is clicked, collect the number that is in `input`
    const userInput = $('input[id="dog-pics"]').val();

    // add that number to the dogAPI url
    let dogApiUrl = `https://dog.ceo/api/breeds/image/random/${userInput}`;

    callDogApi(dogApiUrl);
  });
}

//use fetch to call the API
function callDogApi(url) {
  fetch(url)
    .then(response => response.json())
    .then(dogObj => createImgElements(dogObj.message))
    .catch(err => console.log("error: ", err));
}
function createImgElements(message) {
  message.forEach(item =>
    $(".image-results").append(`<div><img src=${item} alt="a dog" /></div>`)
  );
}

// collect the image URLs that DogAPI has returned
// insert the images as `img` elements into `section`

handleUserInput();
