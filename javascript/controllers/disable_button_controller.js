import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["button", "link"]

  // Método padrão chamado sempre que o controller se conecta com o DOM
  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  disable() {
    this.buttonTarget.setAttribute("disabled", "");
    this.linkTarget.classList.remove("d-none");
  }

  reset() {
    this.buttonTarget.removeAttribute("disabled");
    this.linkTarget.classList.add("d-none");
  }
}
