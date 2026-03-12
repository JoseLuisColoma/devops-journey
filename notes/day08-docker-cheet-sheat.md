# Docker — 12 Comandos Más Usados en DevOps

## Ver contenedores en ejecución
docker ps

## Ver todos los contenedores (incluidos detenidos)
docker ps -a

## Ver imágenes descargadas
docker images

## Descargar una imagen desde Docker Hub
docker pull nginx

## Ejecutar un contenedor
docker run nginx

## Ejecutar un contenedor en segundo plano
docker run -d nginx

## Ejecutar contenedor con mapeo de puertos
docker run -d -p 8080:80 nginx

## Ver logs de un contenedor
docker logs CONTAINER_ID

## Entrar dentro de un contenedor
docker exec -it CONTAINER_ID bash

## Detener un contenedor
docker stop CONTAINER_ID

## Eliminar un contenedor
docker rm CONTAINER_ID

## Eliminar una imagen
docker rmi IMAGE_ID


# Docker Cheatsheet DevOps (30 comandos esenciales)

## Información básica

docker --version
docker info

## Gestión de imágenes

docker images
docker pull IMAGE
docker build -t IMAGE .
docker rmi IMAGE

## Gestión de contenedores

docker run IMAGE
docker run -d IMAGE
docker run -d -p HOST:CONTAINER IMAGE
docker run --name CONTAINER IMAGE

docker ps
docker ps -a

docker stop CONTAINER
docker start CONTAINER
docker restart CONTAINER

docker rm CONTAINER

## Logs y debugging

docker logs CONTAINER
docker logs -f CONTAINER

docker exec -it CONTAINER bash

docker top CONTAINER
docker stats

## Networking

docker network ls
docker network inspect NETWORK
docker network create NETWORK

## Volumes

docker volume ls
docker volume create VOLUME
docker volume inspect VOLUME

## Limpieza

docker system prune
docker container prune
docker image prune
