# Angular User Dashboard

## Descripción
Este proyecto Angular implementa un dashboard que muestra un listado paginado de usuarios, con 5 usuarios por página. Cada usuario en el listado presenta detalles como nombre de usuario, nombre, apellido1, apellido2 y correo electrónico. La aplicación incluye una Searchbar de búsqueda en la parte superior del listado que permite filtrar los resultados por nombre, apellidos y correo electrónico, además de paginación filtrando los resultados de la llamada. 

## Características Principales
- **Listado paginado de usuarios.**
- **Detalles del usuario:** nombre de usuario, nombre, apellido1, apellido2 y correo electrónico.
- **Formulario de búsqueda** para filtrar el listado por nombre, apellidos y correo electrónico.
- Implementación de **carga en lazyload** para optimizar la carga de la aplicación.
- Uso de **Tailwind CSS**.
- Implementación de **señales** para manejar la paginación.
## Tecnologías Utilizadas
- Angular 17
- Tailwind CSS

## Estructura del Proyecto
El proyecto se organiza en componentes stand alone para facilitar la escalabilidad y el mantenimiento. Incluye componentes reutilizables como SearchBar, UserCard, y buttons. El proyecto se presenta en la carpeta dashboard. 

## Llamada a la API
Los datos del listado de usuarios se simulan a través de una llamada http get a una API ficticia, que devuelve un JSON con la estructura adecuada. 

## Instrucciones para Ejecutar el Proyecto
1. Clonar el repositorio desde `https://github.com/Juansa77/angular-users`.
2. Abre una terminal y navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `ng serve --o` para iniciar el servidor de desarrollo.
5. Abre tu navegador y visita `http://localhost:4200/` para ver la aplicación en acción.

