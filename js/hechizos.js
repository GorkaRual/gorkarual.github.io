'use strict'

const url = "https://harry-potter-api.onrender.com/db";
const urlPerso="https://hp-api.onrender.com/api/spells";
var personajes=[];
let p=document.querySelector('#pers');
let wizzard= document.querySelector("#wizz");
var table=document.querySelector('#datos');
var nombre=document.querySelector("#nombre");
var descripcion=document.querySelector("#descripcion");

var boton=document.querySelector('#boton');
boton.addEventListener('click',function() {
    window.location.href = "hechizos.html";
})
		

 function cogerPersonajes(){
	fetch(urlPerso).then(function(data){
		return data.json();
	})
	.then(personaje=>{
		personajes=personaje;
       personajes.map(function(mago){

		let campo= document.createElement('h3');
		if(mago.name!=""){
			campo.innerHTML= mago.name;
			campo.style.color="#95389E";
			p.appendChild(campo);
            
        }
		let imagen=document.createElement('h3')
		if(mago.name!=""){
			imagen.innerHTML= mago.description;
			p.appendChild(imagen);

		}
		})
	   })
       
	}
    
    cogerPersonajes();