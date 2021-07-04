sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (JSONModel, Controller, MessageToast) {
		"use strict";

		return Controller.extend("belerofonte.appyo.controller.App", {
			onInit: function () {
				var oEmpData = 
			{
	       emp: [{
			empid: "111111",
			empname: "John Walter"
		},
		{
			empid: "222222",
			empname: "Rashid Khan"
		},
		{
			empid: "333333",
			empname: "Supriya Singh"
		},
		{
			empid: "888888",
			empname: "Gisele de Vargas"
		}
	]
};
				
				
				var oModel = new JSONModel();
				oModel.setData(oEmpData);
				
				this.getView().setModel(oModel, "caca");

			},
			onShowHello : function () {
				MessageToast.show("Hello World");
			 }
		});
	});
