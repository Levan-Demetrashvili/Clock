const clockEl = document.getElementById('MyClockDisplay');

function timeToStr(unit) {
  return unit.toString().padStart(2, 0);
}

setInterval(function () {
  // Date
  const date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const half = date.getHours() >= 12 ? 'PM' : 'AM';

  // Date to str
  const secsStr = timeToStr(seconds);
  const minsStr = timeToStr(minutes);
  const hoursStr = timeToStr(hours);
  // Output
  const clock = `${hoursStr}:${minsStr}:${secsStr} ${half}`;
  clockEl.textContent = clock;
}, 1000);
