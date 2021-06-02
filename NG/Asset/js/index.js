// (S)CSS
import "../scss/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// JS
import "bootstrap";
import * as Turbo from "@hotwired/turbo";
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

// Init Stimulus.
// Name controllers with *_controller.js.
// See: https://stimulus.hotwire.dev/handbook/installing#using-webpack
const stimulusApplication = Application.start();
const stimulusContext = require.context("./stimulus-controllers", true, /\.js$/);
stimulusApplication.load(definitionsFromContext(stimulusContext));

// Configure delay to trigger Turbo Drive's progress bar.
Turbo.setProgressBarDelay(1000); // in milliseconds; default 500ms
