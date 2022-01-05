import { sendReservation } from "./dataAccess.js";

export const ReservationForm = () => {
    return `
    <div class="field">
      <label class="label" for="parentName">Parent's Name</label>
      <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
      <label class="label" for="childName">Child's Name</label>
      <input type="text", name="childName" class="input" />
    </div>
    <div class="field">
      <label class="label" for="numberOfChildren">Number of Children Attending</label>
      <input type="number" name="numberOfChildren" class="input" />
    </div>
    <div class="field">
      <label class= "label" for="partyAddress">Address</label>
      <input type="text" name="partyAddress" class="input" />
    </div>
    <div class="field">
      <label class="label" for="partyDate">Party Date</label>
      <input type="date" name="partyDate" class="input" />
    </div>
    <div class="field">
      <label class="label" for="reservationLength">Party Duration</label>
      <input type="number" name="reservationLength" class="input" />
    </div>
    <button class="button" id="submitReservation">Submit Reservation</button>
    `
}


const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", event => {
  if (event.target.id === "submitReservation"){
    const dataToSendToAPI = {
      parentName: document.querySelector('input[name="parentName"]').value,
      childName: document.querySelector('input[name="childName"]').value,
      numberOfChildren: document.querySelector('input[name="numberOfChildren"]').value,
      partyAddress: document.querySelector('input[name="partyAddress"]').value,
      partyDate: document.querySelector('input[name="partyDate"]').value,
      reservationLength: document.querySelector('input[name="reservationLength"]').value
    }
  
    sendReservation(dataToSendToAPI)
  }
})
