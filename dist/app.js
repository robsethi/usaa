const distTotals = [75, 123, 78, 223, 55];
const elemDone = [];
let elem = [];

const allElements = () => {
  elems = document.getElementsByClassName("progress");
  //console.log(elems);
  for (var i = 0; i < elems.length; i++) {
    if (typeof elems[i].id !== "undefined") {

      distTotals.map(dist => {

        update(elems[i].id, dist);
        // console.log("id " + elems[i].id);
      });
    }
  }

  return;
};

const update = (elem, total) => {
  var element = document.getElementById(elem);
  var width = 1;

  var identity = setInterval(scene, 10);

  function scene(total) {
    if (width >= 50) {
      clearInterval(identity);
    } else {
      width++;
      element.style.width = width + "%";
    }
  }
};

const animateValue = (id, start, end, duration) => {
  // assumes integer values for start and end

  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));

  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);

  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    obj.innerHTML = value;
    if (value == end) {
      clearInterval(timer);
    }
  }

  var timer = setInterval(run, stepTime);
  run();
};

animateValue("counter", 100, 1423, 2000);

if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
  document.addEventListener("DOMContentLoaded", allElements);
  allElements();
} else {
  document.addEventListener("DOMContentLoaded", allElements);
};