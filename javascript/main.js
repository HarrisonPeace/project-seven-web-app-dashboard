// JavaScript Document

/* --------------------------------------------
				Navigation
-----------------------------------------------*/

let sideNavButton = document.getElementById('side-nav-button');
let dashboardNavigation = document.getElementById('dashboard-side-navigation');
let navScreenOverlay = document.getElementById('nav-screen-overlay');
let navButtons = dashboardNavigation.querySelectorAll('div')
let dashboardNavButton = document.querySelector('#dashboard-nav-button')

sideNavButton.addEventListener('click', () => {
	dashboardNavigation.style.display = 'block';
	dashboardNavigation.style.position = 'fixed'
	navScreenOverlay.style.display = 'block';}, false);

navScreenOverlay.addEventListener('click', () => {
	dashboardNavigation.style.display = 'none';
	dashboardNavigation.style.position = 'fixed'
	navScreenOverlay.style.display = 'none';}, false);

dashboardNavigation.addEventListener("mouseover", function( event ) {
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
	setTimeout( () => {dashboardNavButton.className = "nav-selected"}, 200);
}, false);

/* --------------------------------------------
				Alert
-----------------------------------------------*/

let alertExitButton = document.querySelector('#alert-container img')
let alertContainer = document.getElementById('alert-container');

alertExitButton.addEventListener("click", () => {alertContainer.style.display = 'none'}, false);

/* --------------------------------------------
				Message User Form
-----------------------------------------------*/

let messageUsersForm = document.getElementById('message-users-form');
let userSearch = document.getElementById('user-search');
let userSearchTextArea = document.getElementById('user-search-textarea');

messageUsersForm.addEventListener('submit', function (e) {
    e.preventDefault();
	alert(`Your message saying "${userSearchTextArea.value}" has been sent to ${userSearch.value}`);
	userSearch.value = '';
	userSearchTextArea.value = '';
});

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
let timeZoneOptions = timeZone.querySelectorAll("option")
let savedDashboardSettings = {
	"savedEmailSetting": emailCheckbox.checked,
	"savedProfileSetting": profileCheckbox.checked,
	"savedTimeZone": timeZone.value
}

function updateEmailSettingSlider (trueStatement) {
	let settingsText = emailCheckboxText;
	if (trueStatement == true || trueStatement == "true") {
		settingsText.innerHTML = 'YES'
		settingsText.style.left = '10px';
  } else {
		settingsText.innerHTML = 'NO'
		settingsText.style.left = '45px';
  }
}

function updateProfileSettingSlider (trueStatement) {
	let settingsText = profileCheckboxText;
	if (trueStatement == true || trueStatement == "true") {
		settingsText.innerHTML = 'YES'
		settingsText.style.left = '10px';
	} else {
		settingsText.innerHTML = 'NO'
		settingsText.style.left = '45px';
	}
}

//Cancel Button

dashboardSettingsCancel.addEventListener('click', function (e) {
	e.preventDefault();
	revertToSavedSettings();
	
}, false);

function revertToSavedSettings () {
	emailCheckbox.removeEventListener('change', function() {
	updateEmailSettingSlider(emailCheckbox.checked)
	});
	profileCheckbox.removeEventListener('change', function() {
	updateProfileSettingSlider(profileCheckbox.checked)
	});
	updateProfileSettingSlider(localStorage.savedProfileSetting)
	updateEmailSettingSlider(localStorage.savedEmailSetting)
	if (localStorage.savedEmailSetting !== emailCheckbox.checked.toString()) {
		emailCheckbox.click();
	}
	if (localStorage.savedProfileSetting !== profileCheckbox.checked.toString()) {
		profileCheckbox.click();
	}
	timeZone.value = localStorage.savedTimeZone
	emailCheckbox.addEventListener('change', function() {
	updateEmailSettingSlider(emailCheckbox.checked)
	});
	profileCheckbox.addEventListener('change', function() {
	updateProfileSettingSlider(profileCheckbox.checked)
	});
}

//Save Button

dashboardSettingsSave.addEventListener('click', function (e) {
	e.preventDefault();
	localStorage.setItem("savedEmailSetting", emailCheckbox.checked);
	localStorage.setItem("savedProfileSetting", profileCheckbox.checked);
	localStorage.setItem("savedTimeZone", timeZone.value);
}, false);


//Checkbox ON/OFF

window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        localStorage.setItem("savedEmailSetting", emailCheckbox.checked);
		localStorage.setItem("savedProfileSetting", profileCheckbox.checked);
		localStorage.setItem("savedTimeZone", timeZone.value);
		localStorage.setItem("hasCodeRunBefore", true);
    }
}

window.addEventListener("load", () => {
	revertToSavedSettings();
});

emailCheckbox.addEventListener('change', function() {
	updateEmailSettingSlider(emailCheckbox.checked)
});

profileCheckbox.addEventListener('change', function() {
	updateProfileSettingSlider(profileCheckbox.checked)
});

//Local Storage






