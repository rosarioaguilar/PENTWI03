/*llamando a una funcion interna desde una externa*/
function funcionExterna( firstName, lastName){
	var nombre= "El resultado de la funcion es  "
	function funcionInterna(){
		return nombre + firstName + " - " + lastName;
	}
	return funcionInterna();
}

/*regresando una funcion para volverla a llamar con su parametro*/
function celebrity( firstName){
	var nombre= "El resultado de la funcion es celebrity es ";
	
	function funcionInterna(parametroInterno){
		return nombre + firstName + " * " + parametroInterno;
	}
	return funcionInterna;
}

var miResultadoCelebrity = celebrity('funcion Celebrity');


/*Usando get y set*/
function theLocation(){
	var city="Oaxaca";
	return{
		get: function(){console.log(city);},
		set: function(newCity){city=newCity}
	}
}

//FUNCIONES ANOMIMAS
/*function expresion*/
var sayHi = function(){
	alert('Hi');
}

/*in an object con property*/
var pony = {
	sayHello : function(){
		alert('hello');
	}
}


/*Ejemplo de recursividad*/
var factorial = function(n){
	return !(n>1)?1:arguments.callee(n-1)*n;
}

//function error(){
window.onerror=function(msg,url,line){
	alert('MSG:'+msg + 'URL:'+url + 'LINE:' +line );
}
//}