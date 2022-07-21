// ---------------------------------------------SECCIÓN 1---------------------------------------------
function validate1(val) {
v1 = document.getElementById("nombre");
v2 = document.getElementById("apellido");
v3 = document.getElementById("Estado");
v4 = document.getElementById("Sexo");
v5 = document.getElementById("Nacimiento");
v6 = document.getElementById("Celular");
v7 = document.getElementById("Email");
v8 = document.getElementById("nacionalidad");
v9 = document.getElementById("años");
v10 = document.getElementById("Dpi");
v11 = document.getElementById("nit");
v12 = document.getElementById("Departamento");
v13 = document.getElementById("Municipio");
v14 = document.getElementById("Pasaporte");
v15 = document.getElementById("País_Extranjero");
v16 = document.getElementById("Dpi2");
v17 = document.getElementById("País_Extranjero_Ado");



flag1 = true;
flag2 = true;
flag3 = true;
flag4 = true;
flag5 = true;
flag6 = true;
flag7 = true;
flag9 = true;
flag8 = true;
flag9 = true;
flag10 = true;
flag11 = true;
flag12 = true;
flag13 = true;
flag14 = true;
flag15 = true;
flag16 = true;
flag17 = true;



if(val>=1 || val==0) {
if(v1.value == "") {
v1.style.borderColor = "red";
flag1 = false;
}
else {
v1.style.borderColor = "green";
flag1 = true;
}
}


if(val>=2 || val==0) {
if(v2.value == "") {
v2.style.borderColor = "red";
flag2 = false;
}
else {
v2.style.borderColor = "green";
flag2 = true;
}
}


if(val>=3 || val==0) {
if(v3.value == "") {
v3.style.borderColor = "red";
flag3 = false;
}
else {
v3.style.borderColor = "green";
flag3 = true;
}
}


if(val>=4 || val==0) {
if(v4.value == "") {
v4.style.borderColor = "red";
flag4 = false;
}
else {
v4.style.borderColor = "green";
flag4 = true;
}
}


if(val>=5 || val==0) {
if(v5.value == "") {
v5.style.borderColor = "red";
flag5 = false;
}
else {
v5.style.borderColor = "green";
flag5 = true;
}
}


if(val>=6 || val==0) {
if(v6.value == "") {
v6.style.borderColor = "red";
flag6 = false;
}
else {
v6.style.borderColor = "green";
flag6 = true;
}
}


if(val>=7 || val==0) {
if(v7.value == " ") {
v7.style.borderColor = "green";
flag7 = false;
}
else {
v7.style.borderColor = "green";
flag7 = true;
}
}

if(val>=8 || val==0) {
if(v8.value == "") {
v8.style.borderColor = "red";
flag8 = false;
}
else {
v8.style.borderColor = "green";
flag8 = true;
}
}


if(val>=9 || val==0) {
if(v9.disabled || v9.value >= " ") {
v9.style.borderColor = "green";
flag9 = true;
}
else {
v9.style.borderColor = "red";
flag9 = false;
}
}


if(val>=10 || val==0) {
if(v10.disabled || v10.value >= " ") {
v10.style.borderColor = "green";
flag10 = true;
}
else {
v10.style.borderColor = "red";
flag10 = false;
}
}


if(val>=11 || val==0) {
if(v11.disabled || v11.value >= " ") {
v11.style.borderColor = "green";
flag11 = true;
}
else {
v11.style.borderColor = "red";
flag11 = false;
}
}

if(val>=12 || val==0) {
if(v12.disabled || v12.value >= " ") {
v12.style.borderColor = "green";
flag12 = true;
}
else {
v12.style.borderColor = "red";
flag12 = false;
}
}

if(val>=13 || val==0) {
if(v13.disabled || v13.value >= " ") {
v13.style.borderColor = "green";
flag13 = true;
}
else {
v13.style.borderColor = "red";
flag13 = false;
}
}

if(val>=14 || val==0) {
if(v14.disabled || v14.value >= " ") {
v14.style.borderColor = "green";
flag14 = true;
}
else {
v14.style.borderColor = "red";
flag14 = false;
}
}


if(val>=15 || val==0) {
if(v15.disabled || v15.value >= " ") {
v15.style.borderColor = "green";
flag15 = true;
}
else {
v15.style.borderColor = "red";
flag15 = false;
}
}

if(val>=16 || val==0) {
if(v16.disabled || v16.value >= " ") {
v16.style.borderColor = "green";
flag16 = true;
}
else {
v16.style.borderColor = "red";
flag16 = false;
}
}

if(val>=17 || val==0) {
if(v17.disabled || v17.value >= " ") {
v17.style.borderColor = "green";
flag17 = true;
}
else {
v17.style.borderColor = "red";
flag17 = false;
}
}


flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8 && flag9 && flag10 && flag11 && flag12 && flag13 && flag14 && flag15 && flag16 && flag17;

return flag;
}




