# DevOps Journey — Semana 2 — Día 8
# Introducción a Docker y Contenedores

## 1. Problema que resuelve Docker

Uno de los problemas más comunes en desarrollo de software es la diferencia entre entornos:

- desarrollo
- testing
- staging
- producción

Muchas veces ocurre la situación conocida como:

“En mi máquina funciona”.

Esto ocurre porque cada entorno puede tener:

- diferentes versiones de librerías
- dependencias incompatibles
- configuraciones distintas
- sistemas operativos diferentes

Docker resuelve este problema permitiendo empaquetar una aplicación junto con todas sus dependencias, asegurando que se ejecute exactamente igual en cualquier entorno.

---

# 2. Qué es Docker

Docker es una plataforma open-source para crear, distribuir y ejecutar aplicaciones dentro de contenedores.

Un contenedor es un entorno ligero que incluye:

- código de la aplicación
- runtime (Python, Node, Java, etc.)
- librerías
- dependencias
- configuración
- sistema de archivos necesario

Gracias a esto una aplicación puede ejecutarse igual en:

- un portátil
- un servidor
- una máquina virtual
- una nube pública
- un pipeline CI/CD

---

# 3. Qué es un contenedor

Un contenedor es una unidad de software que empaqueta:

- aplicación
- dependencias
- librerías
- configuración

Características principales:

1. Aislado del sistema host
2. Ligero
3. Portable
4. Reproducible
5. Arranque rápido

Ejemplo conceptual:

Contenedor
│
├── aplicación
├── runtime (python/node/java)
├── dependencias
├── librerías
└── configuración

El contenedor puede ejecutarse en cualquier máquina que tenga Docker instalado.

---

# 4. Arquitectura de Docker

Docker está compuesto por varios componentes principales.
- Docker Engine
- Docker Images
- Docker Containers
- Docker Registry

## Docker Engine

Es el motor principal que permite ejecutar contenedores.

Responsabilidades:

- construir imágenes
- ejecutar contenedores
- gestionar redes
- gestionar volúmenes

## Docker Daemon

El daemon es el servicio que corre en segundo plano.

dockerd

Se encarga de:

- gestionar imágenes
- ejecutar contenedores
- administrar redes
- gestionar almacenamiento

## Docker CLI

La CLI es la interfaz de línea de comandos que permite interactuar con Docker.

Comando principal:

docker

Ejemplos de uso:

docker run
docker build
docker pull
docker ps
docker stop

## Docker Hub

Docker Hub es un repositorio público de imágenes Docker.

Funciona como un registry de contenedores.

Contiene miles de imágenes listas para usar.

Ejemplos de imágenes:

- nginx
- ubuntu
- node
- python
- redis
- mysql
- postgres

Ejemplo de descarga de una imagen:

docker pull nginx

---

# 5. Componentes fundamentales de Docker

## Imágenes

Una imagen es una plantilla inmutable que contiene todo lo necesario para ejecutar un contenedor.

Incluye:

- sistema base
- librerías
- runtime
- dependencias

Ejemplos:

python:3.11
node:20
nginx
ubuntu

Las imágenes pueden descargarse desde Docker Hub o construirse localmente.

## Contenedores

Un contenedor es una instancia en ejecución de una imagen.

Ejemplo:

Imagen → nginx
Contenedor → nginx-container

Se pueden ejecutar múltiples contenedores a partir de la misma imagen.

## Volúmenes

Los contenedores son efímeros, lo que significa que si se eliminan los datos desaparecen.

Los volúmenes permiten persistir datos fuera del contenedor.

Ejemplo sin volumen:

contenedor eliminado → datos desaparecen

Ejemplo con volumen:

contenedor eliminado → datos permanecen

Uso típico:

- bases de datos
- almacenamiento de archivos
- logs

## Redes

Docker permite crear redes virtuales para que los contenedores puedan comunicarse entre sí.

Ejemplo de arquitectura:

frontend container
↓
backend container
↓
database container

Esto permite crear aplicaciones distribuidas basadas en microservicios.

---

# 6. Docker vs Máquinas Virtuales

## Máquinas Virtuales

Arquitectura:

