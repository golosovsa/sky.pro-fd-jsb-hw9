document.addEventListener("DOMContentLoaded", function(event) {
    
    const form = document.querySelector(".form");
    const checkbox = form.querySelector(".form__input");
    const field = checkbox.parentElement;
    const message = form.querySelector(".form__message");


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target;
        
        
        if (!checkbox.checked) {
            
            field.classList.add("form__field_highlight");
            message.classList.remove("form__message_hidden");
            checkbox.addEventListener("change", (event) => {
                const target = event.target;
                
                if (target.checked) {
                    field.classList.remove("form__field_highlight");
                    message.classList.add("form__message_hidden");
                } else {
                    field.classList.add("form__field_highlight");
                    message.classList.remove("form__message_hidden");
                }
            })

            return
        }

        console.log("Send form data...");
        // TODO: send form data
    });

});