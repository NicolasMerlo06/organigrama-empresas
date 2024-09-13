function mostrardialog(nombre, tarea, proyecto) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("nombre").innerText = nombre;
    document.getElementById("tarea").innerText = tarea;
    document.getElementById("proyecto").innerText = proyecto;
}
function cerrar() {
    document.getElementById("modal").style.display = "none"
}
function guardarls() {
    const Tarea = document.getElementById("MisTareas").value;
    localStorage.setItem("MisTareas", Tarea)
}
function cargarls() {
    document.getElementById("MisTareas").value = localStorage.getItem("MisTareas")
}


function guardarcalendar() {
    const calendar = [];
    document.querySelectorAll("textarea").forEach(element => {
        calendar.push(element.value)
    })
    localStorage.setItem("Agenda", calendar)
}
function cargarcalendar() {
    let calendar = localStorage.getItem("Agenda")
    calendar = calendar.split(",")

    calendar.forEach((element, cont) => {
        document.getElementById(`dia${cont + 1}`).value = element
    })
}