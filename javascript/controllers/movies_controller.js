import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input", "results"]

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
      this.insertMovies(data)
    })
  }

  insertMovies(movies) {
    movies.Search.forEach((movie) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${movie.Poster}" alt="${movie.Title} movie poster" width="100" height="100%">
      </li>`
      this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
    })
  }
}
