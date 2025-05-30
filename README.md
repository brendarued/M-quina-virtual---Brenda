# Máquina virtual - Brenda
# Página de Inicio con Redirección para Acceso Multiusuario 

## Descripción
Este repositorio contiene el código de una página web de inicio simple (`index.html`). El backend (`backend/server/main.js`), desarrollado con Node.js y Express, está configurado para servir esta página de inicio y potencialmente manejar futuras funcionalidades.

Se ha considerado la implementación en un entorno donde múltiples usuarios podrían acceder a través de una máquina virtual.

## Cómo Empezar
1.  **Para ejecutar el backend:**
    * Asegúrate de tener Node.js y npm instalados en tu sistema.
    * Navega a la carpeta `backend` en tu terminal:
      ```bash
      cd backend
      ```
    * Instala las dependencias:
      ```bash
      npm install express mysql cors path
      ```
    * Inicia el servidor:
      ```bash
      node server/main.js
      ```
      o si tienes `nodemon` instalado:
      ```bash
      nodemon server/main.js
      ```
    * La página de inicio (`index.html`) se servirá en la raíz (`/`) y los archivos estáticos (como `styles/style.css`) desde la carpeta `public` dentro de `backend`.

## Uso
Al acceder a la página de inicio (la URL de tu servidor, por ejemplo, `http://tu_servidor:5001`), el botón "Inicio" redirigirá al usuario a `http://10.128.0.5:5001`.

## Tecnologías Utilizadas
* HTML (`backend/public/index.html`)
* CSS (`backend/public/styles/style.css`)
* JavaScript 
* Node.js (`backend`)
* Express (`backend`)
* `mysql` (`backend`)
* `cors` (`backend`)
* `path` (`backend`)

## Autor
Brenda Rueda Sánchez
