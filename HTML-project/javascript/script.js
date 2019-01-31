
/**Expandeble info-div */
$('.info-container').click(function(){
  //expand red div width to 200px
  $('.info-content').animate({width:"500px"}, 500);
  setTimeout(function(){
      //after 500 milliseconds expand height to 800px
      $('.info-content').animate({height:"800px"}, 500);
  },500);
  setTimeout(function(){
      //after 1000 milliseconds show textarea (or textbox, span, etc)
      $('.info-content').find('input[type="p"]').show();    
  },3000);
});

/**Expandeble info-div */
$(document).ready(function(){
  $('.info-container').click(function() {

    $('.info-content').toggle("slide");

  });
});



/**In order to be able to load the function */
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
    if (window.pageYOffset > 0) {
      target.style.display = "block";
    }
    else if (window.pageYOffset < 0) {
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