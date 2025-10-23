//Definir Variables
const nuevoProyecto = document.getElementById('inputProyecto');
const tabla = document.getElementById('tabla');
const invitacion = document.getElementById('invitacion');
const btnAgregar = document.getElementById('btnAgregar');
let id = 0;

//Carga array del local storage o crear uno nuevo
let arrayProyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
renderProyectos();

//Guarda array en local storage
function guardarProyecto(proyecto) {
  localStorage.setItem('proyectos', JSON.stringify(proyecto));
  console.log(arrayProyectos);
  renderProyectos(); 
};

//renderizacion
function renderProyectos() {
  if (arrayProyectos == 0) {
    invitacion.innerText = "No hay proyectos aún. ¡Agrega el primero!";   
  } else {
    invitacion.innerText = "Excelente ¡Vamos a trabajar!";
  }

  let html = "";
  for (let proyecto of arrayProyectos) {
    html += `
    <tr id="boxProyecto">
      <td id="nombre">${proyecto.nombre}</td>
      <td>
        <label for="" id="display">${proyecto.tiempo}</label>
        <button class="btn btnCorrer">></button>
        <button class="btn btnParar">||</button>
        <button class="btn btnBorrar">x</button>
      </td>     
    </tr>`    
  };
  tabla.innerHTML = html;
}


//Agregar proyecto al array
function agregarProyecto(nombreProyecto) {
  //Incrementar el id
  if(arrayProyectos.length == 0){
    id = 1;
  } else {
    id = arrayProyectos[0].id + 1;
  };

  //Crea el nuevo objeto para el array
  let data = {
    id: id,
    estado: false,
    nombre: nombreProyecto,
    tiempo: "00:00:00"
  };
  arrayProyectos.unshift(data);
  nuevoProyecto.value = '';
  guardarProyecto(arrayProyectos);  
};

//Escucha boton agregar
btnAgregar.addEventListener('click', () => {
  if(nuevoProyecto.value == ''){
    alert("Debes escribir un nombre de proyecto...");
  } else {
    agregarProyecto(nuevoProyecto.value);
  };
});

//Seleccion proyecto

//Accion boton play

//Accion boton stop

//Borrar proyecto

//Guardar estados sesion actual

//Calcular tiempo trascurrido
