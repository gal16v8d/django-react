### django-react

Repo workshop FullStack Women Developer

### Pasos

## Unix
## Backend
- sudo apt install python3-venv
- pip3 install pipenv
- mkdir django-react
- dentro del folder django-react
- mkdir .venv
- crear archivo Pipfile con el siguiente contenido:
    ```
    [[source]]
    url = "https://pypi.python.org/simple"
    verify_ssl = true
    name = "pypi"

    [packages]
    pylint = "*"
    pep8 = "*"
    autopep8 = "*"
    django = "*"
    Pillow = "*"
    djangorestframework = "*"
    django-cors-headers = "*"

    [dev-packages]

    [requires]
    python_version = "3.8"
    ```
- Instalar las dependencias:
pipenv install --skip-lock
- Activar entorno virtual:
pipenv shell
- Desactivar entorno virtual:
exit
deactivate
- Iniciar projecto backend:
django-admin startproject backend
- Navegar al directorio:
cd backend
- Correr el servidor django:
python3 manage.py runserver
- Crear una nueva aplicacion:
python3 manage.py startapp <nombre_app>
- Crear archivo de migraciones (luego de definir el modelo):
python3 manage.py makemigrations <nombre_modelo>
- Aplicar los cambios en la bd:
python3 manage.py migrate <nombre_modelo>
- Crear el superusuario:
python3 manage.py createsuperuser

## Frontend
- npx create-react-app frontend
- npm i bootstrap axios


## Ejecucion

## Backend
- Correr el servidor django:
python3 manage.py runserver
- Una vez arriba:
Panel administrativo -> http://localhost:8000/admin/
Api List -> http://localhost:8000/api/cientificas/
Api Elemento -> http://localhost:8000/api/cientificas/1

## Frontend
- En el folder frontend
- npm start
- Una vez arriba:
Pagina inicial -> http://localhost:3000