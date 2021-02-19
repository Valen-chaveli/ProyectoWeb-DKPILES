/* Cambiad URL de la cámara */
var pathPiles = 'http://turiscam.comunitatvalenciana.com/piles.jpg';

/****************************/

var image_to_refresh = 0;

function refresh_imagePiles(image_to_refresh) {
  var image = document.querySelector('img#popimage' + image_to_refresh);
  image.src = pathPiles + '?' + Math.random();
  setTimeout('update_zindex(' + image_to_refresh + ')', 150);
  image_to_refresh++;
  image_to_refresh = image_to_refresh % 3;
  var webcam_timeout = parseInt(3) * 1000;
  setTimeout('refresh_imagePiles(' + image_to_refresh + ')', webcam_timeout);
}

function hora_actual() {
  var fecha = new Date();
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anyo = fecha.getFullYear();
  var hora = fecha.getHours();
  var minuto = fecha.getMinutes();
  var segundo = fecha.getSeconds();
  if (dia < 10) dia = '0' + dia;
  if (mes < 10) mes = '0' + mes;
  if (hora < 10) hora = '0' + hora;
  if (minuto < 10) minuto = '0' + minuto;
  if (segundo < 10) segundo = '0' + segundo;
  var hora_actual =
    dia + '-' + mes + '-' + anyo + ' ' + hora + ':' + minuto + ':' + segundo;
  document.querySelector('div#hora').innerHTML = hora_actual;
}

function update_zindex(image_to_refresh) {
  current_zindex = parseInt(
    document.querySelector('img#popimage' + image_to_refresh).style.zIndex
  );
  var imag = document.querySelector('img#popimage' + image_to_refresh);
  imag.style.zIndex = current_zindex + 3;
  imag.style.display = 'inline';
  hora_actual();
}
/* MAIN */
document.querySelector('img#popimage0').style.display = 'inline';

refresh_imagePiles(0);

hora_actual();
