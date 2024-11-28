
const demoPlanEstudio = [
    {
        "id": 1,
        "bloque": "I",
        "asignaturas": [
            {
                "id": "mt101",
                "nombre": "Matemáticas I",
                "creditos": 5,
                "orden": 0,
            },
            {
                "id": "mt301",
                "nombre": "Física I",
                "creditos": 5,
                "orden": 1,
            },
            {
                "id": 'qm101',
                "nombre": "Química I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'es101',
                "nombre": "Español",
                "creditos": 3,
                "orden": 3
            },
            {
                "id": 'if101',
                "nombre": "Introducción a Ciencias de la Computación",
                "creditos": 3,
                "orden": 4
            },
        ]
    },
    {
        "id": 2,
        "bloque": "II",
        "asignaturas": [
            {
                "id": "mt102",
                "nombre": "Precálculo",
                "creditos": 5,
                "orden": 0,
                "requisitos": ['mt101']
            },
            {
                "id": "fi101",
                "nombre": "Filosofía",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'ad101',
                "nombre": "Administración I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'es102',
                "nombre": "Expresión Oral y Escríta",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['es101']
            },
            {
                "id": 'if102',
                "nombre": "Fundamento y Lógica de la Programación",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if101']
            },
        ]
    },
    {
        "id": 3,
        "bloque": "III",
        "asignaturas": [
            {
                "id": "mt103",
                "nombre": "Cáclulo I",
                "creditos": 5,
                "orden": 0,
                "requisitos": ['mt102']
            },
            {
                "id": "fi102",
                "nombre": "El Hombre frente a la Vida",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['fi101']
            },
            {
                "id": 'ad102',
                "nombre": "Administración II",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['ad101']
            },
            {
                "id": 'if103',
                "nombre": "Programación Estructurada I",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['if102']
            },
            {
                "id": 'if200',
                "nombre": "Analisis y Diseño de Software",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if102']
            },
        ]
    }
];


class PlanDeEstudio{
    planDeEstudio=[];
    container = null;
    constructor( planDeEstudio, containerSelector = "main"){
        if (!planDeEstudio) {
            throw new Error("Plan de Estudio es requerido.");
        }
        const tmpContainer = document.querySelector(containerSelector);
        if (!tmpContainer) {
            throw new Error("El contenedor no se encuentra");
        }
        this.planDeEstudio = planDeEstudio;
        this.container = tmpContainer;
        this.generateUI();
    }
    generateUI(){
        this.container.classList.add('plan');
        this.planDeEstudio.forEach( (bloque) => {
            this.container.appendChild(
                this.generateBloque(bloque)
            );
        } );

    }
    generateBloque(bloque){
        const bloqueUI = document.createElement("SECTION");
        bloqueUI.classList.add('bloque');
        bloqueUI.setAttribute("id", `blq_${bloque.id}`);
        
        const bloqueLabel = document.createElement("DIV");
        bloqueLabel.classList.add('label');
        bloqueLabel.innerHTML = bloque.bloque;
        bloqueUI.appendChild(bloqueLabel);

        const asignaturas = document.createElement("DIV");
        asignaturas.classList.add('asignaturas');
        bloque.asignaturas.forEach(
            (asignatura)=>{
                asignaturas.appendChild(this.generateAsignatura(asignatura));
            }
        );
        bloqueUI.appendChild(asignaturas);
        return bloqueUI;
    }

    generateAsignatura(asignatura){
        const asignaturaUI = document.createElement("DIV");
        asignaturaUI.classList.add('asignatura');
        asignaturaUI.setAttribute('id', asignatura.id);
        if(asignatura.requisitos){
            asignaturaUI.setAttribute(
                'data-requisitos',
                JSON.stringify(asignatura.requisitos)
            );
        }
        asignaturaUI.innerHTML = `<strong>${asignatura.nombre}
            <br/>(${asignatura.id})
            </strong>
            <br/>
            Créditos: ${asignatura.creditos}`;
        return asignaturaUI;
    }
}
