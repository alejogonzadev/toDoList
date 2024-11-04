
const listaTareas = document.getElementById('listaTareas');
const agregarTareaBtn = document.getElementById('agregarTarea');
const nuevaTareaInput = document.getElementById('nuevaTarea');

// Cargar tareas desde localStorage
document.addEventListener('DOMContentLoaded', cargarTareas);

agregarTareaBtn.addEventListener('click', agregarTarea);

function agregarTarea() {
    const tareaTexto = nuevaTareaInput.value;
    if (tareaTexto === '') return;

    const li = document.createElement('li');

    li.classList.add("list-item");

    li.textContent = tareaTexto;

    // Botón de eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Delete';

    btnEliminar.style.backgroundColor = "red";
    btnEliminar.style.color = "white";
    btnEliminar.style.padding = "5px 10px";
    btnEliminar.style.border = "none";
    btnEliminar.style.borderRadius = "3px";
    btnEliminar.style.cursor = "pointer";
    btnEliminar.style.marginLeft = "20px";
    btnEliminar.style.marginBottom = "20px" 


    btnEliminar.classList.add("boton-responsivo");
    

    btnEliminar.onclick = () => {
        li.remove();
        guardarTareas();
    };
    li.appendChild(btnEliminar);

    //Boton de completar 

    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = 'Completed';

    btnCompletar.style.backgroundColor = "green";
    btnCompletar.style.color = "white";
    btnCompletar.style.padding = "5px 10px";
    btnCompletar.style.border = "none";
    btnCompletar.style.borderRadius = "3px";
    btnCompletar.style.cursor = "pointer";
    btnCompletar.style.marginLeft = "20px";
    btnCompletar.style.marginBottom = "20px"  


    btnCompletar.classList.add("boton-responsivo");
    

    btnCompletar.onclick = () => {
        li.remove();
        guardarTareas();
    };
    li.appendChild(btnCompletar);

    // // Marcar como completada
    // li.onclick = () => {
    //     li.classList.toggle('completed');
    //     guardarTareas();
    // };

    listaTareas.appendChild(li);
    nuevaTareaInput.value = '';
    guardarTareas();
}


function guardarTareas() {
    const tareas = Array.from(listaTareas.children).map(li => ({
        text: li.childNodes[0].textContent,
        completed: li.classList.contains('completed')
    }));
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea.text;
        if (tarea.completed) li.classList.add('completed');

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Delete';

        btnEliminar.style.backgroundColor = "red";
        btnEliminar.style.color = "white";
        btnEliminar.style.padding = "5px 10px";
        btnEliminar.style.border = "none";
        btnEliminar.style.borderRadius = "3px";
        btnEliminar.style.cursor = "pointer";
        btnEliminar.style.marginLeft = "20px";
        btnEliminar.style.marginBottom = "20px"
        
        btnEliminar.classList.add("boton-responsivo");

        btnEliminar.onclick = () => {
            li.remove();
            guardarTareas();
        };
        li.appendChild(btnEliminar);

        const btnCompletar = document.createElement('button');
        btnCompletar.textContent = 'Completed';

        btnCompletar.style.backgroundColor = "green";
        btnCompletar.style.color = "white";
        btnCompletar.style.padding = "5px 10px";
        btnCompletar.style.border = "none";
        btnCompletar.style.borderRadius = "3px";
        btnCompletar.style.cursor = "pointer";
        btnCompletar.style.marginLeft = "20px";
        btnCompletar.style.marginBottom = "20px"
        
        btnCompletar.classList.add("boton-responsivo");
    

        btnCompletar.onclick = () => {  
            li.remove();
            guardarTareas();
        };
        li.appendChild(btnCompletar);


        // li.onclick = () => {
        //     li.classList.toggle('completed');
        //     guardarTareas();
        // };

        listaTareas.appendChild(li);
    });
}