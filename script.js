function sendData() {
  companyName = document.getElementById("companyName").value;
  staffName = document.getElementById("staffName").value;
  email = document.getElementById("email").value;
  phone = parseInt(document.getElementById("phone").value);
  q1o1 = parseInt(document.getElementById("q1o1").value);
  q1o2 = parseInt(document.getElementById("q1o2").value);
  q1o3 = parseInt(document.getElementById("q1o3").value);
  q2o1 = parseInt(document.getElementById("q2o1").value);
  q2o2 = parseInt(document.getElementById("q2o2").value);
  q2o3 = parseInt(document.getElementById("q2o3").value);
  q3o1 = parseInt(document.getElementById("q3o1").value);
  q3o2 = parseInt(document.getElementById("q3o2").value);
  q3o3 = parseInt(document.getElementById("q3o3").value);
  q4o1 = parseInt(document.getElementById("q4o1").value);
  q5o1 = parseInt(document.getElementById("q5o1").value);
  q5o2 = parseInt(document.getElementById("q5o2").value);
  q5o3 = parseInt(document.getElementById("q5o3").value);
  q6o1 = parseInt(document.getElementById("q6o1").value);
  q6o2 = parseInt(document.getElementById("q6o2").value);
  q6o3 = parseInt(document.getElementById("q6o3").value);
  q7o1 = parseInt(document.getElementById("q7o1").value);
  q7o2 = parseInt(document.getElementById("q7o2").value);
  q7o3 = parseInt(document.getElementById("q7o3").value);
  q8o1 = parseInt(document.getElementById("q8o1").value);
  q8o2 = parseInt(document.getElementById("q8o2").value);
  q8o3 = parseInt(document.getElementById("q8o3").value);
  // console.log(
  //   companyName,
  //   staffName,
  //   email,
  //   phone,
  //   q1o1,
  //   q1o2,
  //   q1o3,
  //   q2o1,
  //   q2o2,
  //   q2o3,
  //   q3o1,
  //   q3o2,
  //   q3o3,
  //   q4o1,
  //   q5o1,
  //   q5o2,
  //   q5o3,
  //   q6o1,
  //   q6o2,
  //   q6o3,
  //   q7o1,
  //   q7o2,
  //   q7o3,
  //   q8o1,
  //   q8o2,
  //   q8o3
  // );
  Swal.fire({
    position: "center",
    title: "Enviando información",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading()
    }
  });

  var data = JSON.stringify({
    companyName: `${companyName}`,
    staffName: `${staffName}`,
    email: `${email}`,
    phone: `${phone}`,
    q1o1: `${q1o1}`,
    q1o2: `${q1o2}`,
    q1o3: `${q1o3}`,
    q2o1: `${q2o1}`,
    q2o2: `${q2o2}`,
    q2o3: `${q2o3}`,
    q3o1: `${q3o1}`,
    q3o2: `${q3o2}`,
    q3o3: `${q3o3}`,
    q4o1: `${q4o1}`,
    q5o1: `${q5o1}`,
    q5o2: `${q5o2}`,
    q5o3: `${q5o3}`,
    q6o1: `${q6o1}`,
    q6o2: `${q6o2}`,
    q6o3: `${q6o3}`,
    q7o1: `${q7o1}`,
    q7o2: `${q7o2}`,
    q7o3: `${q7o3}`,
    q8o1: `${q8o1}`,
    q8o2: `${q8o2}`,
    q8o3: `${q8o3}`,
  });

  var config = {
    method: "post",
    url: "https://responses-5389.restdb.io/rest/responses",
    headers: {
      "x-apikey": "63ea9066478852088da681dd",
      "Content-type": "application/json",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Información enviada, ya puede cerrar esta ventana",
        showConfirmButton: false,
        confirmButtonColor: "#3085d6",
      });
      document.getElementById("deleteDiv").remove();
      let divToInsertHTMLTags = document.getElementById("divToInsertHTMLTags");
      let notification = document.createElement("div");
      notification.innerHTML = `<h4 class="text-center">Gracias por llenar la encuesta, ya puede cerrar esta ventana.</h4>`;
      divToInsertHTMLTags.insertAdjacentElement("beforeend", notification);
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "¡Algo salió mal!",
        confirmButtonColor: "#3085d6",
      });
    });
}
