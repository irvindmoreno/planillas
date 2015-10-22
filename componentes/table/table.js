class Table{
	constructor ()
	{
		this.desplegarEditTable=false;
		$(".Tabla-CokachoBuscador").on("keyup", this.buscar);
		$(".Tabla-BotonEditar").on("click",this.editar);
		// botones de guardar y cancelar
			$(".Tabla-Cancelar").on("click",this.cerrarVentanaEditar)
			$(".Tabla-BotonEliminar").on("click",this.confirmarEliminacion)
		$(".draggable").draggable();
		//alert("inicia: "+this.desplegarEditTable)	     	  		  		
  	} 
  	confirmarEliminacion()
  	{ 
  		swal(
			{   
				title: "¿Esta seguro que desea eliminar?",   
				text: "No podrá recuperar este dato una vez eliminado!",   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",   
				confirmButtonText: "Si, eliminar esto",   
				cancelButtonText: "No, no deso eliminar!",   
				closeOnConfirm: false,   
				closeOnCancel: false 
			}, 
			function(isConfirm)
			{   
				if (isConfirm) 
				{     
					swal("Eliminado!", "El trabajador a sido eliminado con éxito.", "success");   
				} 
				else 
				{     
					swal("Cancelado", "No ah eliminiado al trabajador :)", "error");   
				} 
			}
		);
  	}
  	cerrarVentanaEditar()
	{
		this.desplegarEditTable=false;		
		$(".Tabla-EditDesplegable").css("display","none");
				
	}
	editar()
	{
		var botonEditar=$(this);
		var tr=$(this).parents("tr");
		var td=$(this).parents("tr").children("td");
		//pitaremos los tr
		$(".Tabla-Cokacho1 tr").removeClass("Tr-Editable")
		tr.addClass("Tr-Editable")
		// haremos a los td editables
		$(".Tabla-Cokacho1 tr td").attr("contenteditable",false);
		td.attr("contenteditable",true);
		this.desplegarEditTable=false;
		this.desplegarEditTable=!this.desplegarEditTable;
		//alert(this.desplegarEditTable);
		if(this.desplegarEditTable)
		{
			var position = botonEditar.position();
			console.log("top: "+position.top);
			console.log("top-20: "+(position.top+20));
			var top=(position.top-350)
			var left=(position.left-375)
			$(".Tabla-EditDesplegable").css("display","block");		
			$(".Tabla-EditDesplegable").css("top",top);
			$(".Tabla-EditDesplegable").css("left",left);
		}
		else
		{		
			$(".Tabla-EditDesplegable").css("display","none");
		}
	}
	buscar()
	{	
		var texto=$(this).val();
		var tr =$(".elementoABuscar");
		texto=texto.toLowerCase();
		tr.show();
		for(var i=0;i<tr.size();i++)
		{
			var contenido=tr.eq(i).text()
			contenido = contenido.toLowerCase();
			var index =contenido.indexOf(texto);
			if(index==-1)
			{
				tr.eq(i).hide();
			}
		}
	}

}
