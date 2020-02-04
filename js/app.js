const carrito = getElementById('carrito');
const cursos = getElementById('lista-cursos');

cargar eventListeners();

function eventListeners(){
  cursos.addEventListener('click', comprarCusro);
}

function comprarCurso(e){
  e.preventDefault();
  
  console.log(e.target.classList);
}
