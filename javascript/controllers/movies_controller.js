import { Controller } from "stimulus"
import Mustache from "mustachejs"

export default class extends Controller {
  static targets = ["input", "results", "template"]

  static values = {
    baseUrl: String
  }

  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  search(event) {
    event.preventDefault()

    this.resultsTarget.innerHTML = ""

    this.fetchMovies(this.inputTarget.value)
  }

  fetchMovies(query) {
    const url = `${this.baseUrlValue}?apikey=6ddb271d&s=${query}`

    fetch(url).then(response => response.json()).then(data => {
      this.insertMovies(data.Search)
    })
  }

  insertMovies(movies) {
    const output = Mustache.render(this.templateTarget.innerHTML, { movies })
    this.resultsTarget.innerHTML = output
  }
}
