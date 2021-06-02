/* eslint no-unused-vars: 0 */
import { Controller } from "stimulus";

// Controller to use in a <form>.
export default class extends Controller {
  static targets = ["loadingSpinner", "loadingSpinnerAndText"];

  /*
      Call within the <form> tag itself on the default submit event.
      Will put any tag with the loading* targets into a disabled loading state.

      E.g.:

        <form method="post" action="..." data-controller="form" data-action="form#loading">
          ...
          <button type="submit" data-form-target="loadingSpinnerAndText">submit</button>
        </form>

      To just have the spinner, use data-form-target="loadingSpinner"
  */
  loading(event) {
    for (let i = 0; i < this.loadingSpinnerTargets.length; i++) {
      let spinnerTarget = this.loadingSpinnerTargets[i];
      spinnerTarget.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>';
      spinnerTarget.disabled = true;
    }

    for (let j = 0; j < this.loadingSpinnerAndTextTargets.length; j++) {
      let spinnerAndTextTarget = this.loadingSpinnerAndTextTargets[j];
      spinnerAndTextTarget.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\nLoading...';
      spinnerAndTextTarget.disabled = true;
    }
  }
}
