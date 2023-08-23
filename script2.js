const agenda = [];

function crearContacto(id, nombres, apellidos, telefono, ubicacion) {
    const contacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicacion: ubicacion,
    };
    agenda.push(contacto);
    console.log(`Contacto creado: ${nombres} ${apellidos} / CELULAR ${telefono} / Direccion ${ubicacion} `);
}

function eliminarContacto(id) { // Agregamos el parámetro 'id' 
    const indice = agenda.findIndex(contacto => contacto.id === id); 
    if (indice !== -1) {
        const nombreCompleto = `${agenda[indice].nombres} ${agenda[indice].apellidos}`;
        agenda.splice(indice, 1);
        console.log(`❌ Contacto con ID ${id} (${nombreCompleto}) eliminado exitosamente.`);
    } else {
        console.log(`❗️ No se encontró ningún contacto con ID ${id}.`);
    }
}

function mostrarContactos() {
    console.log('Lista de Contactos');
    agenda.forEach(contacto => {
        console.log(`ID: ${contacto.id} | Nombre: ${contacto.nombres} ${contacto.apellidos}`);
    });
}

function buscarContactoPorId(id) {
    const contacto = agenda.find(contacto => contacto.id === id);
    if (contacto) {
        console.log(`✅ Contacto encontrado - ID: ${contacto.id} | Nombre: ${contacto.nombres} ${contacto.apellidos}`);
    } else {
        console.log(`❗️ No se encontró ningún contacto con ID ${id}.`);
    }
}

crearContacto(1, 'Jose Luis', 'Mendoza', '31-41-11-88',  'Tegucigalpa - Barrio Casamata' );
crearContacto(2, 'Bianka', 'Handres', '33-32-10-09',  'Tegucigalpa - Residencial el Tablon' );

mostrarContactos();
buscarContactoPorId(1);
eliminarContacto(1);
mostrarContactos();