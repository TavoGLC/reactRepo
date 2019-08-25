//timer style
function TimerFormat(currentCount) {
  let hours = Math.floor(
    (currentCount % (100 * 60 * 60 * 24)) / (100 * 60 * 60)
  );
  let minutes = Math.floor((currentCount % (100 * 60 * 60)) / (100 * 60));
  let seconds = Math.floor((currentCount % (100 * 60)) / 100);
  let miliseconds = Math.floor((currentCount * 10) % 1000);

  let format =
    hours + "h " + minutes + "m " + seconds + "s " + miliseconds + "ms ";
  return format;
}
//Change int to HEX
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
//change RGB color to HEX color
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//RGB logic
function CountToRGB(currentCount) {
  let RGBBaseValue = Math.floor((currentCount % (100 * 60)) / 100);

  return rgbToHex(Math.floor(4.5 * RGBBaseValue), 255, 255);
}

export default { TimerFormat, CountToRGB };
