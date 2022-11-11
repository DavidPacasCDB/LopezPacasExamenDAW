
var colores = new Array("black","brown","red","orange","yellow","green","blue","grey","white");

var contador = 1;

$("#banda1").on("click",function(){
	contador=contador+1;
	$(this).css("background-color",colores[contador])
});
