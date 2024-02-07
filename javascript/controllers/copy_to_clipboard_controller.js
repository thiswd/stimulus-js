import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input", "button"]

  static values = {
    feedbackText: String
  }

  connect() {
    console.log("Hello from copy to clipboard controller");
  }

  async copy() {
    const { value } = this.inputTarget
    const type = "text/plain";
    const blob = new Blob([value], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
    this.changeButton()
  }

  changeButton() {
    this.buttonTarget.innerText = this.feedbackTextValue
    this.buttonTarget.disabled = true
  }
}