// ---------------------------------------------SECCIÓN 2---------------------------------------------
function validate2(val) {
v1 = document.getElementById("Nivel_Academico");
v2 = document.getElementById("NivelEdu");
v3 = document.getElementById("Descripción_Titulo");
v4 = document.getElementById("Universidad");
v5 = document.getElementById("Nivel_Educativo");
v6 = document.getElementById("Grado");
v7 = document.getElementById("Nombre_Titulo");
v8 = document.getElementById("Colegio");
v9 = document.getElementById("No_Colegio");
v10 = document.getElementById("Fecha_Vigencia");
v11 = document.getElementById("NombreUniver");
v12 = document.getElementById("Otros_Conocimientos");
v13 = document.getElementById("Grado_Conocimientos");


flag1 = true;
flag2 = true;
flag3 = true;
flag4 = true;
flag5 = true;
flag6 = true;
flag7 = true;
flag8 = true;
flag9 = true;
flag10 = true;
flag11 = true;
flag12 = true;
flag13 = true;



if(val>=1 || val==0) {
if(v1.value == "") {
v1.style.borderColor = "red";
flag1 = false;
}
else {
v1.style.borderColor = "green";
flag1 = true;
}
}

if(val>=2 || val==0) {
if(v2.value == "-")  {
v2.style.borderColor = "red";
flag2 = false;
}
else {
v2.style.borderColor = "green";
flag2 = true;
}
}

if(val>=3 || val==0) {
if(v3.disabled || v3.value >= " ") {
v3.style.borderColor = "green";
flag3 = true;
}
else {
v3.style.borderColor = "red";
flag3 = false;
}
}


if(val>=4 || val==0) {
if(v4.disabled || v4.value >= "-") {
v4.style.borderColor = "green";
flag4 = true;
}
else {
v4.style.borderColor = "red";
flag4 = false;
}
}

if(val>=5 || val==0) {
if(v5.disabled || v5.value >= "-") {
v5.style.borderColor = "green";
flag5 = true;
}
else {
v5.style.borderColor = "red";
flag5 = false;
}
}

if(val>=6 || val==0) {
if(v6.disabled || v6.value >= "-") {
v6.style.borderColor = "green";
flag6 = true;
}
else {
v6.style.borderColor = "red";
flag6 = false;
}
}

if(val>=7 || val==0) {
if(v7.disabled || v7.value >= " ") {
v7.style.borderColor = "green";
flag7 = true;
}
else {
v7.style.borderColor = "red";
flag7 = false;
}
}

if(val>=8 || val==0) {
if(v8.disabled || v8.value >= " ") {
v8.style.borderColor = "green";
flag8 = true;
}
else {
v8.style.borderColor = "red";
flag8 = false;
}
}

if(val>=9 || val==0) {
if(v9.disabled || v9.value >= " ") {
v9.style.borderColor = "green";
flag9 = true;
}
else {
v9.style.borderColor = "red";
flag9 = false;
}
}

if(val>=10 || val==0) {
if(v10.disabled || v10.value >= " ") {
v10.style.borderColor = "green";
flag10 = true;
}
else {
v10.style.borderColor = "red";
flag10 = false;
}
}

if(val>=11 || val==0) {
if(v11.disabled || v11.value >= " ") {
v11.style.borderColor = "green";
flag11 = true;
}
else {
v11.style.borderColor = "red";
flag11 = false;
}
}

if(val>=12 || val==0) {
if(v12.disabled || v12.value >= " ") {
v12.style.borderColor = "green";
flag12 = true;
}
else {
v12.style.borderColor = "red";
flag12 = false;
}
}


if(val>=13 || val==0) {
if(v13.disabled || v13.value >= " ") {
v13.style.borderColor = "green";
flag13 = true;
}
else {
v13.style.borderColor = "red";
flag13 = false;
}
}


flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8 && flag9 && flag10 && flag11 && flag12 && flag13;

return flag;
}


