const menuContainer = document.querySelector('#menu-container');
const openMenuBtn = document.querySelector('#open-menu-button');
const closeMenuBtn = document.querySelector('#close-menu-button');

// A function to close the menu
function closeMenu() {
	menuContainer.classList.remove('show');
	// close the menu
	// Add the scroll back in for mobile and medium screens
	const body = document.querySelector('body');
	body.classList.remove('overflow-y-hidden', 'lg:overflow-y-auto');
}

// Open the menu container
openMenuBtn.addEventListener('click', function () {
	menuContainer.classList.add('show');

	// Remove the scroll from the body element for mobile and medium screens
	const body = document.querySelector('body');
	body.classList.add('overflow-y-hidden', 'lg:overflow-y-auto');
});

// Close the menu container
closeMenuBtn.addEventListener('click', function () {
	closeMenu();
});

// Close the menu container on outside click
// i.e. if the click does not container the div.menu. element
menuContainer.addEventListener('click', function (e) {
	if (e.target.classList.contains('menu-container')) {
		closeMenu();
	}
});

// Close the menu if any of the menu-items are clicked
const menuItems = document.querySelectorAll('.menu-list-item');
menuItems.forEach((item) => {
	item.addEventListener('click', function () {
		closeMenu();
	});
});
