import { ReservationForm } from "./ServiceForm.js"
import { Reservations } from "./requests.js"

export const ButtonsTheClown = () => {
  return `
    <h1 class="title">Buttons the Clown Rental</h1>
    <article class= reservationForm>
      ${ReservationForm()}
    </article>
    <article>
      <h2 class="reservation">Reservations</h2>
      ${Reservations()}
    </article>
  `
}