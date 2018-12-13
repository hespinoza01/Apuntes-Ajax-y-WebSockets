btn.addEventListener('click', e => {
    loadData();
});

const loadData = async () => {
    const response = await fetch('/persons.json');

    if(response.status === 200){
        const data = await response.json();
        draw(data);
    }else{
        console.error('No se encontró la información');
    }
};

const draw = data => {
    let table = document.createElement('table');
    table.insertAdjacentHTML('beforeend', `
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Correo</th>
                    <th>Número</th>
                </tr>
            `);
    data.forEach(item => {
        let {name, age, email, number} = item;
        let column = `
                    <tr>
                        <td>${name}</td>
                        <td>${age}</td>
                        <td>${email}</td>
                        <td>${number}</td>
                    </tr>`;

        table.insertAdjacentHTML('beforeend', column);
    });

    content.appendChild(table);
};