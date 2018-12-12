const data = {
    name: 'Harold Espinoza',
    age: 21,
    email: 'haroldestru@gmail.com',
    number: '0000-0000'
};

const setText = value => {
    content.textContent = value;
};

const getData = () => {
    return new Promise((resolve, reject) => {
        setText('Sin resultados');
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};

const showData = () => {
    return new Promise((resolve, reject) => {
        setText('cargando resultados...');
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};

btn.addEventListener('click', () => {
    getData().then(auth => {
            if(auth){
                return showData()
            }
        }).then(user => {
            setText(`${user.name}-${user.age}-${user.email}-${user.number}`);
        });
});