import { Controller } from 'stimulus'

export default class extends Controller {

  // Método padrão chamado sempre que o controller se conecta com o DOM
  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  disable() {
    this.element.setAttribute("disabled", "");
  }
}
