/*OBJETOS*/

var myGrades={};

var algebra = {
		level:"feshman",
		difficulty:"hard",
		expectedGrade:98,
textbook:function(){
	console.log("dentro de la variable algebra");
}
}

var algebraDot = new Object;
algebraDot.level="feshman";
algebraDot.textbook = function(){
	console.log("dentro de la variable algebraDot en la propiedad textbook");
algebraDot["nuevaproperty"]= function(){
	console.log("dentro de la variable algebraDot en la propiedad nuevaproperty");
}
}

var idk = algebraDot["nuevaproperty"];

//contructors
function Fruit(name, color){
	console.log("objeto creado por constructor");
	this.type=function(){
		console.log("soy de tipo fruta");
	}
	this.name=name;
	this.color=color;
}



function vegetable(){
	this.type="vegetales";
}

vegetable.prototype.print = function (){
	console.log(this.type + " son buenos"); 
}

vegetable.prototype.color = "colores bonitos";

var carrot = new vegetable();


//Prototype
var Person=function(firstname){
	this.firstname = firstname;
}
	
Person.prototype.sayHello = function(){
	console.log('hi, im ' + this.firstname);
}

function Student(firstName, subject){
	Person.call(this, firstName);
	this.subject=subject;
}

Student.prototype = Object.create(Person.prototype);
//Porque es necesaria esta linea???
Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
	console.log('hi, im ' + this.firstname + ". Im studing " + this.subject);
}


var seafood = {
		small:"shrimp",
		big: "shark"
};

