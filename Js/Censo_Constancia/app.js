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

    const form = document.querySelector('#formulario1');
    form.addEventListener('reset', (e) => {
        e.preventDefault();

        
        let nombres = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellido').value;
        let dpipasaportes = document.getElementById('dpipasaporte').value;
        let nits = document.getElementById('nit').value;
        let añoss = document.getElementById('años').value;
        let nacionalidads = document.getElementById('nacionalidad').value;
        let unidadejecutoras = document.getElementById('unidadejecutora').value;
        let opts = document.getElementById('opt').value;
        let Renglons = document.getElementById('Renglon').value;
        

        generatePDF(nombres, apellidos, dpipasaportes, nits, añoss, nacionalidads, unidadejecutoras, opts, Renglons);
    })

});

async function generatePDF(nombres, apellidos, dpipasaportes, nits, añoss, nacionalidads, unidadejecutoras, opts, Renglons) {
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
    pdf.text(añoss, 165, 254);
    pdf.text(nacionalidads, 390, 254);  
    pdf.text(dpipasaportes, 165, 268);
    pdf.text(nits, 390, 268);  
    pdf.text(unidadejecutoras, 165, 339);  
    pdf.text(opts, 390, 366);  
    pdf.text(Renglons, 165, 366);  

    pdf.save("Constancia_GRATUITA.pdf");

}
