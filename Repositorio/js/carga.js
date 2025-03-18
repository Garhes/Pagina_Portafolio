document.addEventListener("DOMContentLoaded", function () {
    const progresses = document.querySelectorAll(".progress");
    progresses.forEach(progress => {
        const width = progress.getAttribute("style").match(/--progress-width:\s*(\d+%)/);
        if (width) {
            setTimeout(() => {
                progress.style.width = width[1]; // Aplica el ancho de la barra de progreso
            }, 100);
        } else {
            console.warn("No se encontró el atributo --progress-width en:", progress);
        }
    });
});
