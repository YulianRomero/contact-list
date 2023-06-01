// lista de contactos
let listaContactos =[
    {id: 0,
    nombre: "Yulian Ferley",
    apellido: "Rodriguez Romero",
    telefono: 3043418144,
    },
   
    {id: 1,
    nombre: "Yesica Alejandra ",
    apellido: "Martinez Gomez",
    telefono: 3015189635,
    },
    {id: 2,
     nombre: "Laura Alejandra",
     apellido: "Silva Lopez",
     telefono: 3216557448,},
];

// funcion para añadir un nuevo contacto a la lista
function agregarContacto(
    id,
nombre,
apellido,
telefono,

){
listaContactos.push({
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    
});}

// funcion para borrar contacto de la lista
function borrarContacto(id){
   let  Indice = listaContactos.findIndex((contacto) => contacto.id === id);
   if (Indice !== -1){
    listaContactos.splice(Indice, 1);
   }
}
// funcion para imprimir en consola la lista
function imprimirContactos(){
    console.log (listaContactos);
}
// agregar un nuevo contacto a la lista
agregarContacto(
    "3",
    "Pedro Pablo",
    "Ramirez Duque",
    "3142035069",
    );
    // borrar contacto de la lista
    borrarContacto(2);
    // imprimir lista actualizada
    imprimirContactos();
    // buscar contacto de la lista y actualizarlo
 function actualizarContacto(id,nuevoNombre,nuevoApellido,nuevoTelefono,){
    //buscamos el indice del objeto en el array usando finIndex
    const index = listaContactos.findIndex(contacto => contacto.nombre === nombre);
    if (index !== -1){
        //eliminamos el contacto de la lista usando splice
        listaContactos.splice(index, 1);
    }
 }
