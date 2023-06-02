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

const jobs = [
  "profesion1",
  "profesion2",
  "profesion3",
  "profesion4",
  "profesion5",
  "profesion6",
  "profesion7",
  "profesion8",
  "profesion9",
];

const locations = [
  "provincia1",
  "provincia2",
  "provincia3",
  "provincia4",
  "provincia5",
];

generateTopFormOptions(jobs, locations);

generateBottomFormOptions(jobs, locations);

() => {
  // Fetch a la API de Woranz //
  // const locationSelect = (document.getElementById("locations").innerHTML =
  //   generateOptions(locations));
  // const jobSelect = (document.getElementById("locations").innerHTML =
  //   generateOptions(jobs));
};
