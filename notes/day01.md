## 1.- Qué es DevOps
DevOps es una cultura y conjunto de prácticas que integran desarrollo (Dev) y operaciones (Ops) para entregar software de forma continua, automatizada y confiable.

Se basa en:

- Automatización
- Colaboración entre equipos
- Integración continua
- Entrega continua
- Observabilidad del sistema

Objetivo principal:
- Reducir tiempo entre: ESCRIBIR CÓDIGO -> DESPLEGARLO EN PRODUCCIÓN

Pipeline típico de DevOps:
Code
 ↓
Build
 ↓
Test
 ↓
Package
 ↓
Deploy
 ↓
Monitor
 ↓
Feedback

**Fase   Qué ocurre**
Code	 El desarrollador escribe código
Build	 Se compila o empaqueta
Test	 Se ejecutan tests automáticos
Package	 Se crea un artefacto (ej: Docker image)
Deploy	 Se despliega en servidores
Monitor	 Se monitoriza la aplicación
Feedback Se recogen métricas y errores 

Developer
 ↓
GitHub
 ↓
CI Pipeline
 ↓
Docker build
 ↓
Container Registry
 ↓
Kubernetes deploy
 ↓
Monitoring (Prometheus/Grafana

Es una metodología que permite entregar software rápidamente mediante automatización, colaboración y observabilidad. Con cultura propia
Pipeline típico de devOps
Código >>> Build >>> Test >>> Deploy >>> Monitor (+Feedback)

2.- Por qué Linux es importante
¿Por qué Linux es importante?

Razones técnicas
1. Dominio en servidores

Más del 90% de servidores cloud usan Linux.

Ejemplos: AWS EC2, Google Cloud, Azure, Kubernetes nodes

2. Base de herramientas DevOps

La mayoría de herramientas DevOps funcionan sobre Linux:

Docker
Kubernetes
Terraform
Ansible
Git
Jenkins

3. Automatización potente

Linux permite automatizar con:

Bash
Python
cron
systemd
ssh

4. Kernel optimizado para servidores

Linux tiene:

estabilidad

eficiencia

control de recursos

networking avanzado


3.- Comandos aprendidos
# Guía Profesional de Comandos Linux (DevOps)

## Navegación por el sistema

pwd
Muestra el directorio actual.

Ejemplo:
pwd

cd
Permite cambiar de directorio.

Ejemplos:
cd carpeta
cd ..
cd ~

cd carpeta/subcarpeta


## Listar archivos y directorios

ls
Lista los archivos del directorio actual.

Ejemplo:
ls

ls -a
Muestra archivos ocultos.

Ejemplo:
ls -a

ls -lha
Lista detallada con tamaños legibles.

Opciones:
-l  formato largo
-h  tamaños legibles
-a  archivos ocultos

Ejemplo:
ls -lha


## Información del usuario

whoami
Muestra el usuario actual.

Ejemplo:
whoami

id
Muestra UID, GID y grupos del usuario.

Ejemplo:
id


## Localización de comandos

which
Muestra la ruta del ejecutable de un comando.

Ejemplo:
which python

Resultado típico:
/usr/bin/python

whereis
Busca la ubicación de binarios, código fuente y manuales.

Ejemplo:
whereis python


## Información del sistema

uname -a
Muestra información del sistema operativo y kernel.

Ejemplo:
uname -a

Ejemplo de salida:
Linux ubuntu 6.5.0 x86_64 GNU/Linux


## Gestión de procesos

ps
Lista procesos activos.

Ejemplo:
ps

ps aux
Lista completa de procesos del sistema.

Ejemplo:
ps aux

top
Monitoriza procesos en tiempo real.

Ejemplo:
top

htop
Versión avanzada e interactiva de top.

Ejemplo:
htop


## Memoria del sistema

free -h
Muestra uso de memoria RAM en formato legible.

Ejemplo:
free -h


## Gestión de procesos

kill
Termina un proceso mediante su PID.

Ejemplo:
kill 1234

Forzar cierre de proceso:
kill -9 1234


## Gestión de archivos

cat
Muestra el contenido de un archivo.

Ejemplo:
cat archivo.txt

cp
Copia archivos o directorios.

Ejemplos:
cp archivo1 archivo2
cp -r carpeta1 carpeta2

rm
Elimina archivos o directorios.

Ejemplos:
rm archivo.txt
rm -r carpeta

Precaución:
rm -rf elimina sin confirmación.


## Editor de texto

nano
Editor de texto en terminal.

Ejemplo:
nano archivo.txt

Atajos principales:
CTRL + O  Guardar
CTRL + X  Salir


## Comandos DevOps más usados del día 1

pwd
ls
ls -a
ls -lha
cd
whoami
id
which
whereis
uname -a
ps aux
top
htop
free -h
kill
cp
rm
cat
nano
