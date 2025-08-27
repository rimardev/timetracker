//variables
const nuevoProyecto = document.getElementById('inputProyecto');
const btnAgregar = document.getElementById('btnAgregar');
let id = 0;

//cargar local storage 
let arrayPoyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
console.log(arrayPoyectos);

//guardar local storage
function guardarProyecto(proyecto) {
  localStorage.setItem('proyectos', JSON.stringify(proyecto));
  console.log(arrayPoyectos);  
};

//renderizacion

//agregar proyecto
btnAgregar.addEventListener('click', () => {
  console.log(nuevoProyecto.value);
  let data = {
    nombre: nuevoProyecto.value,
    estado: false
  };
  arrayPoyectos.unshift(data);
  guardarProyecto(arrayPoyectos);
});

//seleccion proyecto

//accion botones play - stop

//guardar estados sesion actual

//calcular tiempo trascurrido

//borrar proyecto