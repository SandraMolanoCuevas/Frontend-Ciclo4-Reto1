function validar() {
  const usuario = document.getElementById('usuario');
  const clave = document.getElementById('clave');

  if (usuario.value.length == 0) {
    alert("Ingrese un usuario")
    usuario.focus()
    return 0;
  }

  if (clave.value.length == 0) {
    alert("Ingrese una contraseña")
    clave.focus()
    return 0;

  }

  let credentials = {
    usuario: $("#usuario").val(),
    clave: $("#clave").val()
  };

  $.ajax({
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: 'JSON',
    // data: JSON.stringify(credentials),

    url: "http://localhost:8080/api/user/" + credentials.usuario + "/" + credentials.clave,

    success: function (response) {
      if (response.name == 'NO DEFINIDO') {
        alert('Usuario o clave incorrectos!');
        return;
      }
      console.log(response);
      console.log("Bienvenido");
      alert("Bienvenido(a) Acabas de iniciar sesion");
      window.location.reload()
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload()
      alert("no existe usuario");
    }
  }
  );


}