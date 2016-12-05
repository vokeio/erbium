export var sStyle = `
.e-gallery, .e-gallery div, .e-gallery img, .e-gallery a {
	transition: all 300ms ease;
}
.e-gallery img {
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;

	cursor: pointer;
	display: inline-block;
}
.e-gallery .e-viewer {
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-flex;
	display: flex;

	flex-wrap: nowrap;
	-moz-flex-wrap: nowrap;
	-webkit-flex-wrap: nowrap;

	flex-direction: row;
	-moz-flex-direction: row;
	-webkit-flex-direction: row;

	-webkit-align-self: center;
	align-self: center;

	align-content: space-around;
	-webkit-align-content: space-around;

	justify-content: space-around;
	-moz-justify-content: space-around;
	-webkit-justify-content: space-around;

	top: 0;
	left: 0;
	opacity: 0;
	width: 100vw;
	height: 100vh;
	position: fixed;
	background: rgba(0,0,0,0.6);
	transform: translate3d(100%,0,0);
}
.e-gallery .e-viewer .e-container {
	-webkit-box-flex: 1 1 auto;
	-moz-box-flex: 1 1 auto;
	-webkit-flex: 1 1 auto;
	-moz-flex: 1 1 auto;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;

	align-self: center;
	-webkit-align-self: center;

	max-width: 85vw;
	max-height: 90vh;
	background: #000;
	overflow: hidden;
	white-space: nowrap;
	text-align: center;
}
.e-gallery .e-viewer .e-container > img {
	margin: 0;
	padding: 0;
	width: 100%;
	border: none;
	box-shadow: none;
	pointer-events: none;
}
.e-gallery .e-close, .e-gallery .e-arrow-left-wrap, .e-gallery .e-arrow-right-wrap {
	cursor: pointer;
	background: rgba(0,0,0,0.1);
}
.e-gallery .e-close:hover, .e-gallery .e-arrow-left-wrap:hover, .e-gallery .e-arrow-right-wrap:hover {
    background: rgba(0, 0, 0, 0.3);
}
.e-gallery .e-close {
	top: 1%;
	right: 1%;
    width: 55px;
    height: 55px;
	position: absolute;
}
.e-gallery .e-close:after {
    content: '';
	top: 7.5px;
	left: 25.5px;
	height: 40px;
    position: absolute;
    transform: rotate(45deg);
    border-left: 5px solid currentColor;
}
.e-gallery .e-close:before {
    content: '';
	top: 7.5px;
	left: 25.5px;
	height: 40px;
    position: absolute;
    transform: rotate(-45deg);
    border-left: 5px solid currentColor;
}
.e-gallery .e-arrow-left, .e-gallery .e-arrow-right {
	width: 0;
	margin: auto;
	cursor: pointer;
	border-top: 15px solid transparent;
	border-bottom: 15px solid transparent;
}
.e-gallery .e-arrow-left {
	border-right: 15px solid currentColor;
}
.e-gallery .e-arrow-right {
	border-left: 15px solid currentColor;
}
.e-gallery .e-arrow-left-wrap, .e-gallery .e-arrow-right-wrap {
	padding: 15px 20px;
}
.e-gallery .e-arrow-left-wrap {
	align-self: center;
}
.e-gallery .e-arrow-right-wrap {
	align-self: center;
}
.e-gallery.active .e-viewer {
	opacity: 1;
	z-index: 1000;
	transform: translate3d(0,0,0);
}
`;
