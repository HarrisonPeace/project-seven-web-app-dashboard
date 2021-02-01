// JavaScript Document

/* --------------------------------------------
				Navigation
-----------------------------------------------*/

let sideNavButton = document.getElementById('side-nav-button');
let dashboardNavigation = document.getElementById('dashboard-side-navigation');
let navScreenOverlay = document.getElementById('nav-screen-overlay');
let navButtons = dashboardNavigation.querySelectorAll('div');
let dashboardNavButton = document.querySelector('#dashboard-nav-button');

sideNavButton.addEventListener('click', () => {
	dashboardNavigation.style.display = 'block';
	dashboardNavigation.style.position = 'fixed';
	navScreenOverlay.style.display = 'block';
	navScreenOverlay.addEventListener('click', () => {
		dashboardNavigation.style.display = 'none';
		dashboardNavigation.style.position = 'fixed';
		navScreenOverlay.style.display = 'none';
	}, false);
}, false);

dashboardNavigation.addEventListener("mouseover", function(event) {
	let i;
	for (i = 0; i < navButtons.length; i++) {
		navButtons[i].className = "";
	}
	if (event.nodeName === 'DIV') {
		event.target.className = "nav-selected";
	} else {
		event.target.parentNode.className = "nav-selected";
	}
}, false);

dashboardNavigation.addEventListener("mouseleave", () => {
	setTimeout(() => {
		dashboardNavButton.className = "nav-selected";
	}, 200);
}, false);

/* --------------------------------------------
				Alert Box
-----------------------------------------------*/

let alertExitButton = document.querySelector('#alert-container img');
let alertContainer = document.getElementById('alert-container');

alertExitButton.addEventListener("click", () => {
	alertContainer.style.display = 'none';
}, false);

/* --------------------------------------------
		      Message User Form
-----------------------------------------------*/

let messageUserSendButton = document.querySelector('#message-user-send-button');
let userSearch = document.getElementById('user-search');
let userSearchTextArea = document.getElementById('user-search-textarea');

messageUserSendButton.addEventListener('click', function() {
	if (userSearch.value === '' && userSearchTextArea.value === '') {
		createAlertBox(`Please select a user and your write message before sending`);
	} else if (userSearch.value === '') {
		createAlertBox(`Please select a user before sending your message`);	   
	} else if (userSearchTextArea.value === '') {
		createAlertBox(`Please write your message before sending`);	   
	} else {
		createAlertBox(`Your message saying:<br><strong>"${userSearchTextArea.value}"</strong><br><br>has been sent to:<br><strong>${userSearch.value}</strong>`);
		userSearch.value = '';
		userSearchTextArea.value = '';
	}
});

/*Below code for submitting form without custom alert box (both text and user fields had 'required attribute' and button type set to submit)*/
/*let messageUsersForm = document.getElementById('message-users-form');*/
/*messageUsersForm.addEventListener('submit', function(e) {
	e.preventDefault();
	createAlertBox(`Your message saying:<br><strong>"${userSearchTextArea.value}"</strong><br><br>has been sent to:<br><strong>${userSearch.value}</strong>`);
	userSearch.value = '';
	userSearchTextArea.value = '';
});*/

/* --------------------------------------------
				Settings Form
-----------------------------------------------*/

let emailCheckbox = document.querySelector("#email-checkbox");
let profileCheckbox = document.querySelector("#profile-checkbox");
let profileCheckboxText = document.querySelector("#profile-checkbox-text");
let emailCheckboxText = document.querySelector("#email-checkbox-text");
let dashboardSettingsSave = document.querySelector("#dashboard-settings-save");
let dashboardSettingsCancel = document.querySelector("#dashboard-settings-cancel");
let timeZone = document.querySelector("#time-zone");

function updateEmailSettingSlider(trueStatement) {
	let settingsText = emailCheckboxText;
	if (trueStatement === true || trueStatement === "true") {
		settingsText.innerHTML = 'YES';
		settingsText.style.left = '10px';
	} else {
		settingsText.innerHTML = 'NO';
		settingsText.style.left = '45px';
	}
}

function updateProfileSettingSlider(trueStatement) {
	let settingsText = profileCheckboxText;
	if (trueStatement === true || trueStatement === "true") {
		settingsText.innerHTML = 'YES';
		settingsText.style.left = '10px';
	} else {
		settingsText.innerHTML = 'NO';
		settingsText.style.left = '45px';
	}
}

