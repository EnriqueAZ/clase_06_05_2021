contactos = new Array();
/* contactos = []; */

function Insertar() {

    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var contacto = {nombre: nombre, edad: edad};
    contactos.push(contacto);

    /* Se crea un contenedor, una tabla y se agrega
    el la tabla al contenedor { */
    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    contenedor.appendChild(tabla);

    /* } */


    /* se crea una fila y dos columnas { */        
    filaE = document.createElement("tr");
    /* agrego la fila a la tabla { */
    tabla.appendChild(filaE);
    /* } */
    celdaE1 = document.createElement("th");
    /* agrego la celda a la fila { */
    filaE.appendChild(celdaE1);
    /* } */
    /* Se genera el texto de la celda { */
    textoE1 = document.createTextNode("Nombre");
    /* } */
    /* Se agrega el texto a la celda { */
    celdaE1.appendChild(textoE1);
    /* } */
    celdaE2 = document.createElement("th");
    filaE.appendChild(celdaE2);
    textoE2 = document.createTextNode("Edad");
    celdaE2.appendChild(textoE2);
    /* } */

    /* Se guardan los valores en un array y se envia a la vista{ */
    /* var tabla = "<table border='1'><tr><th>Nombre</th><th>Edad</th></tr>"; */
    for (var i = 0; i < contactos.length; i++) {
        var fila = document.createElement("tr");
        tabla.appendChild(fila);

        var celda1 = document.createElement("td");
        fila.appendChild(celda1);    
        var texto1 = document.createTextNode(contactos[i].nombre);
        celda1.appendChild(texto1);

        var celda2 = document.createElement("td");
        fila.appendChild(celda2);
        texto2 = document.createTextNode(contactos[i].edad);
        celda2.appendChild(texto2);

        /* Nota: todo eso de arriva y esto en el for es igual a lo siguiente: {*/

        /* tabla += "<tr><td>" + contactos[i].nombre + "</td></tr><tr><td>" + contactos[i].edad +"</td></tr>"; */

        /* } */
    }
    /* tabla += "</table>"; */
    /*  document.getElementById("contenedor").innerHTML = tabla;     */
    /* } */
    
}

function mostrar() {
    document.getElementById("contenedor").innerHTML = "<p>Hola mundo</p>";
}{}