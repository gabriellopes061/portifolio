document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fotos a");

    
    elementos.forEach((elemento, index) => {
        
        elemento.addEventListener("mouseenter", function () {
            elemento.classList.add("animate__animated", "animate__fadeIn");

            
            if (index === 0) {
                elemento.style.setProperty('--animate-duration', '4s');
            } else if (index === 1) {
                elemento.style.setProperty('--animate-duration', '4s');
            } else if (index === 2) {
                elemento.style.setProperty('--animate-duration', '4s');
            }
        });

        
        elemento.addEventListener("mouseleave", function () {
            elemento.classList.remove("animate__animated", "animate__fadeIn");
        });
    });
});

