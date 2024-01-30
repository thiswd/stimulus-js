import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["checkAll", "checkbox"]

  connect() {
    console.log("Hello from check all checkboxes controller");
  }

  checkAll() {
    this.checkboxTargets.forEach(checkbox => {
      checkbox.checked = this.checkAllTarget.checked
    })
  }
}
