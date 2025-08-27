//Variables
const nuevoProyecto = document.getElementById('inputProyecto');
const btnAgregar = document.getElementById('btnAgregar');
let id = 0;

//Carga array del local storage 
let arrayProyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
console.log(arrayProyectos);

//Guarda array en local storage
function guardarProyecto(proyecto) {
  localStorage.setItem('proyectos', JSON.stringify(proyecto));
  console.log(arrayProyectos);  
};

//renderizacion

//Agregar proyecto al array
function agregarProyecto(nombreProyecto) {
  //Incrementa el id
  if(arrayProyectos.length == 0){
    id = 1;
  } else {
    id = arrayProyectos[0].id + 1;
  };

  //Crea el nuevo objeto
  let data = {
    id: id,
    estado: false,
    nombre: nombreProyecto,
    tiempo: "00:00"
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

//Borrar proyecto

//Accion botones play - stop

//Guardar estados sesion actual

//Calcular tiempo trascurrido
