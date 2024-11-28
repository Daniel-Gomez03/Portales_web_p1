document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const inputs = document.querySelectorAll(".input-required");
    let valid = true;

    inputs.forEach((input) => {
        const errorSpan = input.nextElementSibling;

        errorSpan.textContent = "";

        if (!input.checkValidity()) {
            valid = false;
            errorSpan.textContent = input.title || "Este campo es obligatorio.";
        }

        if (input.id === "txtTelefono") {
            const phonePattern = /^[389]\d{7}$/;
            if (!phonePattern.test(input.value)) {
                valid = false;
                errorSpan.textContent = "El número debe iniciar con 3, 8 o 9 y tener 8 dígitos.";
            }
        }

        if (input.id === "txtCorreo") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            if (!emailPattern.test(input.value)) {
                valid = false;
                errorSpan.textContent = "Ingrese un correo válido.";
            }
        }
    });

    if (valid) {
        alert("Formulario enviado correctamente.");
        this.submit(); 
    } else {
        alert("Por favor, revise los campos resaltados.");
    }
});
