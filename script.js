document.body.classList.add("animazioni-attive");

const sezioneBrainFrame = document.querySelector(".introduzione-progetto");

if (sezioneBrainFrame) {
    const osservatore = new IntersectionObserver(
        (elementi) => {
            elementi.forEach((elemento) => {
                if (elemento.isIntersecting) {
                    sezioneBrainFrame.classList.add("in-vista");
                    osservatore.unobserve(sezioneBrainFrame);
                }
            });
        },
        {
            threshold: 0.25
        }
    );

    osservatore.observe(sezioneBrainFrame);
}
