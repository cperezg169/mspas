function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;


window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        
        let nombres = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellido').value;
        let dpis = document.getElementById('dpi').value;
        let nits = document.getElementById('nit').value;
        let edads = document.getElementById('edad').value;
        let nacionalidads = document.getElementById('nacionalidad').value;
        let unidadejecutoras = document.getElementById('unidadejecutora').value;
        let renglons = document.getElementById('renglon').value;
        let tipservicios = document.getElementById('tipservicio').value;
        

        generatePDF(nombres, apellidos, dpis, nits, edads, nacionalidads, unidadejecutoras, renglons, tipservicios);
    })

});

async function generatePDF(nombres, apellidos, dpis, nits, edads, nacionalidads, unidadejecutoras, renglons, tipservicios) {
    const image = await loadImage("formulario.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 0, 793);


    pdf.setFontSize(10);
    const date = new Date();
    pdf.text(date.getUTCDate().toString(), 173, 658.5);
    pdf.text((date.getUTCMonth() + 1).toString(), 207, 658.5);
    pdf.text(date.getUTCFullYear().toString(), 237, 658.5);
    

    pdf.setFontSize(10);
    pdf.text(nombres, 165, 240);
    pdf.text(apellidos, 390, 240);
    pdf.text(edads, 165, 254);
    pdf.text(nacionalidads, 390, 254);  
    pdf.text(dpis, 165, 268);
    pdf.text(nits, 390, 268);  
    pdf.text(unidadejecutoras, 165, 339);
    pdf.text(renglons, 165, 366);
    pdf.text(tipservicios, 390, 366);  


    pdf.save("Constancia_GRATUITA.pdf");

}
