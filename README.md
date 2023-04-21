# REACT FRONTEND PARA EL CONSUMO DE UNA API DE DJANGO

Esta aplicación funciona como proyecto Frontend para visualización de datos en el consumo de una API construida en Django. 
Esta API fue desarrollado por [David Espinosa](github.com/espinosadvlpr) y puede ser visualizado su código y documentación en [este link](https://github.com/espinosadvlpr/django-men-dashboard/). 

## Requisitos para instalación y uso del proyecto

Para poder ejecutar de manera correcta el proyecto de manera local es necesario tener instalado el stack de `node` y `npm`. 
Esto puede ser validado desde una consola haciendo uso de los siguientes comandos

**Node**

    node --version
    v19.8.1

**NPM**

    npm --version
    8.19.2

Además de esto, como se menciona en la descripción, este proyecto sirve como visualizador de datos de la API dada en [este link](https://github.com/espinosadvlpr/django-men-dashboard/). Por lo tanto, para visualizar el proyecto correctamente, se debe estar corriendo la API tal como se especifica en su respectiva documentación. 

## Clonación del proyecto 

Inicialmente, se debe clonar el actual repositorio con el uso del comando: 

    git clone https://github.com/juanjdev/dashboard-men-react


## Instalando el proyecto 

La instalación del proyecto es muy sencilla. 

En una consola dentro del proyecto previamente descargado, realice la instalación de las librerías necesarias para la ejecución del proyecto usando el comando:

    npm install

Este comando descarga todas las librerias utilizadas para la creación del proyecto así como para el funcionamiento del mismo (visualización de datos, fetching de datos, entre otros)

## Funcionamiento del proyecto

Una vez instaladas las librerías, el proyecto podrá ser ejecutado correctamente de manera local, para esto, haga uso del comando

    npm run dev

Lo que hace este comando es habilitar un servicio web en la dirección [localhost:5173](localhost:5173) con el proyecto frontend corriendo en sí. Puede acceder a esta dirección desde un navegador (se recomienda el uso de Google Chrome para una mejor y más eficiente experiencia), o en su defecto, presionando la letra *o* en la terminal de comandos.

> **NOTA: Tenga en cuenta que para visualizar correctamente los datos, debe haber ejecutado previamente el servidor de Django en la sección anterior del presente documento. De lo contrario, el servicio web no
hallará datos para consumir.**

## Endpoints de la aplicación
La aplicación está dividida por cada uno de los endpoints correspondientes a cada una de las preguntas. 

Las peticiones pueden verse del siguiente estilo: 

|Método|URL|
|--|--|
| GET | localhost:5173/ |
| GET | localhost:5173/first-question |
| GET | localhost:5173/second-question |
| GET | localhost:5173/third-question |
| GET | localhost:5173/fourth-question |
| GET | localhost:5173/fifth-question |
| GET | localhost:5173/sixth-question |
| GET | localhost:5173/seventh-question |
| GET | localhost:5173/eight-question |
| GET | localhost:5173/ninth-question|
| GET | localhost:5173/tenth-question |
