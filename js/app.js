const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

cargarEventListeners();

function cargarEventListeners(){
  cursos.addEventListener('click', comprarCurso);
}

function comprarCurso(e){
  e.preventDefault();
  
  console.log(e.target.classList);
}
