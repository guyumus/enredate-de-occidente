document.querySelector("#sub").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573116064591";

  let nombre = document.querySelector("#form-first-name").value;
  let celular = document.querySelector("#form-last-name").value;

  let descripcion = document.querySelector("#form-about-yourself").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono,"573107538070"}&text=
    *COTIZACIÓN*%0A
    *Nombre*%0A
    ${nombre}%0A
    *celular*%0A
    ${celular}%0A
    *Descripcion del servicio*%0A
    ${descripcion}`;

  if (nombre === "" || celular === "" || descripcion === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${nombre}`;

  window.open(url);
  
});
