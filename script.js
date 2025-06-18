const ul = document.getElementById('provincias');


ul.innerHTML += '<li> Santa Rosa </li>';
ul.innerHTML += '<li> Corrientes </li>';

const viaje = {
  titulo: 'Viajar por el mundo',
  descripcion: 'El mundo es muy grande para quedarse en un solo lugar'
};

const contenedor = document.getElementById('posts');

const h2 = document.createElement('h2');
h2.textContent = viaje.titulo;
contenedor.appendChild(h2);

const p = document.createElement('p');
p.textContent = viaje.descripcion;
contenedor.appendChild(p);