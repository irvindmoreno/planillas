"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = (function () {
	function Table() {
		_classCallCheck(this, Table);

		this.desplegarEditTable = false;
		$(".Tabla-CokachoBuscador").on("keyup", this.buscar);
		$(".Tabla-BotonEditar").on("click", this.editar);
		// botones de guardar y cancelar
		$(".Tabla-Cancelar").on("click", this.cerrarVentanaEditar);
		$(".Tabla-BotonEliminar").on("click", this.confirmarEliminacion);
		$(".draggable").draggable();
		//alert("inicia: "+this.desplegarEditTable)	     	  		  		
	}

	_createClass(Table, [{
		key: "confirmarEliminacion",
		value: function confirmarEliminacion() {
			swal({
				title: "¿Esta seguro que desea eliminar?",
				text: "No podrá recuperar este dato una vez eliminado!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Si, eliminar esto",
				cancelButtonText: "No, no deso eliminar!",
				closeOnConfirm: false,
				closeOnCancel: false
			}, function (isConfirm) {
				if (isConfirm) {
					swal("Eliminado!", "El trabajador a sido eliminado con éxito.", "success");
				} else {
					swal("Cancelado", "No ah eliminiado al trabajador :)", "error");
				}
			});
		}
	}, {
		key: "cerrarVentanaEditar",
		value: function cerrarVentanaEditar() {
			this.desplegarEditTable = false;
			$(".Tabla-EditDesplegable").css("display", "none");
		}
	}, {
		key: "editar",
		value: function editar() {
			var botonEditar = $(this);
			var tr = $(this).parents("tr");
			var td = $(this).parents("tr").children("td");
			//pitaremos los tr
			$(".Tabla-Cokacho1 tr").removeClass("Tr-Editable");
			tr.addClass("Tr-Editable");
			// haremos a los td editables
			$(".Tabla-Cokacho1 tr td").attr("contenteditable", false);
			td.attr("contenteditable", true);
			this.desplegarEditTable = false;
			this.desplegarEditTable = !this.desplegarEditTable;
			//alert(this.desplegarEditTable);
			if (this.desplegarEditTable) {
				var position = botonEditar.position();
				console.log("top: " + position.top);
				console.log("top-20: " + (position.top + 20));
				var top = position.top - 350;
				var left = position.left - 375;
				$(".Tabla-EditDesplegable").css("display", "block");
				$(".Tabla-EditDesplegable").css("top", top);
				$(".Tabla-EditDesplegable").css("left", left);
			} else {
				$(".Tabla-EditDesplegable").css("display", "none");
			}
		}
	}, {
		key: "buscar",
		value: function buscar() {
			var texto = $(this).val();
			var tr = $(".elementoABuscar");
			texto = texto.toLowerCase();
			tr.show();
			for (var i = 0; i < tr.size(); i++) {
				var contenido = tr.eq(i).text();
				contenido = contenido.toLowerCase();
				var index = contenido.indexOf(texto);
				if (index == -1) {
					tr.eq(i).hide();
				}
			}
		}
	}]);

	return Table;
})();