// ********* Handle Navigation Start
const menuContainer = document.querySelector('#menu-container');
const openMenuBtn = document.querySelector('#open-menu-button');
const closeMenuBtn = document.querySelector('#close-menu-button');

// A function to close the menu
function closeMenu() {
	menuContainer.classList.remove('show');
	// close the menu
	// Add the scroll back in for mobile and medium screens
	const body = document.querySelector('body');
	body.classList.remove('hide-scrollbar');
}

// Open the menu container
if (openMenuBtn) {
	openMenuBtn.addEventListener('click', function () {
		menuContainer.classList.add('show');

		// Remove the scroll from the body element for mobile and medium screens
		const body = document.querySelector('body');
		body.classList.add('hide-scrollbar');
	});
}

// Close the menu container
if (closeMenuBtn) {
	closeMenuBtn.addEventListener('click', function () {
		closeMenu();
	});
}

// Close the menu container on outside click
// i.e. if the click does not container the div.menu. element
if (menuContainer) {
	menuContainer.addEventListener('click', function (e) {
		if (e.target.classList.contains('menu-container')) {
			closeMenu();
		}
	});
}

// Close the menu if any of the menu-items are clicked
const menuItems = document.querySelectorAll('.menu-list-item');
if (menuItems.length > 0) {
	menuItems.forEach((item) => {
		item.addEventListener('click', function () {
			closeMenu();
		});
	});
}

// ************ Handle Navigation Stop

// *********** Handle Frequently Asked Questions Start

const faqs = document.querySelectorAll('.faq');
const faqHeaders = document.querySelectorAll('.faq-header');

// Add an onclick event listener that gets the data-id
// attribute from an element
if (faqs.length > 0 && faqHeaders.length > 0) {
	faqHeaders.forEach((header) => {
		header.addEventListener('click', function () {
			const id = +this.getAttribute('data-id');
			if (isNaN(id)) return;

			// Loop through the questions and find the question that
			// owns the id

			let question = null;
			faqs.forEach(function (item) {
				const questionId = +item.getAttribute('data-id');

				// If a question has already been found, return;
				if (question) return;
				if (isNaN(questionId)) return;
				if (questionId !== id) return;

				question = item;
			});

			if (!question) return;

			question.classList.toggle('show');
			question = null;

			// Close any other question that might be opened
			faqs.forEach((faq) => {
				const questionId = +faq.getAttribute('data-id');
				if (isNaN(questionId)) return;

				if (questionId !== id && faq.classList.contains('show')) {
					faq.classList.remove('show');
				}
			});
		});
	});
}

// *********** Handle Frequently Asked Questions Stop

// *********** Handle Troubleshooting Guides Start

const troubleshootingGuides = document.querySelectorAll('.troubleshooting-guide');
const troubleshootingGuideHeaders = document.querySelectorAll('.troubleshooting-guide-header');

// Add an onclick event listener that gets the data-id
// attribute from an element
if (troubleshootingGuideHeaders.length > 0 && troubleshootingGuides.length > 0) {
	troubleshootingGuideHeaders.forEach((guide) => {
		guide.addEventListener('click', function () {
			const id = +this.getAttribute('data-id');
			if (isNaN(id)) return;

			// Loop through the guides and find the guide that
			// owns the id

			let guide = null;
			troubleshootingGuides.forEach(function (item) {
				const guideId = +item.getAttribute('data-id');

				// If a question has already been found, return;
				if (guide) return;
				if (isNaN(guideId)) return;
				if (guideId !== id) return;

				guide = item;
			});

			if (!guide) return;

			guide.classList.toggle('show');
			guide = null;
		});
	});
}

// *********** Handle Troubleshooting Guides Stop

// ********** Handle Review Modal Start

const reviewForm = document.querySelector('#review-form-wrapper');

if (reviewForm) {
	const reviewClose = document.querySelector('#review-close-icon');
	const reviewOpen = document.querySelector('#review-open-button');

	if (reviewClose)
		reviewClose.addEventListener('click', function () {
			reviewForm.classList.remove('show');
		});

	if (reviewOpen)
		reviewOpen.addEventListener('click', function () {
			reviewForm.classList.add('show');
		});
}

// ********** Handle Review Modal Stop
