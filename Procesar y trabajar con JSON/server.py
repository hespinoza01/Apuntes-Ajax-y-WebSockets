from flask import Flask, make_response, render_template as render
from json import dumps
from time import sleep

app = Flask(__name__)


result = {
    'name': 'Harold Espinoza',
    'age': 21,
    'email': 'haroldestru@gmail.com',
    'number': '0000-0000'
}


@app.route('/')
def index():
    return render('index.html')


# retornando una cadena como respuesta para ser procesada y convertida a  un array de objetos JSON
@app.route('/json')
def json_route():
    sleep(4)

    return """
        [{
            "name": "Harold Espinoza",
            "age": 21,
            "email": "haroldestru@gmail.com",
            "number": "0000-0000"
        },
        {
            "name": "Harold Espinoza",
            "age": 21,
            "email": "haroldestru@gmail.com",
            "number": "0000-0000"
        }]
    """


"""
# retornando un objeto JSON como respuesta
@app.route('/json')
def json_route():
    response = make_response(dumps(result, indent=4, sort_keys=True))
    response.headers['content-type'] = 'application/json; charset=utf-8'

    sleep(5)

    return response
"""

if __name__ == '__main__':
    app.run(
        debug=True,
        port=8080
    )