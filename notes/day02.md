# Día 2 — Introducción a Linux y la Terminal (Guía ampliada)

## 1. Por qué la terminal es un superpoder DevOps

La terminal es la herramienta principal para trabajar con servidores Linux, automatizar tareas y gestionar infraestructura.

En entornos profesionales, los ingenieros DevOps trabajan principalmente mediante terminal.

Flujo típico:

Developer Laptop  
↓  
SSH  
↓  
Linux Server  
↓  
Docker / Kubernetes / Logs / Debug  

Ejemplo real de trabajo:

ssh devops@server-prod  
tail -f /var/log/nginx/error.log  
docker ps  
kubectl get pods  

---

# 2. Comandos importantes de conectividad

## ssh

Permite conectarse a un servidor remoto.

Ejemplo:

ssh usuario@servidor

Ejemplo real:

ssh devops@192.168.1.50

Usando clave privada:

ssh -i ~/.ssh/id_rsa usuario@server

Uso empresarial:

- acceso a servidores
- despliegues
- mantenimiento
- debugging

---

## scp

Permite copiar archivos entre máquinas.

Copiar archivo:

scp archivo.txt usuario@server:/ruta/

Copiar carpeta:

scp -r carpeta usuario@server:/ruta/

Uso DevOps:

- enviar backups
- copiar configuraciones
- mover artefactos

---

# 3. Networking básico

## ping

Permite comprobar conectividad con otro host.

Ejemplo:

ping google.com

Limitar número de paquetes:

ping -c 5 google.com

Uso DevOps:

- comprobar conectividad
- verificar resolución DNS
- detectar problemas de red

---

## nc (netcat)

Herramienta muy potente para debugging de red.

Ejemplo:

nc -zv google.com 80

Sirve para comprobar si un puerto está abierto.

Uso profesional:

- verificar servicios
- probar conexiones TCP
- debugging de red

---

## ss

Muestra conexiones de red y puertos abiertos.

Ver puertos abiertos:

ss -tuln

Buscar un servicio específico:

ss -tunlp | grep nginx

Uso DevOps:

- detectar servicios escuchando
- analizar conexiones
- debugging de red

---

# 4. Monitorización del sistema

## uptime

Muestra cuánto tiempo lleva el sistema encendido y la carga del sistema.

Ejemplo:

uptime

Salida típica:

10:15 up 20 days, load average: 0.20

---

## top

Monitoriza procesos en tiempo real.

Ejemplo:

top

Permite ver:

- uso de CPU
- memoria
- procesos activos

---

## htop

Versión mejorada de top.

Ejemplo:

htop

Ventajas:

- interfaz más visual
- navegación con teclado
- gestión de procesos

---

# 5. Gestión de procesos

## ps

Lista procesos del sistema.

Ejemplo:

ps

Versión más usada:

ps aux

Buscar procesos:

ps aux | grep nginx

---

# 6. Logs del sistema

## journalctl

Permite consultar logs del sistema en sistemas con systemd.

Ver logs de un servicio:

journalctl -u nginx

Ver errores recientes:

journalctl -xe

Uso DevOps:

- investigar fallos
- analizar errores de servicios
- revisar actividad del sistema

---

# 7. Servicios del sistema

## systemctl

Gestiona servicios del sistema.

Ver estado de servicio:

systemctl status nginx

Reiniciar servicio:

systemctl restart nginx

Iniciar servicio:

systemctl start nginx

Detener servicio:

systemctl stop nginx

Habilitar servicio al arranque:

systemctl enable nginx

Uso empresarial:

- nginx
- docker
- bases de datos
- servicios de infraestructura

---

# 8. Sistema de archivos Linux

Linux sigue el estándar FHS (Filesystem Hierarchy Standard).

Todo comienza desde el directorio raíz:

/

---

## Directorios más importantes

/ → raíz del sistema  
/bin → comandos básicos  
/etc → archivos de configuración  
/home → directorios de usuario  
/var → logs y datos variables  
/tmp → archivos temporales  
/usr → aplicaciones instaladas  
/boot → archivos de arranque  

---

## Directorios importantes para DevOps

### /etc

Contiene configuraciones del sistema.

Ejemplos:

/etc/nginx/nginx.conf  
/etc/ssh/sshd_config  

---

### /var/log

Contiene logs del sistema.

Ejemplo:

cd /var/log

Ver logs:

tail -f syslog

---

### /proc

Sistema virtual con información del sistema.

Ejemplo:

cat /proc/cpuinfo

---

# 9. Usuarios y permisos

Linux maneja tres niveles de permisos:

Owner  
Group  
Others  

Tipos de permiso:

r = read  
w = write  
x = execute  

Ejemplo:

-rwxr-xr-x

---

## chmod

Permite cambiar permisos.

Ejemplo:

chmod 755 script.sh

Significado:

7 = rwx  
5 = r-x  
5 = r-x  

---

## chown

Permite cambiar propietario.

Ejemplo:

chown usuario:grupo archivo.txt

---

# 10. Gestión de usuarios

Crear usuario:

sudo adduser usuario

Eliminar usuario:

sudo deluser usuario

Añadir usuario al grupo sudo:

sudo usermod -aG sudo usuario

---

# 11. Gestión de paquetes en Ubuntu

Ubuntu usa el gestor de paquetes APT.

Actualizar repositorios:

sudo apt update

Actualizar sistema:

sudo apt upgrade

Instalar programa:

sudo apt install nginx

Buscar paquete:

apt search python3

Eliminar paquete:

sudo apt remove nginx

---

# 12. Ejercicio práctico

Crear directorio:

mkdir dia2-devops

Entrar al directorio:

cd dia2-devops

Crear archivo:

echo "Hola DevOps" > saludos.txt

Copiar archivo:

cp saludos.txt copia.txt

Renombrar archivo:

mv copia.txt hola.txt

Eliminar archivo:

rm saludos.txt

---

# 13. Ejercicio avanzado (nivel DevOps)

Buscar archivos con permisos peligrosos:

find / -type f -perm 0777 2>/dev/null

Esto detecta archivos que cualquier usuario puede modificar.

---

# 14. Ejercicio DevOps real

Instalar Nginx:

sudo apt update  
sudo apt install nginx  

Ver estado:

systemctl status nginx

Probar servidor:

curl localhost

---

# 15. Qué hemos aprendido en el Día 2

Terminal Linux  
Networking básico  
Gestión de procesos  
Logs del sistema  
Servicios Linux  
Filesystem  
Usuarios y permisos  
Gestión de paquetes  

Esto constituye una base sólida para trabajar con servidores Linux en entornos DevOps.
