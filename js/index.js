/*para que navegue por la pagina*/
function goToId(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
}
