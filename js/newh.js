$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
		responsive: {
			// breakpoint from 0 up
			loop: true,
			0: {
				items: 2,
				margin: 32,
				loop: true,
				dots: false,
			},
			// breakpoint from 480 up
			601: {
				items: 3,
				margin: 32,
				loop: true,
				dots: false,
			},
			// breakpoint from 768 up
			1001: {
				items: 3,
				margin: 48,
				dots: false,
				loop: true,
			},
		},
	});
});

/* Mobile Nav */
const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function () {
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll');
}

closeNavbtn.onclick = function () {
	mobileNav.classList.add('none');
	document.body.classList.remove('no-scroll');
};

// навигация
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#569DBD";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}