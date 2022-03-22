// Side Bar
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
    interval: 3000
});

// Parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

// Material Boxed
const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

// Scroll
const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll, {
    scrollOffset: 60
});

// Dropdown
const dropdown = document.querySelectorAll(".dropdown-trigger");
M.Dropdown.init(dropdown);