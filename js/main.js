import Screen from "./screen";

window.addEventListener("load", () => {
  const screen = new Screen();

  const animate = () => {
    screen.update().draw();
    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);
});
