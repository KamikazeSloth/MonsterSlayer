document.addEventListener('DOMContentLoaded', function () {

  var coll = document.getElementsByClassName("collapsible");
  var i;
  /*The on-click dropdown menu */
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}, false);

/*make the popup happen */
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

/*Make div appear when scrolling through page*/
window.addEventListener("scroll", function () {

  if (removeElement.called === true) {
    return null;
  }

  else {
    var target = document.getElementById("hidden-div");
    if (window.pageYOffset > 200) {
      target.style.display = "block";
    }
    else if (window.pageYOffset < 200) {
      target.style.display = "none";
    }
  }
}, false);


/**Close down the "fake-cookie-pop-up" on click */
function removeElement() {

  var elem = document.getElementById("hidden-div");
  elem.parentNode.removeChild(elem);

  removeElement.called = true;
}