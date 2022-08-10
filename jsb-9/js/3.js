document.addEventListener("DOMContentLoaded", function(event) {

    function whoChecked(node) {
        const radios = node.querySelectorAll(".form__input_radio");
        
        for (const element of radios) {
            if (element.checked) {
                return element.value;
            }
        }
        return undefined;
    }

    const form = document.querySelector(".form");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target;
        const message = target.querySelector(".form__message");
        const partOfMessage = message.querySelector(".form__message-text");
        
        let sex = "Кому-то";

        switch (whoChecked(target)) {
            case "man":
                    sex = "Мужчинам";
                break;
            case "woman":
                    sex = "Женщинам";
                break;
        }

        partOfMessage.textContent = sex;
        message.classList.remove("form__message_hidden");
    });

});