// ---------------------------------------------SECCIÓN 3---------------------------------------------
function validate3(val) {
v1 = document.getElementById("unidadejecutora");
v2 = document.getElementById("Renglon");
v3 = document.getElementById("opt");
v4 = document.getElementById("Tipo_Ubicación");
v5 = document.getElementById("Descripción_Ubicación");
v6 = document.getElementById("Especialidad");
v7 = document.getElementById("Unidad_Comisionado");
v8 = document.getElementById("data1");
v9 = document.getElementById("Fecha_Ingreso");
v10 = document.getElementById("Puesto_Funcional");


flag1 = true;
flag2 = true;
flag3 = true;
flag4 = true;
flag5 = true;
flag6 = true;
flag7 = true;
flag8 = true;
flag9 = true;
flag10 = true;


if(val>=1 || val==0) {
if(v1.value == "") {
v1.style.borderColor = "red";
flag1 = false;
}
else {
v1.style.borderColor = "green";
flag1 = true;
}
}

if(val>=2 || val==0) {
if(v2.value == "-") {
v2.style.borderColor = "red";
flag2 = false;
}
else {
v2.style.borderColor = "green";
flag2 = true;
}
}

if(val>=3 || val==0) {
if(v3.value == "-") {
v3.style.borderColor = "red";
flag3 = false;
}
else {
v3.style.borderColor = "green";
flag3 = true;
}
}


if(val>=4 || val==0) {
if(v4.value == "-") {
v4.style.borderColor = "red";
flag4 = false;
}
else {
v4.style.borderColor = "green";
flag4 = true;
}
}

if(val>=5 || val==0) {
if(v5.value == "") {
v5.style.borderColor = "red";
flag5 = false;
}
else {
v5.style.borderColor = "green";
flag5 = true;
}
}


if(val>=6 || val==0) {
if(v6.value == "-") {
v6.style.borderColor = "red";
flag6 = false;
}
else {
v6.style.borderColor = "green";
flag6 = true;
}
}

if(val>=7 || val==0) {
if(v7.disabled || v7.value >= "-") {
v7.style.borderColor = "green";
flag7 = true;
}
else {
v7.style.borderColor = "red";
flag7 = false;
}
}

if(val>=8 || val==0) {
if(v8.value == "") {
v8.style.borderColor = "red";
flag8 = false;
}
else {
v8.style.borderColor = "green";
flag8 = true;
}
}


if(val>=9 || val==0) {
if(v9.value == "") {
v9.style.borderColor = "red";
flag9 = false;
}
else {
v9.style.borderColor = "green";
flag9 = true;
}
}


if(val>=10 || val==0) {
if(v10.value == "") {
v10.style.borderColor = "red";
flag10 = false;
}
else {
v10.style.borderColor = "green";
flag10 = true;
}
}


flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8 && flag9 && flag10;

return flag;
}


// ---------------------------------------------Siguiente o Atras---------------------------------------------

$(document).ready(function(){

var current_fs, next_fs, previous_fs;

$(".next").click(function(){

str1 = "next1";
str2 = "next2";
str3 = "next3";
str4 = "next4";
str5 = "next5";
str6 = "next6";
str7 = "next7";
str8 = "next8";



if(!str2.localeCompare($(this).attr('id')) && validate1(0) == true) {
val2 = true;
}
else {
val2 = false;
}

if(!str3.localeCompare($(this).attr('id')) && validate2(0) == true) {
val3 = true;
}
else {
val3 = false;
}


if(!str4.localeCompare($(this).attr('id')) && validate3(0) == true) {
val4 = true;

src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"

const scriptURL = 'https://script.google.com/macros/s/AKfycbzOTusQCXtG2w6bj2Ju-6I5TA1o6w5HRkc69ihibQfxmvWruikUhUYNxlgVqRaAlaE/exec'
const form = document.forms['formulario1']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  })

   Swal.fire({
   type: 'success',
   titleText: '¡Envío con éxito!',
   confirmButtonText: 'OK',
   allowEscapeKey: true,
   confirmButtonColor: '#20B2AA',
   })
      
 
   if($("#myAlert").find("div#myAlert2").length==0){
   $("#myAlert").append("<div class='alert alert-success alert-dismissable' id='myAlert2'><i class='fa fa-check-circle' aria-hidden='true'></i> ¡SUS DATOS SE ENVIARON CORRECTAMENTE!</div>");
   

  }
   $("#myAlert").css("display", "").fadeOut(8000);


}
else {
val4 = false;
}



if(!str5.localeCompare($(this).attr('id')) && validate4(0) == true) {
val5 = true;

}
else {
val5 = false;
}

if(!str6.localeCompare($(this).attr('id')) && validate5(0) == true) {
val6 = true;
}
else {
val6 = false;
}

if(!str7.localeCompare($(this).attr('id')) && validate6(0) == true) {
val7 = true;
}
else {
val7 = false;
}

if(!str1.localeCompare($(this).attr('id')) 

|| (!str2.localeCompare($(this).attr('id')) && val2 == true) 

|| (!str3.localeCompare($(this).attr('id')) && val3 == true) 

|| (!str4.localeCompare($(this).attr('id')) && val4 == true) 

|| (!str5.localeCompare($(this).attr('id')) && val5 == true) 

|| (!str6.localeCompare($(this).attr('id')) && val6 == true) 

|| (!str7.localeCompare($(this).attr('id')) && val7 == true) 

|| (!str8.localeCompare($(this).attr('id')) && val8 == true)) {

current_fs = $(this).parent().parent();
next_fs = $(this).parent().parent().next();

$(current_fs).removeClass("show");
$(next_fs).addClass("show");

$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

next_fs.css({
'display': 'block'
});
}
});
}
});

$(".prev").click(function(){

current_fs = $(this).parent().parent();
previous_fs = $(this).parent().parent().prev();

$(current_fs).removeClass("show");
$(previous_fs).addClass("show");

$("#progressbar li").eq($("fieldset").index(next_fs)).removeClass("active");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

previous_fs.css({
'display': 'block'
});
}
});
});

$('.radio-group .radio').click(function(){
$(this).toggleClass('selected');
});

});


