import easingUtils from "https://esm.sh/easing-utils";

class AHole extends HTMLElement {
  /**
   * Init
   */
  connectedCallback() {
    // Elements
    this.canvas = this.querySelector(".js-canvas");
    this.ctx = this.canvas.getContext("2d");

    this.discs = [];
    this.lines = [];

    // Init
    this.setSize();
    this.setDiscs();
    this.setLines();
    this.setParticles();

    this.bindEvents();

    // RAF
    requestAnimationFrame(this.tick.bind(this));
  }

  /**
   * Bind events
   */
  bindEvents() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  /**
   * Resize handler
   */
  onResize() {
    this.setSize();
    this.setDiscs();
    this.setLines();
