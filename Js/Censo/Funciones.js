//  onclick="validar_formulario(this.form)" 
//function alerta(campo) { 
//  	alert("Por favor, completa el campo "+campo) 
// }
//  function validar_formulario(form) {
//  	if (form.Dpi.value == "") { 
//  		alerta('\"Dpi\"'); form.Dpi.focus(); return true; 
//  	}
//  	if (form.telefono4.value == "") { 
//  		alerta('\"Teléfono\"'); form.telefono4.focus(); return true;
// 	}
//  	if (form.direccion4.value == "") { 
//  		alerta('\"Direccion\"'); form.direccion4.focus(); return true;
	// }
//  	form.submit()
// }



// <--------------------------------------------Ocultar o Mostrar Contenido--------------------------------------------> CON BOTTON	
//
//            function CambioRenglonMostrar(){
//                document.getElementById('Div1').style.display = 'block';
//            }
//
//            function CambioRenglonOcultar(){
//                document.getElementById('Div1').style.display = 'none';
//            }
// <--------------------------------------------Ocultar o Mostrar Contenido--------------------------------------------> CON BOTTON	




// ---------------------------------------------Audio con Click---------------------------------------------
    const audio = new Audio();
    audio.src = "./Click.mp3";
    audio.volume = 0.2





// ---------------------------------------------Derechos de Autor-------------------------------------------->
    var anio = new Date();
    document.getElementById('anio').innerHTML = anio.getFullYear();






// <--------------------------------------------Mayuscula-------------------------------------------->
  function mayus(e) {
  e.value = e.value.toUpperCase();
  }





// <--------------------------------------------Solo Letras-------------------------------------------->
  function soloLetras(e) {
      key = e.keyCode || e.which;
      tecla = String.fromCharCode(key).toString();
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
      especiales = [8, 39, 110]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
  
      tecla_especial = false
      for(var i in especiales) {
          if(key == especiales[i]) {
              tecla_especial = true;
              break;
          }
      }
  
      if(letras.indexOf(tecla) == -1 && !tecla_especial){
          return false;}}

// <--------------------------------------------Cambiar Nacionalidad-------------------------------------------->
          function seleccionado(){
            var opt = $('#Nacionalidad').val();
            
           // alert(opt);
            if(opt=="GUATEMALTECO"){
                $('#GUATE').show();
                $('#EXTRAN').hide();
                $('#EXTRANDOM').hide();
            }else{
                if(opt=="EXTRANJERO"){
                    $('#GUATE').hide();
                    $('#EXTRAN').show();
                    $('#EXTRANDOM').hide();
                }else{
                    $('#GUATE').hide();
                    $('#EXTRAN').hide();
                    $('#EXTRANDOM').show();
                }
            }
        }

// <--------------------------------------------Universidad Universidad-------------------------------------------->

function OtraUniversidad(){
    var opt = $('#Universidad').val();
    
   // alert(opt);
    if(opt=="OU_"){
        $('#NONBREDEUNIVERSIDAD').show();
    }else{
        $('#NONBREDEUNIVERSIDAD').hide();
        }
    }

function ColegiadoActivo(){
        var opt = $('#Grado').val();
        
       // alert(opt);
        if(opt=="GRADUADO"){
            $('#COLEGIOPROFESIONAL').show();
        }else{
            $('#COLEGIOPROFESIONAL').hide();
            }
        }

function FuncionesTDR(){
        var opt = $('#Renglon').val();
        
       // alert(opt);
        if(opt=="RENGLON_036"){
            $('#TDRS2').show();
            $('#TDRS1').hide();
        }else{
            $('#TDRS2').hide();
            $('#TDRS1').show();
            }
        }


function FunciónUniver(){
        var opt = $('#Nivel_Academico').val();
        
       // alert(opt);
        if(opt=="DIVERSIFICADO"){
            $('#ESTUDIOSUNIVER').show();
        }else{
            $('#ESTUDIOSUNIVER').hide();
            }
        }

