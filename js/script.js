// Side Bar
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  interval: 3000,
});

// Parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

// Material Boxed
const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

// Scroll
// const scroll = document.querySelectorAll(".scrollspy");
// M.ScrollSpy.init(scroll, {
//   scrollOffset: 60,
// });

// Dropdown
const dropdown = document.querySelectorAll(".dropdown-trigger");
M.Dropdown.init(dropdown);

// event pada saat link diklik
$(".page-scroll").on("click", function (e) {
    // ambil isi href
    let tujuan = $(this).attr("href");
  
    // tangkap elemen ybs
    let elTujuan = $(tujuan);
  
    // pindahkan scroll
    // $("body").scrollTop($elTujuan.offset().top);
    $("html, body").animate(
      {
        scrollTop: elTujuan.offset().top - 50,
      },
      1250,
      "easeInOutExpo"
    ); // default: "swing "atau "linear"
  
    e.preventDefault();
  });

$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    //about
    if (wScroll > $(".about").offset().top - 400) {
        $(".about .container .row .yt").each(function (i) {
            setTimeout(function () {
                $(".about .container .row .yt").eq(i).addClass("muncul");
            }, 500 * (i + 1));
        });
    }

    //client
    if (wScroll > $(".clients").offset().top - 400) {
        $(".clients .row .thumb").each(function (i) {
            setTimeout(function () {
                $(".clients .row .thumb").eq(i).addClass("muncul");
            }, 500 * (i + 1));
        });
    }

    //service
    if (wScroll > $(".services").offset().top - 400) {
        $(".services .container .row .thumb").each(function (i) {
            setTimeout(function () {
                $(".services .container .row .thumb").eq(i).addClass("muncul");
            }, 500 * (i + 1));
        });
    }

    //contact
    if (wScroll > $(".contact").offset().top - 400) {
        $(".contact .container .row .thumbnail").each(function (i) {
            setTimeout(function () {
                $(".contact .container .row .thumbnail").eq(i).addClass("muncul");
            }, 500 * (i + 1));
        });
    }

});
