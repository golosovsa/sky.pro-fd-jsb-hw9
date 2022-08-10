document.addEventListener("DOMContentLoaded", function(event) {

    const form = document.querySelector(".form");

    form.addEventListener('submit', (event) => {
        const target = event.target;
        const select = target.querySelector(".form__input_select");
        const field = select.parentNode;
        const value = select.value;

        if (value === "-") {
            event.preventDefault();
            field.classList.add("form__field_highlight");
            select.addEventListener("change", event => {
                const target = event.target;
                const field = target.parentNode;

                if (target.value === "-") {
                    field.classList.add("form__field_highlight");
                } else {
                    field.classList.remove("form__field_highlight");
                }
            });
            return;
        }
    });

});