(function()
{
	var app=angular.module('planillas',[]);
	app.controller('InicioController',inicio);
})();
function inicio()
{
	this.apellidos="Moreno"
	this.nombre="Daniel";
	this.numero=[
         {nombre: "Pestaña1"},
         {nombre: "Pestaña2"},
         {nombre: "Pestaña3"},
         {nombre: "Pestaña4"},
         {nombre: "Pestaña5"},
         {nombre: "Pestaña6"}
        ];
}