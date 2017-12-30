
self.onmessage = function(e){
	var mensaje=e.data;
	if(mensaje.status==="START"){
		self.postMessage(" Started!!!");
	}else{
		var mesajeObject = mensaje.propiedad;
		self.postMessage(mesajeObject + ' procesando!!!');
	}
}
