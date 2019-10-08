function changeIconHeader() {
  var element = document.body;
  if (element.classList) {
    element.classList.toggle("header__icon--close");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("header__icon--close");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("header__icon--close");
    element.className = classes.join(" ");
  }
}