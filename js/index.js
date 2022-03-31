let lastItemSelected;

// Solo se ejecuta cuando se ha cargado todo el HTML
document.addEventListener('DOMContentLoaded', () => {

});

const clickScale = (obj) => {
  if (lastItemSelected === undefined) {
    lastItemSelected = obj;
  } else {
    lastItemSelected.classList.remove("card__value-scale--selected");
    lastItemSelected = obj;
  }

  obj.classList.add("card__value-scale--selected");
}

const submit = () => {
  selectedScale = document.getElementById("selected-scale");
  if (lastItemSelected === undefined) {
    selectedScale.innerText = "You selected 0 out of 5";
  } else {
    selectedScale.innerText =
      "You selected " + lastItemSelected.innerText+ " out of 5";
  }
  showThankYouCard()
}

const showThankYouCard = () => {
  console.log("aqui")
  thankYouCard = document.getElementById("card__tank-you");
  ratingCard = document.getElementById("card__rating");

  ratingCard.classList.add("card--hide")
  thankYouCard.classList.remove("card--hide")
}
