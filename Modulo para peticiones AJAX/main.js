const ajax = request => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(request.method, request.url, true);

        xhr.addEventListener('load', e => {
            if(e.target.status === 200){
                resolve(e.target);
            }else{
                reject(Error(e.target.statusText));
            }
        });
        xhr.addEventListener('error', e => {
            reject(Error('Error in the petition'));
        });

        xhr.send();
    });
};

ajax({method: 'GET', url: '/posts.json'}).then(res => {
    console.log(res.responseText);
}).catch(err => console.log(err));

ajax({method: 'GET', url: '/posts.jon'}).then(res => {
    console.log(res.responseText);
}).catch(err => console.log(err));