// BONUS: Hago que el target de ciertos enlaces NO sea _blank en viewports menores a 768px //

if (window.matchMedia("(max-width: 768px)").matches) {
  const links = document.querySelectorAll(".link-footer");
  links.forEach((link) => {
    link.target = "_self";
  });
}
