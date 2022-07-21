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
            var opt = $('#nacionalidad').val();
            
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
        $('#COLEGIOPROFESIONAL').hide();
        }
    }

function ColegiadoActivo(){


        m1 = document.getElementById("Nivel_Educativo").value;
        m2 = document.getElementById("Grado").value;

        r = m1 + "_"+m2;

        document.getElementById("MostrarColegiado").value = r;


        var opt = $('#MostrarColegiado').val();

       // alert(opt);
        if(opt=="LICENCIATURA_GRADUADO"){
            $('#COLEGIOPROFESIONAL').show();

            document.getElementById("Colegio").disabled=false;
            document.getElementById("No_Colegio").disabled=false;
            document.getElementById("Fecha_Vigencia").disabled=false;
            document.getElementById("Otros_Conocimientos").disabled=false;
            document.getElementById("Grado_Conocimientos").disabled=false;


        }else{
            $('#COLEGIOPROFESIONAL').hide();

            document.getElementById("Colegio").disabled=true;
            document.getElementById("No_Colegio").disabled=true;
            document.getElementById("Fecha_Vigencia").disabled=true;
            document.getElementById("Otros_Conocimientos").disabled=true;
            document.getElementById("Grado_Conocimientos").disabled=true;

            }
        }




function FunciónUniver(){
        var opt = $('#Nivel_Academico').val();
        

        var SI_UNIVERSIDAD = document.getElementById('SI_UNIVERSIDAD');
        var NO_UNIVERSIDAD = document.getElementById('NO_UNIVERSIDAD')
        var Universidad = document.getElementById('Universidad')
        var Nivel_Educativo = document.getElementById('Nivel_Educativo')
        var Grado = document.getElementById('Grado')
        var Nombre_Titulo = document.getElementById('Nombre_Titulo')
        var Colegio = document.getElementById('Colegio')
        var No_Colegio = document.getElementById('No_Colegio')
        var Fecha_Vigencia = document.getElementById('Fecha_Vigencia')
        var Otros_Conocimientos = document.getElementById('Otros_Conocimientos')
        var Grado_Conocimientos = document.getElementById('Grado_Conocimientos')


       // alert(opt);
        if(opt=="DIVERSIFICADO"){
            $('#ESTUDIOSUNIVER').show();

            var SI_UNIVERSIDAD = document.getElementById('SI_UNIVERSIDAD');
            var NO_UNIVERSIDAD = document.getElementById('NO_UNIVERSIDAD')
            var Universidad = document.getElementById('Universidad')
            var Nivel_Educativo = document.getElementById('Nivel_Educativo')
            var Grado = document.getElementById('Grado')
            var Nombre_Titulo = document.getElementById('Nombre_Titulo')
            var Colegio = document.getElementById('Colegio')
            var No_Colegio = document.getElementById('No_Colegio')
            var Fecha_Vigencia = document.getElementById('Fecha_Vigencia')
            var Otros_Conocimientos = document.getElementById('Otros_Conocimientos')
            var Grado_Conocimientos = document.getElementById('Grado_Conocimientos')
    
    
            function updateStatus2() {
              if (SI_UNIVERSIDAD.checked) {
                Universidad.disabled = false;
                Nivel_Educativo.disabled = false;
                Grado.disabled = false;
                Nombre_Titulo.disabled = false;
              } else {
                Universidad.disabled = true;
                Nivel_Educativo.disabled = true;
                Grado.disabled = true;
                Nombre_Titulo.disabled = true;
                Colegio.disabled = true;
                No_Colegio.disabled = true;
                Fecha_Vigencia.disabled = true;
                Otros_Conocimientos.disabled = true;
                Grado_Conocimientos.disabled = true;
              }
            }
    
            SI_UNIVERSIDAD.addEventListener('click', updateStatus2)
            NO_UNIVERSIDAD.addEventListener('click', updateStatus2)
              

        }else{
            $('#ESTUDIOSUNIVER').hide();
            $('#Contenido').hide();

                Universidad.disabled = true;
                Nivel_Educativo.disabled = true;
                Grado.disabled = true;
                Nombre_Titulo.disabled = true;
                Colegio.disabled = true;
                No_Colegio.disabled = true;
                Fecha_Vigencia.disabled = true;
                Otros_Conocimientos.disabled = true;
                Grado_Conocimientos.disabled = true;

            }

        }
