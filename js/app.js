const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
  cursos.addEventListener('click', comprarCurso);
  
  carrito.addEventListener('click', eliminarCusro);
  
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

  document.addEventListener('DOMContentLoaded', cargarLocalStorage);
}

function comprarCurso(e){
  e.preventDefault();
  //console.log(e.target.classList);
  //Delegation para agregar carrito
  if(e.target.classList.contains('agregar-carrito')){
    const curso = e.target.parentElement.parentElement;
    //console.log("Agregando curso: " + curso);
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
  //console.log(infoCurso);
  insertarCarrito(infoCurso);
}

function insertarCarrito(infoCurso){
  //console.log(infoCurso.titulo);
  
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img src="${infoCurso.imagen}" width=100>
    </td>
    <td>${infoCurso.titulo}</td>
    <td>${infoCurso.precio}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
    </td>
  `;
  
  listaCursos.appendChild(row);

  guardarCursoLocalStorage(infoCurso);
}

function eliminarCusro(e){
  e.preventDefault();
  //console.log('Eliminado');
  let curso, cursoId;
  
  if(e.target.classList.contains('borrar-curso')){
    
    curso = e.target.parentElement.parentElement;
    e.target.parentElement.parentElement.remove();
    cursoId = curso.querySelector('a').getAttribute('data-id');
    console.log(cursoId);
  }
  
  eliminarCursoLocalStorage(cusroId);
}

function vaciarCarrito(){
  //forma lenta
  //listaCursos.innerHTML = '';
  //forma rapida (recomendada)
  while(listaCursos.firstChild){
    listaCursos.removeChild(listaCursos.firstChild);
  }
  return false;//fixes some jump
}

function guardarCursoLocalStorage(infoCurso){
  let cursos;

  cursos = obtenerCursosLocalStorage();
  cursos.push(infoCurso);
  
  localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage(){
  
  let cusrsosLS;

  if(localStorage.getItem('cursos') === null){
    cusrsosLS = [];
  } else {
    cusrsosLS = JSON.parse(localStorage.getItem('cursos'));
  }

  return cusrsosLS;
}

function cargarLocalStorage(){
  let cursos;

  cursos = obtenerCursosLocalStorage();

  cursos.forEach(curso => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src="${curso.imagen}" width=100>
      </td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
      </td>
    `;
    
    listaCursos.appendChild(row);
  });
}

eliminarCursoLocalStorage(cursoId){
  let cursos;

  cursos = obtenerCursosLocalStorage();
  
  cursos.forEach((curso, index) =>{
    if(curso.id === cursoId){
      cursos.splice(index, 1);
      break;
    }
  });
  
  localStorage.setItem('cursos', JSON.stringify(cursos));
}
