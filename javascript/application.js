import { Application } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
import MoviesController from "./controllers/movies_controller.js"
import CheckAllCheckboxesController from "./controllers/check_all_checkboxes_controller.js"
import CopyToClipboardController from "./controllers/copy_to_clipboard_controller.js"

Stimulus.register("disable-button", DisableButtonController)
Stimulus.register("movies", MoviesController)
Stimulus.register("check-all", CheckAllCheckboxesController)
Stimulus.register("copy-to-clipboard", CopyToClipboardController)
