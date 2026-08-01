document.body.classList.add("animazioni-attive");


function osservaElemento(selettore, soglia = 0.2) {
    const elemento = document.querySelector(selettore);

    if (!elemento) {
        return;
    }

    const osservatore = new IntersectionObserver(
        (elementi) => {
            elementi.forEach((elementoOsservato) => {
                if (elementoOsservato.isIntersecting) {
                    elemento.classList.add("in-vista");
                    osservatore.unobserve(elemento);
                }
            });
        },
        {
            threshold: soglia
        }
    );

    osservatore.observe(elemento);
}


/* Collage nella pagina BrainFrame */

osservaElemento(".introduzione-progetto", 0.25);


/* Anteprima BrainFrame nella home */

osservaElemento(".brainframe", 0.2);

/* Sezione Pagnottapazza nella home */

osservaElemento(".pagnottapazza", 0.2);

/* Card dei lavori YouTube */

const cardsVideo = document.querySelectorAll(".card-video");

cardsVideo.forEach((card, indice) => {

    card.style.setProperty(
        "--ritardo-card",
        `${indice * 0.12}s`
    );

    const osservatoreCard = new IntersectionObserver(
        (elementi) => {
            elementi.forEach((elementoOsservato) => {
                if (elementoOsservato.isIntersecting) {
                    card.classList.add("in-vista");
                    osservatoreCard.unobserve(card);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    osservatoreCard.observe(card);
});
