const btn = document.getElementById('btnLoadJson');
const responseDiv = document.getElementById('response');
const loaderDiv = document.getElementById('loader');

loaderDiv.style.display = 'none';

btn.addEventListener('click', e => {
    loaderDiv.style.display = 'block';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/json', true);

    xhr.addEventListener('load', x => {
        console.log(x.target);
        switch(x.target.status){
            case 200:
                let results = JSON.parse(x.target.responseText);
                console.log(results);
                draw(results);
                break;

            case 401:
                responseDiv.textContent = 'No estás autorizado para realizar esta acción';
                break;

            case 500:
                responseDiv.textContent = 'Hubo un error en el servidor, por favor, intenta nuevamente';
                break;
        }

        loaderDiv.style.display = 'none';
    });

    xhr.send();
});

Node.prototype.appendChildren = function(...childs){
    childs.forEach(x => {
        this.appendChild(x);
    });
};

const tableCell = (innerText, typeCell="td") => {
    let cell = document.createElement(typeCell);
    cell.innerText = innerText;

    return cell;
};

const draw = data => {
    responseDiv.innerHTML = '';
    let table = document.createElement('table');
    let tableHeaderRow = document.createElement('tr');
    tableHeaderRow.appendChildren(
        tableCell('Nombre', 'th'),
        tableCell('Edad', 'th'),
        tableCell('Correo', 'th'),
        tableCell('Número', 'th')
    );

    table.appendChild(tableHeaderRow);

    data.forEach( x => {
        let {name, age, email, number} = x;

        let row = document.createElement('tr');
        row.appendChildren(
            tableCell(name),
            tableCell(age),
            tableCell(email),
            tableCell(number)
        );

        table.appendChild(row);
    });

    responseDiv.appendChild(table);
};