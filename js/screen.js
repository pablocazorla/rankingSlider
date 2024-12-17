import {
  BTN_WIDTH,
  MONTHS,
  PADDING_TOP,
  PADDING_LEFT,
  PADDING_RIGHT,
} from "./constants";
import getData from "../data/getData";
import Game from "./game";

const data = getData();

class Screen {
  constructor() {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext("2d");

    this.width = 2;
    this.height = 2;
    //
    this.monthIndex = 0;
    this.monthName = MONTHS[0];
    this.pix = 1;
    this.gameHeight = 60;
    //
    this.games = [];
    data.games.forEach((gameData) => {
      this.games.push(new Game(this, gameData));
    });

    const setSize = () => {
      this.width = window.innerWidth - 2 * BTN_WIDTH;
      this.height = window.innerHeight - 105;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      const { max } = data.months[this.monthName];
      this.pix = (this.width - (PADDING_LEFT + PADDING_RIGHT)) / max;
      this.gameHeight = (this.height - PADDING_TOP) / 10;
    };

    setSize();
    window.addEventListener("resize", setSize);
    //console.log(data);
    ////////////////////
    this.initBtns();
    this.updateMonth();
  }
  initBtns() {
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");

    btnLeft.addEventListener("click", () => {
      this.monthIndex -= 1;
      this.monthIndex =
        this.monthIndex < 0 ? MONTHS.length - 1 : this.monthIndex;
      this.updateMonth();
    });

    btnRight.addEventListener("click", () => {
      this.monthIndex += 1;
      this.monthIndex = this.monthIndex >= MONTHS.length ? 0 : this.monthIndex;
      this.updateMonth();
    });
  }
  updateMonth() {
    this.monthName = MONTHS[this.monthIndex];
    const { max } = data.months[this.monthName];
    this.pix = (this.width - (PADDING_LEFT + PADDING_RIGHT)) / max;
    //
    this.games.forEach((game) => {
      game.updateMonth(this.pix, this.gameHeight);
    });
  }
  update() {
    this.games.forEach((game) => {
      game.update();
    });
    return this;
  }
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    //
    this.ctx.fillStyle = "#FFF";
    this.ctx.font = "bold 50px sans-serif";
    this.ctx.textAlign = "left";
    this.ctx.fillText(this.monthName, PADDING_LEFT, PADDING_TOP / 2);
    //
    this.games.forEach((game) => {
      game.draw(this.gameHeight);
    });
  }
}

export default Screen;
