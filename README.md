### django-react

Repo workshop FullStack Women Developer

### Pasos

## Unix
## Backend
- instalar pyenv
- descargar la version de python requerida
- mkdir django-react
- dentro del folder django-react
- mkdir backend
- dentro del folder backend
- mkdir .venv
- instalar poetry
- correr el comando
    ```bash
    poetry env use <tu_ruta_a_python aca>
    ```
- Instalar las dependencias:
    ```bash
    poetry install
    ```
- Activar entorno virtual:
    ```bash
    source .venv/bin/activate
    ```
- Iniciar projecto backend:
    ```bash
    django-admin startproject backend
    ```
- Correr el servidor django:
    ```bash
    python3 manage.py runserver
    ```
- Crear una nueva aplicacion:
    ```bash
    python3 manage.py startapp <nombre_app>
    ```
- Crear archivo de migraciones (luego de definir el modelo):
    ```bash
    python3 manage.py makemigrations <nombre_modelo>
    ```
- Aplicar los cambios en la bd:
    ```bash
    python3 manage.py migrate <nombre_modelo>
    ```
- Crear el superusuario:
    ```bash
    python3 manage.py createsuperuser
    ```

- Nota
    - Desactivar entorno virtual:
        **exit** o **deactivate**
## Frontend
- npx create-react-app frontend
- npm i bootstrap axios


## Ejecucion

## Backend
- Correr el servidor django:
python3 manage.py runserver
- Una vez arriba:
    ```
    Panel administrativo -> http://localhost:8000/admin/
    Api List -> http://localhost:8000/api/cientificas/
    Api Elemento -> http://localhost:8000/api/cientificas/1
    ```
## Frontend
- En el folder frontend
- npm start
- Una vez arriba:
    ```
    Pagina inicial -> http://localhost:3000
    ```