Hardware
↓
Hypervisor
↓
Guest OS
↓
Aplicación

Características:

- sistema operativo completo
- mayor consumo de recursos
- arranque más lento
- mayor tamaño

## Contenedores

Arquitectura:

Hardware  
↓  
Host OS  
↓  
Docker Engine  
↓  
Contenedores  

Características:

- comparten el kernel del host
- ligeros
- arranque rápido
- menor consumo de recursos

## Comparación

Característica | Contenedores | Máquinas Virtuales  
Arranque | segundos | minutos  
Peso | MB | GB  
Recursos | bajo | alto  
Kernel | compartido | propio  
Portabilidad | muy alta | menor  

---

# 7. Ventajas de Docker

## Portabilidad

Una aplicación empaquetada en un contenedor puede ejecutarse igual en:

- desarrollo
- testing
- producción
- cloud

## Aislamiento

Cada contenedor tiene:

- su runtime
- sus dependencias
- su configuración

Esto evita conflictos entre aplicaciones.

## Escalabilidad

Docker facilita la creación de arquitecturas modernas basadas en microservicios.

Permite ejecutar múltiples contenedores de forma independiente.

## Consistencia

El mismo contenedor funciona exactamente igual en todos los entornos.

Esto elimina el problema de diferencias entre máquinas.

---

# 8. Casos reales de uso

Docker se utiliza ampliamente en entornos DevOps.

## Microservicios

Cada servicio puede ejecutarse en su propio contenedor.

Ejemplo:

service-users  
service-orders  
service-payments  
service-auth  

## CI/CD

Docker se utiliza en pipelines para:

- compilar aplicaciones
- ejecutar tests
- crear builds reproducibles

## Desarrollo local

Permite levantar entornos completos rápidamente.

Ejemplo:

docker run postgres  
docker run redis  
docker run nginx  

En segundos puedes tener un stack completo funcionando.

---

# 9. Flujo típico de trabajo con Docker

Proceso habitual:

Dockerfile  
↓  
docker build  
↓  
imagen Docker  
↓  
docker run  
↓  
contenedor en ejecución  

---

# 10. Ejemplo básico de ejecución

Descargar imagen:

docker pull nginx  

Ejecutar contenedor:

docker run nginx  

Docker crea automáticamente un contenedor basado en esa imagen.


# Contenedor

Instancia en ejecución de una imagen.

Ejemplo:

docker run nginx

---

# Instalación de Docker

sudo apt update  
sudo apt install docker.io  

Verificar instalación:

docker --version

---

# Comandos básicos

Descargar imagen:

docker pull nginx

Ver imágenes:

docker images

Ejecutar contenedor:

docker run nginx

Ver contenedores:

docker ps

Ver todos:

docker ps -a

Detener contenedor:

docker stop ID

Eliminar contenedor:

docker rm ID

---

# Ejecutar contenedor en segundo plano

docker run -d nginx

Ejemplo con puerto:

docker run -d -p 8080:80 nginx

---

# Ver logs

docker logs ID

Seguir logs:

docker logs -f ID

---

# Entrar al contenedor

docker exec -it ID bash

---

# Flujo Docker en DevOps

Developer  
↓  
Dockerfile  
↓  
Docker Image  
↓  
Docker Registry  
↓  
Deploy en Kubernetes

---

# 11. Por qué Docker es fundamental en DevOps

Docker es una herramienta esencial porque permite:

- entornos reproducibles
- despliegues consistentes
- portabilidad entre sistemas
- integración con CI/CD
- arquitectura basada en microservicios

La mayoría de plataformas modernas utilizan Docker como base para:

- Kubernetes
- despliegues cloud
- pipelines DevOps
- infraestructura moderna

---

# 12. Conceptos clave a recordar

Docker es una plataforma para ejecutar aplicaciones en contenedores.

Componentes fundamentales:

- Docker Engine
- Docker CLI
- Docker Daemon
- Docker Hub
- Imágenes
- Contenedores
- Volúmenes
- Redes

Comprender estos conceptos es la base para aprender posteriormente:

- Docker avanzado
- Docker Compose
- Kubernetes
- despliegues en cloud
