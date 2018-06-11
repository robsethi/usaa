var districtArr = [112, 98, 119, 126, 129, 44, 118, 125, 101, 27];

function allElements() {
  var elems = document.getElementsByClassName("progress");
  //console.log(elems);
  for (var i = 0; i < elems.length; i++) {
    if (typeof elems[i].id !== "undefined") {
      update(elems[i].id, 100);
      // console.log("id " + elems[i].id);
    }
  }

  return;
}

function getTotal(elem) {
  var total = 0;
  //console.log(elem + " " + total);

  for (var i = 0; i < districtArr.length; i++) {
    total = districtArr[i];
    update(elem, districtArr[i]);
  }
  //console.log(elem + " " + total);
  return update(elem, total);
}

function update(elem, total) {
  var element = document.getElementById(elem);
  var width = 1;
  var identity = setInterval(scene, 10);

  function scene(total) {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++;
      element.style.width = width + "%";
    }
  }
}

document.addEventListener("DOMContentLoaded", allElements);
