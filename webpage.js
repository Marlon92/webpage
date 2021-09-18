
function save() {
    var nombre = document.getElementById('nombre').value;
    localStorage.setItem("name", nombre);
    console.log(localStorage.getItem("name"));
    alert("nombre: " + localStorage.getItem("name") + " guardado en localstorage");
 }

