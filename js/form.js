const currentDate = new Date();

const getYear = currentDate.toLocaleString("default", { year: "numeric" });
const getMonth = currentDate.toLocaleString("default", { month: "2-digit" });
const getDay = currentDate.toLocaleString("default", { day: "2-digit" });

const dateFormat = getYear + "-" + getMonth + "-" + getDay;

const allDateStart = document.querySelectorAll(".date-start");

allDateStart.forEach((input) => {
  input.min = dateFormat;
  input.value = dateFormat;
});

const allDateEnd = document.querySelectorAll(".date-end");

allDateEnd.forEach((input) => {
  input.min = dateFormat;
});

const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const idOcupacion = e.target.querySelector(".select-job").value;
    const idProvincia = e.target.querySelector(".select-location").value;
    const cantidadDeAsegurados = e.target.querySelector(".amount").value;
    const fechaInicio = e.target.querySelector(".date-start").value;
    const fechaFin = e.target.querySelector(".date-end").value;

    console.log(idOcupacion);
    console.log(idProvincia);
    console.log(cantidadDeAsegurados);
    console.log(fechaInicio);
    console.log(fechaFin);

    // return Swal.fire({
    //   title: "¡Éxito!",

    //   html: `
    //     <div>Profesión: ${job}</div>
    //     <br>
    //     <div>Provincia: ${location}</div>
    //     <br>
    //     <div>Cantidad de asegurados: ${amount}</div>
    //     <br>
    //     <div>Fecha de inicio: ${dateStart}</div>
    //     <br>
    //     <div>Fecha de finalización: ${dateEnd}</div>
    //     `,
    //   icon: "success",
    //   confirmButtonText: "OK",
    // });

    // Hago un redirect a Woranz Live, comunicando la información proveniente del formulario a través de query params  //

    // window.location.href = `https://live.woranz.com/ap/inicio?id=252&idProductor=${idProductor}&idOcupacion=${idOcupacion}&idProvincia=${idProvincia}&qty=${cantidadDeAsegurados}&desde=${fechaInicio}&hasta=${fechaFin}`;
  });
});
