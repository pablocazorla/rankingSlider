import {
  PADDING_LEFT,
  PADDING_TOP,
  GAME_PADDING_Y,
  GAME_IMG_PADDING,
  GAME_MIN_WIDTH,
  MONTHS,
} from "./constants";

const x = PADDING_LEFT;

const getColor = () => {
  return Math.floor(Math.random() * 90);
};

class Game {
  constructor(screen, gameData) {
    this.screen = screen;
    const { name, src, count } = gameData;
    this.name = name;
    this.count = count;
    //
    this.yPos = 12;

    this.currentNum = 0;
    this.currentNum_next = 0;

    this.y = 1000;
    this.y_next = 1000;
    this.width = GAME_MIN_WIDTH;
    this.width_next = GAME_MIN_WIDTH;

    this.color = `rgb(${getColor() + 50},${getColor() + 10},${
      getColor() + 20
    })`;

    this.updateMonth();

    this.img = new Image();
    this.img.src = src;
    this.imgloaded = false;
    this.img.onload = () => {
      this.imgloaded = true;
    };
  }
  updateMonth(pix, h) {
    const { monthIndex } = this.screen;
    const monthName = MONTHS[monthIndex];

    this.currentNum_next = this.count[monthName].count;

    this.width_next = this.count[monthName].count * pix;
    this.y_next =
      PADDING_TOP + this.count[monthName].order * h + GAME_PADDING_Y;

    // console.log(h);
  }
  update() {
    const dw = (this.width_next - this.width) * 0.06;
    const dy = (this.y_next - this.y) * 0.06;

    const dNum = (this.currentNum_next - this.currentNum) * 0.06;

    this.width += dw;
    this.y += dy;
    this.currentNum += dNum;

    return this;
  }
  draw(h) {
    const { ctx } = this.screen;

    ctx.fillStyle = this.color;

    const { y, width } = this;

    // const width = this.widthPos * pix;
    // const y = PADDING_TOP + this.yPos * h + GAME_PADDING_Y;

    const height = h - GAME_PADDING_Y * 2;
    const corner = height / 2;

    ctx.beginPath();
    ctx.roundRect(x, y, width, height, [
      GAME_IMG_PADDING,
      corner,
      corner,
      GAME_IMG_PADDING,
    ]);
    ctx.closePath();
    ctx.fill();

    if (this.imgloaded) {
      ctx.drawImage(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        x + GAME_IMG_PADDING,
        y + GAME_IMG_PADDING,
        height - GAME_IMG_PADDING * 2,
        height - GAME_IMG_PADDING * 2
      );
    } else {
      ctx.fillStyle = "#000";
      ctx.fillRect(
        x + GAME_IMG_PADDING,
        y + GAME_IMG_PADDING,
        height - GAME_IMG_PADDING * 2,
        height - GAME_IMG_PADDING * 2
      );
    }
    /* TEXT */

    const numWidth = 120;

    ctx.fillStyle = "#FFF";
    ctx.font = "20px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.save();
    const xText = x + 1.2 * height;
    const yText = y + height / 2;
    //
    ctx.beginPath();
    ctx.moveTo(xText - 1, y);
    ctx.lineTo(xText - 1, y + height);
    const clipMaxX = x + width - numWidth + 20;
    ctx.lineTo(clipMaxX, y + height);
    ctx.lineTo(clipMaxX, y);
    ctx.closePath();
    ctx.clip();

    ctx.fillText(this.name, xText, yText);
    ctx.restore();

    // NUM
    ctx.textAlign = "center";
    const xNum = x + width - numWidth / 2;
    ctx.font = "bold 36px sans-serif";
    ctx.fillText(Math.ceil(this.currentNum).toFixed(0), xNum, yText);
  }
}
export default Game;
