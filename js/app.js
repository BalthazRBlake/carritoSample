const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

cargarEventListeners();

function cargarEventListeners(){
  cursos.addEventListener('click', comprarCurso);
}

function comprarCurso(e){
  e.preventDefault();
  //console.log(e.target.classList);
  //Delegation para agregar carrito
  if(e.target.classList.contains('agregar-carrito'){
     const curso = e.target.parentElement.parentElement;
     leerDatosCurso(curso);
  }
}

function leerDatosCurso(curso){
  console.log(curso);
}
