document.addEventListener("DOMContentLoaded", function () {
    let bolEdad = true;
    console.log("Iniciando JS", bolEdad);
    let resultado, resultado2;
    resultado = 10 + 30;
    resultado2 = parseFloat("10.9999") + 30;
    console.log("Comparar Operaciones:", { resultado, resultado2 });

    resultado = 10 - 5;
    console.log("Resta", resultado);

    resultado = 10 * 5;
    console.log("Multi", resultado);

    resultado = 10 / 5;
    console.log("Div", resultado);

    resultado = 10 % 3;
    console.log("Módulo", resultado);

    resultado++;
    resultado--;

    resultado += 10;
    resultado -= 5;
    resultado *= 2;
    resultado /= 3;

    let strMensaje = `El resultado: ${resultado}`;
    let strMensaje2 = 'El resultado: ' + resultado;

    let strDoubleQuotes = "Esto es \"UNA CITA Bibliografica\" se debe usar \\ para escapar el simbolo";
    let strSingleQuotes = 'Esto es "UNA CITA Bibliográfica" no se debe usar \ para escapar el simbolo';

    const objPersona = {
        "nombre": "Daniel",
        "apellido": "Gomez",
        "edad": 21,
        "correo": "danielitogomez99@gmail.com"
    }; // JSON OBJECT NOTATION  JSON

    objPersona.edad = 20;

    //const demoEdad = 10;
    //demoEdad = 20;

    const arrPersonas = [];

    arrPersonas.push(objPersona);

    //arrPersonas = [];

    let a = 10;
    let b = "10";
    if (a == b) {
        console.log("Si entro a A == B");
    }
    if (a === b) {
        console.log("Si entro a A === B");
    } else {
        console.log("No entro a A == B");
    }
    if (a != b) {
        console.log("Si entro a A != B");
    } else {
        console.log("No entro a A != B");
    }
    if (a !== b) {
        console.log("Si entro a A !== B");
    } else {
        console.log("No entro a A !== B");
    }

    const strGreaterThan10 = (a > 10) ? "A es mayor a 10" : "A es menor o igual a 10";
    console.log("Ternaria:", strGreaterThan10);

    let strValueSelected = 'ACT'; // ACT| INA | SPN | RTR | CNT
    switch (strValueSelected) {
        case "ACT":
            console.log("SelectedValue:", strValueSelected);
            break;
        case "INA":
            // Epresiones
            break;
        case "SPN":
            // Epresiones
            break;
        default:
            console.log("ERROR", "No hay handlera para expresion");
            // Expresiones
            break;
    }

    // Estructuras de Ciclos o Iteraciones.
    for (let i = 0; i < 10; i++) {
        console.log("Iteracion for: ", i);
    }
    let intWhile = 10;
    while (intWhile >= 0) {
        console.log("Iteracion while: ", intWhile);
        intWhile -= 1;
    }

    let intDoWhile = 50;
    do {
        console.log("Iteración Do While", intDoWhile);
        intDoWhile--;
    } while (intDoWhile < 10);

    const arrColores = ["red", "blue", "green", 123, 255];

    arrColores.forEach(
        (color) => {
            console.log("Color Iterando: ", color);
        }
    );

    const miSlider = new SliderController();

});