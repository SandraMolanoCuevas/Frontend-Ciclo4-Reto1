function validar() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (email.value.length == 0) {
    alert("Ingrese su correo electronico")
    email.focus()
    return 0;
  }

  if (password.value.length == 0) {
    alert("Ingrese una contraseña")
    password.focus()
    return 0;

  }

  let credentials = {
    email: $("#email").val(),
    password: $("#password").val()
  };

  $.ajax({
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: 'JSON',
    // data: JSON.stringify(credentials),

    url: "http://129.151.105.93/api/user/" + credentials.email + "/" + credentials.password,

    success: function (response) {
      if (response.name == 'NO DEFINIDO') {
        alert('Usuario o clave incorrectos!');
        return;
      }
      console.log(response);
      console.log("True");
      alert("Bienvenido acabas de iniciar sesion");
      window.location.reload()
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload()
      console.log("False");
      alert("no existe usuario");
    }
  }
  );

}