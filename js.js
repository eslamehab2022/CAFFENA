// start  loadingt //
$(document).ready(function () {
  $("#loading").fadeOut(5000, function () {
    $("body").css("overflow", "auto");
  });
});
// End loading //
// start scroll //
let profileoffset = $("#HOME").offset().top;

$(window).scroll(function () {
  let scrolltop = $(window).scrollTop();

  if (scrolltop >= 200) {
    $(".navbar").css("backgroundColor", "black");
  } else {
    $(".navbar").css("backgroundColor", "transparent");
  }
});

// End scroll //
// start icon cart //
let users = document.getElementById("users");
let show_cart = document.getElementById("show_cart");
let closer = document.getElementById("close");
window.onload = function () {
  users.addEventListener("click", function () {
    show_cart.style.right = 0;
  });
  closer.addEventListener("click", function () {
    show_cart.style.right = "-564px";
  });
};
// start count//
let adds = document.getElementById("add");
let remove = document.getElementById("remove");
let number = document.getElementById("number");
let increment = 1;

adds.addEventListener("click", function () {
  increment += 1;
  number.innerHTML = increment;
});

remove.addEventListener("click", function () {
  increment -= 1;
  number.innerHTML = increment;
});
// end count//
// end icon cart //
// start section shop //
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
// change img proudact (1)//
c1.addEventListener("mouseover", function () {
  c1.src = "img/24.png";
});
c1.addEventListener("mouseleave", function () {
  c1.src = "img/33.png";
});
// reset img proudact (1)//
// change img proudact (2)//
c2.addEventListener("mouseover", function () {
  c2.src = "img/27.png";
});
c2.addEventListener("mouseleave", function () {
  c2.src = "img/31.png";
});
// reset img proudact (2)//
// change img proudact (3)//
c3.addEventListener("mouseover", function () {
  c3.src = "img/36.png";
});
c3.addEventListener("mouseleave", function () {
  c3.src = "img/29.png";
});

// reset img proudact (3)//
// change img proudact (4)//
c4.addEventListener("mouseover", function () {
  c4.src = "img/25.png";
});
c4.addEventListener("mouseleave", function () {
  c4.src = "img/28.png";
});
// reset img proudact (4)//
// end section shop //
