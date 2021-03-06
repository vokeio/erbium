(function() {
	'use strict';

	var sStyle = `
	.collapsible * {
		transition: all 300ms ease;
		-o-transition: all 300ms ease;
		-ms-transition: all 300ms ease;
		-moz-transition: all 300ms ease;
		-webkit-transition: all 300ms ease;
	}
	.collapsible {
		border-radius: 3px;
		border: solid 1px rgba(0,0,0,0.1);
	}
	.collapsible-click {
		padding: 8px;
		cursor: pointer;
		font-size: 18px;
		font-weight: bold;
		vertical-align: middle;
		background: rgba(0,0,0,0.1);
	}
	.collapsible-click:hover {
		background: rgba(0,0,0,0.2);
	}
	.collapsible-content p {
		overflow: hidden;
	}
	/* content */
	.collapsible-content {
		max-height: 0;
		padding: 0 1em;
		overflow: hidden;
	}
	.collapsible.active .collapsible-content {
		padding: 1em 1em;
		max-height: 10000em;
	}
	/* first p */
	.collapsible-content p:nth-child(1) {
		max-height: 1em;
	}
	.collapsible.active p:nth-child(1) {
		max-height: 10000em;
	}
	/* plus minus icon */
	.collapsible .plus-minus {
		float: right;
		width: 1em;
		height: 1em;
		cursor: pointer;
		position: relative;
		display: inline-block;
		vertical-align: middle;
	}
	.collapsible .plus-minus:before {
		top: 0;
		left: 50%;
		width: 0.125em;
		height: 100%;
		margin-left: -0.05125em;
	}
	.collapsible .plus-minus:after {
		top: 50%;
		left: 0;
		width: 100%;
		height: 0.125em;
		margin-top: -0.05125em;
	}
	.collapsible .plus-minus:before, .collapsible .plus-minus:after {
		content: "";
		background: currentColor;
		position: absolute;
		transition: transform 300ms ease;
	}
	.collapsible.active .plus-minus:before {
		transform: rotate(90deg);
	}
	.collapsible.active .plus-minus:after {
		transform: rotate(180deg);
	}
	`;

	var eStyle = document.createElement('style');
	var nStyle = document.createTextNode(sStyle);
	eStyle.appendChild(nStyle);
	document.head.appendChild(eStyle);

	/*
		main
	*/

	document.addEventListener('DOMContentLoaded', function () {
		var collapsibles = document.querySelectorAll('.collapsible');
		var plusMinus = document.createElement('span');

		plusMinus.classList.add('plus-minus');

		for (var i = 0, l = collapsibles.length; i < l; i++) {
			var collapsibleClick = collapsibles[i].children[0];

			collapsibleClick.appendChild(plusMinus.cloneNode());

			collapsibleClick.addEventListener('click', function (e) {
				e.target.parentElement.classList.toggle('active');
			});
		}
	});

}());
