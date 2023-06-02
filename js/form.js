const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const job = e.target.querySelector(".select-job").value;
    const location = e.target.querySelector(".select-location").value;
    const amount = e.target.querySelector(".amount").value;
    const dateStart = e.target.querySelector(".date-start").value;
    const dateEnd = e.target.querySelector(".date-end").value;

    console.log(job);
    console.log(location);
    console.log(amount);
    console.log(dateStart);
    console.log(dateEnd);

    if (!job || !location || !amount || !dateStart || !dateEnd)
      return Swal.fire({
        title: "¡Error!",
        iconColor: "#d30c0c",
        text: "Por favor, complete todos los datos antes de continuar",
        icon: "error",
        confirmButtonText: "OK",
      });
    else
      return Swal.fire({
        title: "¡Éxito!",

        html: `
        <div>Profesión: ${job}</div>
        <br>
        <div>Provincia: ${location}</div>
        <br>
        <div>Cantidad de asegurados: ${amount}</div>
        <br>
        <div>Fecha de inicio: ${dateStart}</div>
        <br>
        <div>Fecha de finalización: ${dateEnd}</div>
        `,
        icon: "success",
        confirmButtonText: "OK",
      });

    // Llamada GET o POST a la API, con la información capturada en el formulario //
  });
});
