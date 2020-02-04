const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

cargarEventListeners();

function cargarEventListeners(){
  cursos.addEventListener('click', comprarCurso);
}

function comprarCurso(e){
  e.preventDefault();
  //console.log(e.target.classList);
  //Delegation para agregar carrito
  if(e.target.classList.contains('agregar-carrito')){
    const curso = e.target.parentElement.parentElement;
    console.log("Agregando curso: " + curso);
    leerDatosCurso(curso);
  }
}

function leerDatosCurso(curso){
  
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id')
  }
  console.log(infoCurso);
  insertarCarrito(infoCurso);
}

function insertarCarrito(infoCurso){
  console.log(infoCurso.titulo);
  /*
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img src="${infoCurso.imagen}" width="100">
    </td>
    <td>${infoCurso.titulo}</td>
    <td>${infoCurso.precio}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
    </td>
  `;
  
  listaCursos.appendChild(row);*/ 
}
