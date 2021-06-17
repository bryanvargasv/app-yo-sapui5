/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"belerofonte/app-yo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
