/* Agrego clase "animated" al #form-top al clickear en el correspondiente enlace del header */

const link = document.querySelector("#link-form");

link.addEventListener("click", () => {
  const form = document.querySelector("#form-top");
  form.classList.add("animated");
  /* Elimino la clase luego de 1.75 seg, para que pueda volver a animarse en caso de necesidad */
  setTimeout(() => {
    form.classList.remove("animated");
  }, 1750);
});

/* Obtengo la fecha actual (en el formato necesario), para los formularios */

const currentDate = new Date();

/* endDate será la fecha de finalización, 1 mes más tarde que la actual */

const endDate = new Date(new Date().setDate(currentDate.getDate() + 30));

/* Obtengo por separado cada año (YYYY), mes (MM) y día (DD) */

const getCurrentDateYear = currentDate.toLocaleString("default", {
  year: "numeric",
});
const getCurrentDateMonth = currentDate.toLocaleString("default", {
  month: "2-digit",
});
const getCurrentDateDay = currentDate.toLocaleString("default", {
  day: "2-digit",
});

const getEndDateYear = endDate.toLocaleString("default", {
  year: "numeric",
});
const getEndDateMonth = endDate.toLocaleString("default", {
  month: "2-digit",
});
const getEndDateDay = endDate.toLocaleString("default", {
  day: "2-digit",
});

/* Modifico el formato de ambas, necesario para el form (YYYY-MM-DD) */

const definitiveCurrentDate =
  getCurrentDateYear + "-" + getCurrentDateMonth + "-" + getCurrentDateDay;

const definitiveEndDate =
  getEndDateYear + "-" + getEndDateMonth + "-" + getEndDateDay;

/* Inserto el valor de currentDate en el DOM, tanto como valor mínimo como inicial, en todos los inputs de clase "date-start" */

const allDateStart = document.querySelectorAll(".date-start");

allDateStart.forEach((input) => {
  input.min = definitiveCurrentDate;
  input.value = definitiveCurrentDate;
});

/* Inserto el valor de endDate en el DOM, como valor inicial, en todos los inputs de clase "date-end" */
/* El valor mínimo sigue siendo currentDate */

const allDateEnd = document.querySelectorAll(".date-end");

allDateEnd.forEach((input) => {
  input.min = definitiveCurrentDate;
  input.value = definitiveEndDate;
});

// PRODUCTORES //

