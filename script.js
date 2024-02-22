function abtDrpDwn() {
  var section = document.getElementById("dropdown-content");
  if (section.style.display == "none") {
  section.style.display = "block";
  } else {
    section.style.display = "none"
  }
}

function showSettings() {
  var section = document.getElementById("settingsPopup");
  if (section.style.display == "none") {
  section.style.display = "block";
  } else {
    section.style.display = "none"
  }
}

function enlargeText() {
  var elements =
document. querySelectorAll('body *');
elements. forEach(function (element) {
var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
var newSize =
(parseFloat (currentSize) * 1.2) + 'px';
element.style.fontSize = newSize;
}) ;
}