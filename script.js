let listaContactos = ['Jose Luis Mendoza','Arturo Mendoza','Fernando Mendoza', 'Maria Mendoza'];

//Creando una funcion para añadir contactos
function agregarContacto(nombreApellido){
  listaContactos.push(nombreApellido);
}

//creando una funcion para borrar contacto
function borrarContacto(nombreApellido){
  const indice = listaContactos.indexOf(nombreApellido);
  if (indice !== -1){
    listaContactos.splice(indice, 1);
    console.log(`${nombreApellido} ha sido eliminado.`);
  }else {
    console.log(`${nombreApellido} no se ha encontrado en la lista.`);
  }
}

//Creando una función para imprimir los contactos en la consola usando console.table()
function imprimirContactos() {
  console.log("Lista de contactos:");
  console.table(listaContactos);
}

// nuevos contactos
agregarContacto("Jorge Melendez");
agregarContacto("Ricardo Sosa");

// Borrar un contacto
borrarContacto("Jose Luis Mendoza");
borrarContacto("Luis Lopez");

// Imprimir la lista de contactos
imprimirContactos();