const productores = [
  "recaFQbxlISvporVL",
  "rec5C8WSODQytEOOs",
  "recP4nVega8nUaiWd",
  "recfv7KOxihcc6rgy",
  "recxC3zppvddzuDUE",
  "recmjxqBYWsoyvnhn",
  "rec4ZaLa2TBF6q151",
  "rectDtn77DLLWDsOy",
  "recyJzLURQnRpDsDC",
  "recpqcq1GYSbhIg4Y",
  "recEPHMss3Zowlyvj",
  "recWnBmogGq6vfR6d",
  "recPsMdS5D5HcMyyr",
  "rec8YesyNft9ZVlXm",
  "recwl2YI571WRune8",
  "recT4UpRheSAALHNN",
  "recPogzPpVmHlxmu9",
  "recvx5GS4iSJDRlcN",
  "recIZMXTNswhXOoqw",
  "recwPMIxXueR1UJce",
  "recpvSlSW6V69aK58",
  "recYd6bSxN179YiVx",
  "recfIYkdMErKMTkjN",
  "recG5w2B0VqEfHxsi",
  "recav7cN62XCxDQs2",
  "recOXWkzA5oBajN1l",
  "recvPBlq7wMyCtK6F",
  "rec10vpnTKyhTele4",
  "recdwZI5th5zP2MqE",
  "reckd6z39xpNHH5Q7",
  "recFq0MAXxDLd99xX",
  "recCATgHlXRfSUY0H",
  "recj4L9aHeYaUFBp5",
  "recqdSjeV4dsos3Ak",
  "recr8Y6eJaSbSybBn",
  "recjjBrnhHUUr8mAz",
  "reckREuL2ON5I0wpV",
  "rec2Bj2RPVfW75DIN",
  "recRpbUc6ZPnYXxNz",
  "recgKLWLENCowQelX",
  "recf8FlWydKEywgE4",
  "recWF13yl41axrQry",
  "rec18Vrr0osQRIMDV",
  "recrtD3nLpipIhZS8",
  "receLMP6RYffBnULU",
  "recPm3d2fJphSw0KI",
  "recsOPfgdiPj4sfS7",
  "recvCNZpxlKAo6bNy",
  "recwOIVxY9itypALJ",
  "recleDnJ5Y4kyNHxc",
  "recqXsypmpV1cpBz4",
  "rec8v1loAKyGl0Riz",
  "reczDDLhNOnEi1ViL",
  "rec4k2vH9tdGHmYoj",
  "rec3FVnYoSyJL15cc",
  "recnmvv4njItXIB6Y",
  "recKKFbC3CKciUdFR",
  "recLabKFDbaZEn2Ry",
  "reczXnQkEsNaeTEiD",
  "rechqUkGmOWu0wtBc",
  "recBswdXA70BsfbK7",
  "recTwI1XDCkoXevdD",
  "recUOMCfFTiextWss",
  "recZzypFjB0DqPyJh",
  "recCaBuBC1eGMHGuQ",
  "recOm7HXzEPWAtCEU",
  "recL2P2QuNCwzHSq6",
  "recvTyDRN8xBnm7LQ",
  "rec4cmpy8QS0AoIj5",
  "recCosxup3x6YdkF1",
  "recQK6Fwur7owXj6h",
  "recAuFQYh1ee6JY09",
  "rec4WpoiTk6xWEYdp",
  "rec1uM8opLgVtCxdx",
  "recVDedB3uXAXFnEy",
  "rec8FveSmomugAIIc",
  "recAMpKx3UAqeq4DU",
  "recPUEKizmA7UcZLM",
  "rec34qvvvi8Czc2EY",
  "recnagRSIGh2URbfT",
  "rec1JClPpoQHyLX9w",
  "recSatwzH4U6fDEY2",
  "recC8qYRVuNZROfGG",
  "recADFcKHBY1PXYbd",
  "rec2bS77qwGtIUS96",
  "rec6jZmv0kNOgpAUh",
  "rec57GmVytNvRkl96",
  "recUpu3fGd8BZiNkw",
  "recHpqbhbVKHvuk9d",
  "recpvPywQ714IJaG2",
  "rectaDmrleB2vzS8Z",
  "recC04OASm9Odzyme",
  "recYmjGLCQK5r8OQb",
  "recoi9pL1W4uzIoVU",
  "recLkfpB9iv0bWLeQ",
  "recpkvV9vjcDxbAhp",
  "recknmOmcn0jo3MYD",
  "reclUsHfn8mjaAMrb",
  "recLRXOvApcxMzrzc",
  "recplAzJ3mSpqjsCL",
  "recls5q7VEaunwEkV",
  "recvvfikrVdMQJ2d7",
  "recTf8CRd893FV6rq",
  "reck1zRKJvNtOYsJp",
  "recmqUoLMA9DbN92U",
  "recVabN5zLQ3F1iOW",
  "recczjClryqSVNsJx",
  "recb9ehEQWN93gn17",
  "recEHU1qbc1FYBdAs",
  "recyI2A12o6zpE9aM",
  "recN7SKQqx9xg62Cp",
  "recWpThBxEj4Tqxa4",
  "recQ3Tpc86uuCBMGj",
  "recfKxNYCAZJuTcP2",
  "recYUVFybPWKIdNEY",
  "recP8rPZn0NOHsxYI",
  "recvGayLn5gtHl9Y2",
  "recuvTZk64palZYR7",
  "recru0sQNC5v2NcQ6",
  "recjPwrCYGHMaL67Q",
  "rec2W8h0GYUsX1UxJ",
  "rec1gqBP5ytQcJfGp",
  "rec46dtXDtXgcxBRb",
  "recVnWaACPTuBmp5M",
  "reck4Qvu8L1wrcjni",
];

// Función para seleccionar un productor de manera aleatoria //

const seleccionarProductorAlAzar = (productores) => {
  const indice = Math.floor(Math.random() * productores.length);

  return productores[indice];
};

// Defino el evento onSubmit para los 2 formularios de la landing //

const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capturo los values provenientes del form //

    const idOcupacion = e.target.querySelector(".select-job").value;
    const idProvincia = e.target.querySelector(".select-location").value;
    const cantidadDeAsegurados = e.target.querySelector(".amount").value;
    const fechaInicio = e.target.querySelector(".date-start").value;
    const fechaFin = e.target.querySelector(".date-end").value;

    // Asigno un productor, de manera aleatoria //

    const idProductor = seleccionarProductorAlAzar(productores);

    // Hago un redirect a Woranz Live, comunicando la información proveniente del formulario a través de query params  //

    window.location.href = `https://live.woranz.com/ap/inicio?id=252&idProductor=${idProductor}&idOcupacion=${idOcupacion}&idProvincia=${idProvincia}&cantidad=${cantidadDeAsegurados}&desde=${fechaInicio}&hasta=${fechaFin}&bd=true`;
  });
});

// BONUS: Hago que el target de ciertos enlaces NO sea _blank en viewports menores a 768px //

if (window.matchMedia("(max-width: 768px)").matches) {
  const links = document.querySelectorAll(".link-footer");
  links.forEach((link) => {
    link.target = "_self";
  });
}
