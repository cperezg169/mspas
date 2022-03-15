// ---------------------------------------------SECCIÓN 1---------------------------------------------
function validate1(val) {
v1 = document.getElementById("Nombres");
v2 = document.getElementById("Apellidos");
v3 = document.getElementById("Estado");
v4 = document.getElementById("Sexo");
v5 = document.getElementById("Nacimiento");
v6 = document.getElementById("Celular");
v7 = document.getElementById("Email");
v8 = document.getElementById("Nacionalidad");



flag1 = true;
flag2 = true;
flag3 = true;
flag4 = true;
flag5 = true;
flag6 = true;
flag7 = true;
flag9 = true;
flag8 = true;




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

flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8;

return flag;
}




// ---------------------------------------------SECCIÓN 2---------------------------------------------
function validate2(val) {
v1 = document.getElementById("Nivel_Academico");
v2 = document.getElementById("NivelEdu");


flag1 = true;
flag2 = true;


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


flag = flag1 && flag2;

return flag;
}


// ---------------------------------------------SECCIÓN 3---------------------------------------------
function validate3(val) {
v1 = document.getElementById("Unidad_Ejecutora");
v2 = document.getElementById("Renglon");
v3 = document.getElementById("opt");
v4 = document.getElementById("Ubicación_Fisica");
v5 = document.getElementById("Mensual");


flag1 = true;
flag2 = true;
flag3 = true;
flag4 = true;
flag5 = true;


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

flag = flag1 && flag2 && flag3 && flag4 && flag5;

return flag;
}


// ---------------------------------------------SECCIÓN 3---------------------------------------------
function validate4(val) {
v1 = document.getElementById("Politicas");


flag1 = true;


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


flag = flag1;

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