//Cancel Button
dashboardSettingsCancel.addEventListener('click', function(e) {
	e.preventDefault();
	revertToSavedSettings();

}, false);

function revertToSavedSettings() {
	emailCheckbox.removeEventListener('change', function() {
		updateEmailSettingSlider(emailCheckbox.checked);
	});
	profileCheckbox.removeEventListener('change', function() {
		updateProfileSettingSlider(profileCheckbox.checked);
	});
	updateProfileSettingSlider(localStorage.savedProfileSetting);
	updateEmailSettingSlider(localStorage.savedEmailSetting);
	if (localStorage.savedEmailSetting !== emailCheckbox.checked.toString()) {
		emailCheckbox.click();
	}
	if (localStorage.savedProfileSetting !== profileCheckbox.checked.toString()) {
		profileCheckbox.click();
	}
	timeZone.value = localStorage.savedTimeZone;
	emailCheckbox.addEventListener('change', function() {
		updateEmailSettingSlider(emailCheckbox.checked);
	});
	profileCheckbox.addEventListener('change', function() {
		updateProfileSettingSlider(profileCheckbox.checked);
	});
}

//Save Button
dashboardSettingsSave.addEventListener('click', function(e) {
	e.preventDefault();
	localStorage.setItem("savedEmailSetting", emailCheckbox.checked);
	localStorage.setItem("savedProfileSetting", profileCheckbox.checked);
	localStorage.setItem("savedTimeZone", timeZone.value);
}, false);

//Local storage inital values
window.onload = function() {
	if (localStorage.getItem("hasCodeRunBefore") === null) {
		localStorage.setItem("savedEmailSetting", emailCheckbox.checked);
		localStorage.setItem("savedProfileSetting", profileCheckbox.checked);
		localStorage.setItem("savedTimeZone", timeZone.value);
		localStorage.setItem("hasCodeRunBefore", true);
	}
};

window.addEventListener("load", () => {
	revertToSavedSettings();
});

emailCheckbox.addEventListener('change', function() {
	updateEmailSettingSlider(emailCheckbox.checked);
});

profileCheckbox.addEventListener('change', function() {
	updateProfileSettingSlider(profileCheckbox.checked);
});

/* --------------------------------------------
				Notifactions
-----------------------------------------------*/

let notificationIcon = document.querySelector('#notification-icon');
let notificationAlert = document.querySelector('#notification-alert');
let notificationContainer = document.querySelector('#notification-container');
let notificationExitButtons = notificationContainer.querySelectorAll('img');

notificationIcon.addEventListener('click', () => {
	notificationIcon.style.animationIterationCount = 0;
	if (notificationContainer.style.display == "none") {
		notificationContainer.style.display = "block";
	} else {
		notificationContainer.style.display = "none";
	}
}, false);

let i;
for (i = 0; i < notificationExitButtons.length; i++) {
	notificationExitButtons[i].addEventListener('click', (e) => {
		e.target.parentElement.style.display = "none";
		if (notificationExitButtons[0].parentElement.style.display == "none" && notificationExitButtons[1].parentElement.style.display == "none" && notificationExitButtons[2].parentElement.style.display == "none") {
			notificationAlert.style.display = "none";
		}
	}, false);
}

/* --------------------------------------------
				Alert Box
-----------------------------------------------*/

let mainContainer = document.querySelector('main');

function createAlertBox (text) {
	const newDiv = document.createElement("div");
	newDiv.innerHTML = `<h3>${text}</h3><img src="icons/icon-x.png" alt="exit-alert-icon" id="exit-alert">`;
	newDiv.id = 'alert-box';
	document.body.insertBefore(newDiv, mainContainer);
	navScreenOverlay.style.display = 'block';
	let alertBox = document.querySelector('#alert-box');
	let exitAlert = document.querySelector('#exit-alert');
	navScreenOverlay.removeEventListener('click', () => {
		dashboardNavigation.style.display = 'none';
		dashboardNavigation.style.position = 'fixed';
		navScreenOverlay.style.display = 'none';
	}, false);
	exitAlert.addEventListener('click', () => {
		alertBox.remove();
		navScreenOverlay.style.display = 'none';
	}, false);
	exitAlert.removeEventListener('change', function() {
		alertBox.remove();
		navScreenOverlay.style.display = 'none';
	});
}