const generateTopFormOptions = (jobs, locations) => {
  const jobSelect = document.getElementById("top-select-job");
  const locationSelect = document.getElementById("top-select-location");

  const firstJobSelectOption = document.createElement("option");
  firstJobSelectOption.value = "";
  firstJobSelectOption.innerText = "Seleccione...";
  jobSelect.appendChild(firstJobSelectOption);

  const firstLocationSelectOption = document.createElement("option");
  firstLocationSelectOption.value = "";
  firstLocationSelectOption.innerText = "Seleccione...";
  locationSelect.appendChild(firstLocationSelectOption);

  jobs.forEach((element) => {
    let option = document.createElement("option");
    option.value = `${element}`;
    option.innerText = `${element}`;
    jobSelect.appendChild(option);
  });

  locations.forEach((element) => {
    let option = document.createElement("option");
    option.value = `${element}`;
    option.innerText = `${element}`;
    locationSelect.appendChild(option);
  });
};

const generateBottomFormOptions = (jobs, locations) => {
  const jobSelect = document.getElementById("bottom-select-job");
  const locationSelect = document.getElementById("bottom-select-location");

  const firstJobSelectOption = document.createElement("option");
  firstJobSelectOption.value = "";
  firstJobSelectOption.innerText = "Seleccione...";
  jobSelect.appendChild(firstJobSelectOption);

  const firstLocationSelectOption = document.createElement("option");
  firstLocationSelectOption.value = "";
  firstLocationSelectOption.innerText = "Seleccione...";
  locationSelect.appendChild(firstLocationSelectOption);

  jobs.forEach((element) => {
    let option = document.createElement("option");
    option.value = `${element}`;
    option.innerText = `${element}`;
    jobSelect.appendChild(option);
  });

  locations.forEach((element) => {
    let option = document.createElement("option");
    option.value = `${element}`;
    option.innerText = `${element}`;
    locationSelect.appendChild(option);
  });
};

// const jobs = [
//   "profesion1",
//   "profesion2",
//   "profesion3",
//   "profesion4",
//   "profesion5",
//   "profesion6",
//   "profesion7",
//   "profesion8",
//   "profesion9",
// ];

// const locations = [
//   "provincia1",
//   "provincia2",
//   "provincia3",
//   "provincia4",
//   "provincia5",
// ];

// const algo = async () => {
//   // Fetch a la API de Woranz //

//   const jobs = await fetch(
//     "https://api.api-ninjas.com/v1/cars?limit=2&model=camry",
//     {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         "X-Api-Key": "YOUR_API_KEY",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     }
//   );

//   const jsonData = await jobs.json();

//   console.log(jsonData);

//   // generateTopFormOptions(jobs, locations);

//   // generateBottomFormOptions(jobs, locations);
// };

// algo();
