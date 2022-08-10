function HighlightIfEmpty(element) {
    const inputs = element.querySelectorAll(".form__input");

    let flag = false;

    inputs.forEach(element => {
        if (!element.value) {
            element.classList.add("form__input_highlight");
            element.addEventListener("change", event => {
                const target = event.target;
                if (!target.value) {
                    target.classList.add("form__input_highlight");
                } else {
                    target.classList.remove("form__input_highlight");
                }
            });
       
            flag = true;
        }
    });

    return flag;
}

document.addEventListener("DOMContentLoaded", function(event) {
    
    const form = document.querySelector(".form");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target;

        if (HighlightIfEmpty(target)) {
            // TODO: do something with that
            return
        }

        console.log("Send form data...");
        // TODO: send form data
    });

});