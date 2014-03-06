$(document).on("ready",inicio);

function inicio(){
	$("#contenidoMaterias").on('blur','td',function(){
		localStorage.setItem("nombre-materia",$("#contenidoMaterias").html());
	});

	$("#contenidoMaterias").on('dblclick','td',function(){
		if( $(this).hasClass("realizado") ){
			if(confirm("Quitar seleccion ")){
				$(this).removeClass("realizado");
			}
		}else{

			$(this).addClass("realizado");
		}
	});

	$("#contenidoMaterias").on('click','.eliminar',function(e){
		var mensaje = confirm("Realmente desea eliminarlo!");
		if( mensaje === true){
			$(this).parent().parent().remove();
			localStorage.setItem("nombre-materia",$(this).parent().parent().html());
		}
	});

	$("#mas").on("click",function(){
		$("#contenidoMaterias").append('<tr id="materias" ><td ><div id="nombre-materia" contenteditable="true"></div></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td  contenteditable="true"></td><td><div class="eliminar icon-x-altx-alt"></div></td></tr>');
	});

	if(localStorage.getItem("nombre-materia") ){
		$("#contenidoMaterias").html(localStorage.getItem('nombre-materia'));

	}


}
