const carrito = getElementById('carrito');
const cursos = getElementById('lista-cursos');

cargarEventListeners();

function cargarEventListeners(){
  cursos.addEventListener('click', comprarCusro);
}

function comprarCurso(e){
  e.preventDefault();
  
  console.log(e.target.classList);
}
