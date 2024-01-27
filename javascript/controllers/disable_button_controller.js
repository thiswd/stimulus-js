import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["button"]

  // Método padrão chamado sempre que o controller se conecta com o DOM
  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  disable() {
    this.buttonTarget.setAttribute("disabled", "");
  }
}
