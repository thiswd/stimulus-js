import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input"]

  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  search(event) {
    event.preventDefault()

    const url = `https://www.omdbapi.com/?apikey=6ddb271d&s=${this.inputTarget.value}`

    fetch(url).then(response => response.json()).then(data => {
      console.log(data)
    })
  }
}
