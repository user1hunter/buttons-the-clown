import { ButtonsTheClown } from "./Clown.js";
import { fetchClowns, fetchCompletedReservations, fetchReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

const render = () => {
  Promise.all([
    fetchReservations(),
    fetchClowns(),
    fetchCompletedReservations()
  ])
  .then(() => {
    mainContainer.innerHTML = ButtonsTheClown();
  })
};

render();

mainContainer.addEventListener("stateChanged", event => {
  render();
})