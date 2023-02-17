'use strict'


/* https://harry-potter-api.onrender.com/db Trae toda la API
https://harry-potter-api.onrender.com/hechizos Trae solo los hechizos almacenados en la API
https://harry-potter-api.onrender.com/info Trae solo la parte de información de la API
https://harry-potter-api.onrender.com/libros Trae solo la información sobre libros en la API */

const url = "https://harry-potter-api.onrender.com/db";
const urlPerso="https://hp-api.onrender.com/api/characters";
var personajes=[];
let p=document.querySelector('#pers');


fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
	})
	.catch((e) => console.log(e))

function gryffindor(){

	var gryff=[];
	fetch(urlPerso).then(data=>data.json()).then(data=>{
	   
		gryff=data.filter(personaje=>personaje.house=="Gryffindor");

		console.log(gryff);	

		return gryff;
})
}

function ravenclaw(){

	var raven=[];
	fetch(urlPerso).then(data=>data.json()).then(data=>{
	   
		raven=data.filter(personaje=>personaje.house=="Ravenclaw");

		console.log(raven);	

		return raven;
})
}


function hufflepuff(){

	var huffle=[];
	fetch(urlPerso).then(data=>data.json()).then(data=>{
	   
		huffle=data.filter(personaje=>personaje.house=="Hufflepuff");

		console.log(huffle);
		
		return huffle;
})
}

function slytherin(){

	var sly=[];
	fetch(urlPerso).then(data=>data.json()).then(data=>{
	   
		sly=data.filter(personaje=>personaje.house=="Slytherin");

		console.log(sly);
		
		return sly;
})
}
		

 function cogerPersonajes(){
	fetch(urlPerso).then(function(data){
		return data.json();
	})
	.then(personaje=>{
		personajes=personaje;
       personajes.map(function(mago){

		let campo= document.createElement('h3');
		if(mago.name=="Harry Potter"){
			campo.innerHTML= mago.name;
			p.appendChild(campo);
		}else if(mago.name=="Hermione Granger"){
            campo.innerHTML= mago.name;
			p.appendChild(campo);
		}else if(mago.name=="Ron Weasley"){
            campo.innerHTML= mago.name;
			p.appendChild(campo);
		}else if(mago.name=="Draco Malfoy"){
            campo.innerHTML= mago.name;
			p.appendChild(campo);
		}
		


		let imagen=document.createElement('img');

		if(mago.name=="Harry Potter"){
			imagen.src=mago.image;
			p.appendChild(imagen);
		}else if(mago.name=="Hermione Granger"){
            imagen.src=mago.image;
			p.appendChild(imagen);
		}else if(mago.name=="Ron Weasley"){
            imagen.src=mago.image;
		    p.appendChild(imagen);
		}else if(mago.name=="Draco Malfoy"){
			imagen.src=mago.image;
			p.appendChild(imagen);
		}
		
	   })
	})
	}
cogerPersonajes();