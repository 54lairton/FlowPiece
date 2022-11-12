const BTN_calend = document.getElementById("calendar");
const BTN_contato = document.getElementById("contact");

const aside_calendario = document.getElementById("calend-aside");
const form_contato = document.getElementById("form-contat");

function abrirCalend(){
    aside_calendario.classList.toggle("flex");
}
function abrirContato(){
    form_contato.classList.toggle("flex");
}
BTN_calend.addEventListener("click", abrirCalend)
BTN_contato.addEventListener("click", abrirContato);



