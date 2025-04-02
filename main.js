//Recorre cada uno de las clases nav-link
document.querySelectorAll('.nav-link').forEach(link=>{
    //Agrega evento click a da uno
    link.addEventListener('click', function(e){
        //Evita mostrar el enlace
        e.preventDefault();
        
        //Obtención del id
        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);

        //Hacer scroll al id del elemento en cuestión
        window.scrollTo({
            top: targetElement.offsetTop-20,
            behavior: 'smooth'
        });
    });
});
