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

	function closeReviewForm() {
		reviewForm.classList.remove('show');
	}

	if (reviewClose)
		reviewClose.addEventListener('click', function () {
			closeReviewForm();
		});

	if (reviewOpen)
		reviewOpen.addEventListener('click', function () {
			reviewForm.classList.add('show');
		});

	// Close the review form wrapper on outside click
	reviewForm.addEventListener('click', function (e) {
		if (e.target.classList.contains('review-form-wrapper')) {
			closeReviewForm();
		}
	});
}

// ********** Handle Review Modal Stop

// ********* Handle Reseller Dropdown Start
const resellerSwitch = document.querySelector('#reseller-category-switch');

if (resellerSwitch) {
	resellerSwitch.addEventListener('click', function () {
		const resellerSelect = document.querySelector('#reseller-category-container');

		if (resellerSelect) resellerSelect.classList.toggle('show');
	});
}

// ********* Handle Reseller Dropdown Stop

// ********* Handle Common Modal Wrapper Start

// Get all modal content wrapper buttons i.e. buttons responsible for opening/closing a modal content wrapper
// buttons should have a class of modal-content-wrapper-button
// and should also have the modal-content-wrapper ID that it toggles on/off
// e.g. <button class="modal-content-wrapper-button" data-modal-content-wrapper-id="1"></button>
const modalContentButtons = document.querySelectorAll('.modal-content-button');

// Get all the modal content wrappers. Note: Each should have a unique identifier and a class of modal-content-wrapper e.g.
// <div data-modal-content-wrapper-id="1" class="modal-content-wrapper"></div>
const modalContentWrappers = document.querySelectorAll('.modal-content-wrapper');

const tag = 'data-modal-content-wrapper-id';

modalContentButtons.forEach((button) => {
	const buttonId = button.getAttribute(tag);

	// Get the id of the modal content wrapper that the button controllers
	let modalContentWrapper = null;
	modalContentWrappers.forEach((wrapper) => {
		if (modalContentWrapper !== null) return;

		const wrapperId = wrapper.getAttribute(tag);
		if (wrapperId === buttonId) modalContentWrapper = wrapper;
	});

	// If the modal content wrapper is found, add event listeners
	if (modalContentWrapper) {
		button.addEventListener('click', function () {
			if (modalContentWrapper.classList.contains('show')) {
				modalContentWrapper.classList.remove('show');
				// show the overflow on the body
				document.querySelector('body').classList.remove('hide-scrollbar-lg');
			} else {
				modalContentWrapper.classList.add('show');
				// Hide the overflow on the body
				document.querySelector('body').classList.add('hide-scrollbar-lg');
			}
		});
	}
});

// ********* Handle Common Modal Wrapper Stop
