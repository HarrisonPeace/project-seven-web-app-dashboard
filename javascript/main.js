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
				Message User
-----------------------------------------------*/

//let messageUsersForm = document.getElementById('message-users-form');
//let userSearch = document.getElementById('user-search');
//let UserSearchTextArea = document.getElementById('user-search-textarea');
//let MessageUserSendButton = document.getElementById('message-user-send-button');
//let userSearchCONTENT = UserSearchTextArea.textContent
//
//MessageUserSendButton.addEventListener("click", () => {
//		alert(userSearchCONTENT);
//	}, false);
