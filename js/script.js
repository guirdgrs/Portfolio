function loadNavbar(){
    // Load navbar.htm
    fetch('elements/navbar.htm')
.then(response => response.text()) // Convert to text
.then(data => {
    // Insert the content of navbar on the element by id
    document.getElementById('navbar-container').innerHTML = data;
})
// If any error occurs
.catch(error => console.error('Ocorreu um erro ao carregar o conteúdo:', error));}

document.addEventListener('DOMContentLoaded', loadNavbar);