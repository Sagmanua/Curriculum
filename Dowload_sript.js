
// Botón para descargar el HTML actual como archivo
document.getElementById('downloadBtn').addEventListener('click', function(e){
e.preventDefault();
const html = '<!doctype html>\\n' + document.documentElement.outerHTML;
const blob = new Blob([html], {type: 'text/html'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'CV_Bohdan_Sydorenko.html';
document.body.appendChild(a);
a.click();
a.remove();
URL.revokeObjectURL(url);
});
