import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input", "results"]

  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  search(event) {
    event.preventDefault()

    const url = `https://www.omdbapi.com/?apikey=6ddb271d&s=${this.inputTarget.value}`

    fetch(url).then(response => response.json()).then(data => {
      console.log(data)
      data.Search.forEach((movie) => {
        const movieTag = `<li class="list-group-item border-0">
          <img src="${movie.Poster}" alt="${movie.Title} movie poster" width="100" height="100%">
        </li>`
        this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
      })
    })
  }
}
