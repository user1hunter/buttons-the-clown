import { getReservations, deleteReservation, getClowns, getCompletedReservations, saveCompletedReservations } from "./dataAccess.js";

export const Reservations = () => {
  const reservationsArr = getReservations();
  const clowns = getClowns();
  const completedReservations = getCompletedReservations();

  return `
    <ul>
      ${reservationsArr
        .map((reservation) => {
          const complete = completedReservations.find(completeRes => completeRes.reservationId === reservation.id)
          return `<li>
          ${reservation.parentName} reserved a party for 
          ${reservation.childName} at ${reservation.partyAddress} on 
          ${reservation.partyDate}
          
          ${complete ? `<select class="clowns" id="clowns" hidden>` : `<select class="clowns" id="clowns">`}
            <option value="">Choose</option>
            ${
                clowns.map(
                    clown => {
                        return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                    }
                ).join("")
            }
        </select>
          <button class="reservation__deny" id="reservation--${reservation.id}">Deny</button>
          </li>`;
        })
        .join("")}
    </ul>
  `;
};

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("reservation--")) {
    const [, reservationId] = event.target.id.split("--");
    deleteReservation(parseInt(reservationId));
  }
});

mainContainer.addEventListener(
  "change",
  (event) => {
    if(event.target.id === "clowns") {
      const [resId, clownId] = event.target.value.split("--");

      const completedRes = {
        reservationId: parseInt(resId),
        clownId: parseInt(clownId),
        dateCompleted: Date.now()
      }

      saveCompletedReservations(completedRes)

    }
  }
)