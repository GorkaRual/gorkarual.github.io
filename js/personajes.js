'use strict'

const url = "https://harry-potter-api.onrender.com/db";
const urlPerso="https://hp-api.onrender.com/api/characters";
var personajes=[];
let p=document.querySelector('#pers');
let wizzard= document.querySelector("#wizz");
var table=document.querySelector('#datos');
var nombre=document.querySelector("#nombre");
var genero=document.querySelector("#genero");
var nacimiento=document.querySelector("#nacimiento");
var padres=document.querySelector("#padres");
var ojos=document.querySelector("#ojos");
var pelo=document.querySelector("#pelo");
var patronus=document.querySelector("#patronus");
var profesor=document.querySelector("#profesor");
var estudiante=document.querySelector("#estudiante");
var actor=document.querySelector("#actor");

var boton=document.querySelector('#boton');
boton.addEventListener('click',function() {
    window.location.href = "personajes.html";
})
		

 function cogerPersonajes(){
	fetch(urlPerso).then(function(data){
		return data.json();
	})
	.then(personaje=>{
		personajes=personaje;
       personajes.map(function(mago){

		let campo= document.createElement('h3');
		if(mago.image!=""){
			campo.innerHTML= mago.name;
			p.appendChild(campo);   
        }
		let imagen=document.createElement('img')
		if(mago.image!=""){
			imagen.src=mago.image;
			p.appendChild(imagen);

		}
		})
		datosPersonaje();
	   })
       
	}


function datosPersonaje(){
    
     let seleccionado=document.querySelectorAll('h3')
        
        fetch(urlPerso).then(function(data){
            return data.json();
        })
        .then(personaje=>{
            personajes=personaje;
           personajes.map(function(mago, x){   
            for (let i = 0; i < seleccionado.length; i++) {
                seleccionado[i].addEventListener('click', function(){
                seleccionado[i].style.color="#95389E";
                let mag=seleccionado[i].textContent;
                if (mag==mago.name){
                    let campo= document.createElement('p');
                    campo.innerHTML=mago.name;
                    nombre.appendChild(campo);
                    let campo2= document.createElement('p');
                    campo2.innerHTML=mago.gender;
                    if(mago.gender=="female"){
                        let imagen=document.createElement('img');
                        imagen.src="images/mujer.png";
			          genero.appendChild(imagen);
                    }else{
                    let imagen=document.createElement('img');
                    imagen.src="images/hombre.png";
			        genero.appendChild(imagen);
                    }
                    //genero.appendChild(campo2);

                    let campo3= document.createElement('p');
                    campo3.innerHTML=mago.dateOfBirth;
                    nacimiento.appendChild(campo3);

                    let campo4= document.createElement('p');
                    campo4.innerHTML=mago.ancestry;
                    padres.appendChild(campo4);

                    let campo5= document.createElement('p');
                    campo5.innerHTML=mago.eyeColour;
                    ojos.appendChild(campo5);

                    let campo6= document.createElement('p');
                    campo6.innerHTML=mago.hairColour;
                    pelo.appendChild(campo6);

                    let campo7= document.createElement('p');
                    campo7.innerHTML=mago.patronus;
                    patronus.appendChild(campo7);
                   
                    if(mago.hogwartsStaff===false){
                        let campo8=document.createElement('img');
                        campo8.src="images/x.png";
                        profesor.appendChild(campo8);
                    }else{
                    let campo8=document.createElement('img');
                    campo8.src="images/tic.png";
                    profesor.appendChild(campo8);
                    }

                    if(mago.hogwartsStudent===false){
                        let campo9=document.createElement('img');
                        campo9.src="images/x.png";
                        estudiante.appendChild(campo9);
                    }else{
                        let campo9=document.createElement('img');
                        campo9.src="images/tic.png";
                        estudiante.appendChild(campo9);
                    }

                    let campo10= document.createElement('p');
                    campo10.innerHTML=mago.actor;
                    actor.appendChild(campo10);

                    p.style.display="none";
                    boton.style.display="inline";
                    table.style.display="inline";
                }
                
                })  
            
           }
        })

    })
}
    
    cogerPersonajes();
